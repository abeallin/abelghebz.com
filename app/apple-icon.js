import { monogram } from "../src/lib/og.js";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Apple masks the corners itself, so no radius here.
export default function AppleIcon() {
  return monogram(size, 0);
}
