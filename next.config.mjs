/** @type {import('next').NextConfig} */
// No `output: "standalone"`: Railway starts the app with `next start`, which warns under standalone.
const nextConfig = {
  images: {
    // AVIF first: about 20-30% smaller than WebP for the app screenshots; browsers without it get WebP.
    formats: ["image/avif", "image/webp"],
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
