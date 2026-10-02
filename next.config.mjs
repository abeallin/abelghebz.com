/** @type {import('next').NextConfig} */
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";

// The CV's links carry a tag from the file's contents, so any change to the CV changes the link and no browser,
// phone or proxy can hand back an old copy to someone clicking through from the site.
const version = (file) => createHash("sha1").update(readFileSync(new URL(`./public/assets/${file}`, import.meta.url))).digest("hex").slice(0, 10);

// No `output: "standalone"`: Railway starts the app with `next start`, which warns under standalone.
const nextConfig = {
  env: {
    CV_PDF_VERSION: version("abel_ghebrezadik_cv.pdf"),
    CV_DOCX_VERSION: version("abel_ghebrezadik_cv.docx"),
  },
  images: {
    // WebP only. AVIF saved just 7-20% here but took 2-3x longer to encode on first request (0.8s for one phone
    // screenshot locally); on CI's small runner that queued page loads past 30s, and first visitors after a deploy wait.
    formats: ["image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 7,
  },
  async headers() {
    // Public images keep their names when replaced, so a week (not immutable), revalidated in the background.
    const week = "public, max-age=604800, stale-while-revalidate=86400";
    // The CV keeps one stable URL for links on LinkedIn and in emails, so it must never be served stale: browsers and
    // Cloudflare revalidate every time (cheap, via the ETag). The PDF opens in the browser; the Word file downloads.
    const fresh = "public, max-age=0, must-revalidate";
    return [
      {
        source: "/assets/abel_ghebrezadik_cv.pdf",
        headers: [
          { key: "Cache-Control", value: fresh },
          { key: "Content-Disposition", value: 'inline; filename="Abel-Ghebrezadik-CV.pdf"' },
        ],
      },
      {
        source: "/assets/abel_ghebrezadik_cv.docx",
        headers: [
          { key: "Cache-Control", value: fresh },
          { key: "Content-Disposition", value: 'attachment; filename="Abel-Ghebrezadik-CV.docx"' },
        ],
      },
      { source: "/screenshots/:file*", headers: [{ key: "Cache-Control", value: week }] },
      { source: "/me.jpg", headers: [{ key: "Cache-Control", value: week }] },
    ];
  },
};

export default nextConfig;
