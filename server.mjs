// Serves the static export in out/ (decision 0019). The site has no server logic, so this replaces
// `next start` (~0.4 GB on Railway) with a file server of a few tens of MB. It also does the three things
// Next did at request time: the www -> apex redirect, the security and cache headers, and the 404 page.
// No dependencies: Node's own http, fs and zlib, so it runs the same on Railway, in CI and for Playwright.
import fs from "node:fs";
import http from "node:http";
import path from "node:path";
import zlib from "node:zlib";

const ROOT = path.resolve(import.meta.dirname, process.env.STATIC_ROOT ?? "out");
const PORT = Number(process.env.PORT ?? 3000);
const APEX = "abelghebz.com";

const SECURITY_HEADERS = {
  "Strict-Transport-Security": "max-age=63072000; includeSubDomains; preload",
  "X-Frame-Options": "SAMEORIGIN",
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
};

// Public images keep their names when replaced, so a week (not immutable), revalidated in the background.
const WEEK = "public, max-age=604800, stale-while-revalidate=86400";
// The CV keeps one stable URL for links on LinkedIn and in emails, so it must never be served stale:
// browsers and Cloudflare revalidate every time (cheap, via the ETag).
const FRESH = "public, max-age=0, must-revalidate";
const IMMUTABLE = "public, max-age=31536000, immutable";

const CV_FILES = {
  "/assets/abel_ghebrezadik_cv.pdf": 'inline; filename="Abel-Ghebrezadik-CV.pdf"',
  "/assets/abel_ghebrezadik_cv.docx": 'attachment; filename="Abel-Ghebrezadik-CV.docx"',
};

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
  ".pdf": "application/pdf",
  ".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
};
// Next writes generated metadata images (opengraph-image, icon, apple-icon) without an extension.
const EXTENSIONLESS_PNG = new Set(["opengraph-image", "twitter-image", "icon", "apple-icon"]);
const COMPRESSIBLE = new Set([".html", ".js", ".css", ".json", ".txt", ".xml", ".webmanifest", ".svg"]);

function contentType(file) {
  const ext = path.extname(file).toLowerCase();
  if (TYPES[ext]) return TYPES[ext];
  if (EXTENSIONLESS_PNG.has(path.basename(file))) return "image/png";
  return "application/octet-stream";
}

function cacheControl(urlPath, file) {
  if (CV_FILES[urlPath]) return FRESH;
  if (urlPath.startsWith("/_next/static/")) return IMMUTABLE;
  if (urlPath.startsWith("/_img/") || urlPath.startsWith("/screenshots/") || urlPath === "/me.jpg") return WEEK;
  if (file.endsWith(".html")) return FRESH;
  return null;
}

/** The file under ROOT for a URL path: the path itself, then .html, then /index.html. Null outside ROOT. */
export function resolveFile(urlPath, root = ROOT) {
  let decoded;
  try {
    decoded = decodeURIComponent(urlPath);
  } catch {
    return null;
  }
  if (decoded.includes("\0")) return null;
  const base = path.join(root, path.normalize(decoded));
  if (base !== root && !base.startsWith(root + path.sep)) return null;
  const candidates = [base, `${base}.html`, path.join(base, "index.html")];
  // The client asks for a page's prefetch payload as one dotted name (__next.work.$d$slug.__PAGE__.txt)
  // while the export writes the segments as folders (__next.work/$d$slug/__PAGE__.txt).
  const name = path.basename(base);
  if (name.startsWith("__next.") && name.endsWith(".txt")) {
    const parts = name.slice("__next.".length, -".txt".length).split(".");
    if (parts.length > 1) {
      candidates.push(path.join(path.dirname(base), `__next.${parts[0]}`, ...parts.slice(1, -1), `${parts.at(-1)}.txt`));
    }
  }
  for (const candidate of candidates) {
    try {
      if (fs.statSync(candidate).isFile()) return candidate;
    } catch {
      // not there; try the next form
    }
  }
  return null;
}

function send(req, res, status, file, urlPath) {
  const stat = fs.statSync(file);
  const etag = `W/"${stat.size.toString(16)}-${Math.floor(stat.mtimeMs).toString(16)}"`;
  const headers = { ...SECURITY_HEADERS, "Content-Type": contentType(file), ETag: etag, Vary: "Accept-Encoding" };
  const cache = cacheControl(urlPath, file);
  if (cache) headers["Cache-Control"] = cache;
  if (CV_FILES[urlPath]) headers["Content-Disposition"] = CV_FILES[urlPath];
  if (status === 200 && req.headers["if-none-match"] === etag) {
    res.writeHead(304, headers);
    res.end();
    return;
  }
  const gzip = COMPRESSIBLE.has(path.extname(file)) && (req.headers["accept-encoding"] ?? "").includes("gzip") && stat.size > 1024;
  if (gzip) headers["Content-Encoding"] = "gzip";
  else headers["Content-Length"] = stat.size;
  res.writeHead(status, headers);
  if (req.method === "HEAD") {
    res.end();
    return;
  }
  const stream = fs.createReadStream(file);
  (gzip ? stream.pipe(zlib.createGzip()) : stream).pipe(res);
}

export function handle(req, res) {
  const host = (req.headers.host ?? "").toLowerCase();
  const url = new URL(req.url ?? "/", "http://localhost");
  if (host === `www.${APEX}` || host.startsWith(`www.${APEX}:`)) {
    res.writeHead(308, { ...SECURITY_HEADERS, Location: `https://${APEX}${url.pathname}${url.search}` });
    res.end();
    return;
  }
  if (req.method !== "GET" && req.method !== "HEAD") {
    res.writeHead(405, { ...SECURITY_HEADERS, Allow: "GET, HEAD" });
    res.end();
    return;
  }
  const file = resolveFile(url.pathname);
  if (file) return send(req, res, 200, file, url.pathname);
  const notFound = path.join(ROOT, "404.html");
  if (fs.existsSync(notFound)) return send(req, res, 404, notFound, url.pathname);
  res.writeHead(404, SECURITY_HEADERS);
  res.end("Not found");
}

if (import.meta.main ?? process.argv[1] === import.meta.filename) {
  if (!fs.existsSync(ROOT)) {
    console.error(`server: ${ROOT} is missing; run npm run build first`);
    process.exit(1);
  }
  http
    .createServer((req, res) => {
      try {
        handle(req, res);
      } catch (err) {
        console.error("server error", req.url, err);
        if (!res.headersSent) res.writeHead(500, SECURITY_HEADERS);
        res.end();
      }
    })
    .listen(PORT, () => console.log(`static site on :${PORT} from ${ROOT}`));
}
