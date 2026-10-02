import { projects } from "./projects.js";
import { profile } from "./profile.js";

const site = "https://abelghebz.com";
const name = profile.name;

export const seo = {
  site,
  name,
  pages: {
    "/": {
      title: `${name} | Lead / Senior Software Engineer, London`,
      description:
        "Lead / Senior Software Engineer with ten years across finance, property, health and gambling. Case studies, experience and CV, or book a 30-minute call.",
    },
    ...Object.fromEntries(
      projects.map((p) => [
        `/work/${p.slug}`,
        { title: `${p.name}: case study | ${name}`, description: p.headline + ". " + p.summary },
      ]),
    ),
  },
};
