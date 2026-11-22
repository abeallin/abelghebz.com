// next/image loader for the static site (decision 0019). There is no image server: every image in
// public/ is resized at build by scripts/build-images.mjs to /_img/<path>.<width>.webp, so this only
// names the file. `next dev` has no /_img, so it serves the original.
export default function imageLoader({ src, width }) {
  if (process.env.NODE_ENV === "development" || !src.startsWith("/")) return src;
  const dot = src.lastIndexOf(".");
  const base = dot > src.lastIndexOf("/") ? src.slice(0, dot) : src;
  return `/_img${base}.${width}.webp`;
}
