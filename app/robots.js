import { seo } from "../src/content/seo.js";

export default function robots() {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${seo.site}/sitemap.xml` };
}

// Built once at build time: the site is a static export (decision 0019).
export const dynamic = "force-static";
