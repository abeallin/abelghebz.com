import { notFound } from "next/navigation";
import { ogCase, ogSize, ogContentType } from "../../../src/lib/og.js";
import { COVER } from "../../../src/content/covers.js";
import { projects, projectBySlug } from "../../../src/content/projects.js";

export const dynamicParams = false;
export const alt = "Case study";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }) {
  const { slug } = await params;
  const p = projectBySlug(slug);
  if (!p) notFound();
  return ogCase({ name: p.name, headline: p.headline, cover: COVER[slug], screens: p.screens });
}
