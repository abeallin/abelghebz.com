// Runs after `next build` (npm "postbuild"): writes every raster image in public/ as WebP at each width in
// src/lib/image-widths.mjs to out/_img/<path>.<width>.webp, which src/lib/image-loader.js points at.
// Replaces the runtime image optimiser the static site no longer has (decision 0019). Never enlarges: a
// width above the original is written at the original size, so every name the loader can produce exists.
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
import { IMAGE_QUALITY, IMAGE_WIDTHS } from "../src/lib/image-widths.mjs";

const root = path.resolve(import.meta.dirname, "..");
const publicDir = path.join(root, "public");
const outDir = path.join(root, "out", "_img");
const RASTER = new Set([".png", ".jpg", ".jpeg", ".webp"]);

function* walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (RASTER.has(path.extname(entry.name).toLowerCase())) yield full;
  }
}

if (!fs.existsSync(path.join(root, "out"))) {
  console.error("build-images: out/ is missing; run next build first");
  process.exit(1);
}

const started = Date.now();
let written = 0;
for (const file of walk(publicDir)) {
  const rel = path.relative(publicDir, file);
  const base = rel.slice(0, rel.length - path.extname(rel).length);
  const input = fs.readFileSync(file);
  for (const width of IMAGE_WIDTHS) {
    const target = path.join(outDir, `${base}.${width}.webp`);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    await sharp(input).resize({ width, withoutEnlargement: true }).webp({ quality: IMAGE_QUALITY }).toFile(target);
    written++;
  }
}
console.log(`build-images: ${written} files in ${((Date.now() - started) / 1000).toFixed(1)} s`);
