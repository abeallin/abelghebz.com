# 0019: A static export served by a small file server

- **Status:** Accepted. Abel asked for cheaper hosting on 22 November 2026 ("go for it" to the static-export option).
- **Date:** 22 November 2026
- **Decides:** how the site is built and served on Railway, and what replaces Next's runtime features.
- **Relates to:** [0011](0011-case-study-extras-header-and-performance.md) (its "no standalone, `next start`" note is
  superseded), [0013](0013-security-headers-and-dependency-upgrades.md),
  [0014](0014-cloudflare-email-protection-bypass-and-www-redirect.md) (the www redirect moves here).

## Context

`next start` kept about 0.44 GB of memory on Railway (about $0.15 a day) for a site with no server logic. There are no
API routes, middleware, server actions, `cookies()` or runtime `fetch`; `/work/[slug]` is built from
`generateStaticParams`; Cal.com and the enquiry router run in the browser. The memory went on Next itself and on
`/_next/image` resizing images on request (sharp's native memory stays behind), while 59% of requests were scanners
asking for `/.env` and `/wp-login.php`.

## Decision

1. **`output: "export"`.** `npm run build` writes plain files to `out/`. The metadata routes (sitemap, robots, icons,
   preview images) say `dynamic = "force-static"`.
2. **Images are resized at build, not on request.** `scripts/build-images.mjs` (the `postbuild` step) writes every image
   in `public/` as WebP at each width in `src/lib/image-widths.mjs` to `out/_img/`, and `src/lib/image-loader.js` (the
   `next/image` custom loader) names those files. One width list feeds both, so a srcset never names a missing file.
   `next dev` serves the originals.
3. **`server.mjs` serves `out/`** with Node's own `http`, `fs` and `zlib`, no dependencies. It does what Next did at
   request time: the www to apex redirect (308, decision 0014), the security headers (0013), the CV's cache and
   download headers, a week's cache for public images, immutable `/_next/static/`, ETags and 304s, gzip for text,
   `.html` and `index.html` lookup, the 404 page, and 404 for anything outside `out/`. It also maps the dotted prefetch
   names the client asks for (`__next.work.$d$slug.__PAGE__.txt`) to the folders the export writes them in.
4. **Tests run against `server.mjs`.** Playwright's web server is `node server.mjs`, the same command Railway runs
   (`npm start`), so the headers and redirect tests check what is served. `tests/e2e/static-server.spec.js` covers the
   404 page, scanner and traversal paths, methods, cache headers, ETags, and that every srcset width exists.

## Consequences

- Locally the server holds about 62 MB after serving every page (Next: about 440 MB on Railway). Expected saving about
  $0.13 a day.
- No image is ever resized on a request, so there is no first-visitor wait after a deploy and no sharp memory.
- A new runtime feature (an API route, middleware, a form handled on the server) would end the static export; it
  would need a server again, and this record would be superseded.
- Hosting stays portable: any static host or file server can serve `out/` given the headers in `server.mjs`.
