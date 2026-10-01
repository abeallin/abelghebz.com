import { seo } from "../src/content/seo.js";

export default function robots() {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${seo.site}/sitemap.xml` };
}
