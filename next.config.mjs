/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    // AVIF first: about 20-30% smaller than WebP for the app screenshots; browsers without it get WebP.
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 7,
  },
  async headers() {
    // Public images keep their names when replaced, so a week (not immutable), revalidated in the background.
    const week = "public, max-age=604800, stale-while-revalidate=86400";
    return [
      { source: "/screenshots/:file*", headers: [{ key: "Cache-Control", value: week }] },
      { source: "/me.jpg", headers: [{ key: "Cache-Control", value: week }] },
    ];
  },
};

export default nextConfig;
