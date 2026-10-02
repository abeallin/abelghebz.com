import { ogHome, ogSize, ogContentType } from "../src/lib/og.js";
import { profile } from "../src/content/profile.js";

export const alt = `${profile.name}, ${profile.role}`;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogHome();
}
