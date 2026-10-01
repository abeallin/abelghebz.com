import { seo } from "../src/content/seo.js";

export default function sitemap() {
  return Object.keys(seo.pages).map((path) => ({ url: `${seo.site}${path === "/" ? "" : path}` }));
}
