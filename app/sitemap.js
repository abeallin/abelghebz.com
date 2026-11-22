import { seo } from "../src/content/seo.js";

export default function sitemap() {
  return Object.keys(seo.pages).map((path) => ({ url: `${seo.site}${path === "/" ? "" : path}` }));
}

// Built once at build time: the site is a static export (decision 0019).
export const dynamic = "force-static";
