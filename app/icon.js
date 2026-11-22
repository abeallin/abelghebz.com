import { monogram } from "../src/lib/og.js";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return monogram(size, 14);
}

// Built once at build time: the site is a static export (decision 0019).
export const dynamic = "force-static";
