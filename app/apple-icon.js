import { monogram } from "../src/lib/og.js";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Apple masks the corners itself, so no radius here.
export default function AppleIcon() {
  return monogram(size, 0);
}

// Built once at build time: the site is a static export (decision 0019).
export const dynamic = "force-static";
