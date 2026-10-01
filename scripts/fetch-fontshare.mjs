// Downloads the Fontshare faces the site uses into src/fonts/ (git-ignored).
// The ITF Free Font License allows self-hosting but forbids passing the files on,
// and this repo is public, so they are fetched at build time and never committed.
// Files are saved unmodified (the licence forbids conversion or subsetting).
import { mkdir, writeFile, access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const OUT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "src", "fonts");

// family slug -> weights. woff2 serves the site; woff serves next/og (satori can't read woff2).
export const FAMILIES = {
  erode: [400, 500],
  author: [400, 500, 600],
};

export function parseFaces(css) {
  const faces = [];
  for (const block of css.match(/@font-face\s*{[^}]*}/g) ?? []) {
    const weight = Number(block.match(/font-weight:\s*(\d+)/)?.[1]);
    const style = block.match(/font-style:\s*(\w+)/)?.[1] ?? "normal";
    const woff2 = block.match(/url\(['"]?([^'")]+\.woff2)['"]?\)/)?.[1];
    const woff = block.match(/url\(['"]?([^'")]+\.woff)['"]?\)/)?.[1];
    if (weight && style === "normal") faces.push({ weight, woff2, woff });
  }
  return faces;
}

const abs = (u) => (u.startsWith("//") ? `https:${u}` : u);

async function exists(p) {
  try {
    await access(p);
    return true;
  } catch {
    return false;
  }
}

async function get(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} for ${url}`);
  return res;
}

async function main() {
  await mkdir(OUT, { recursive: true });
  let fetched = 0;
  for (const [family, weights] of Object.entries(FAMILIES)) {
    const spec = `${family}@${weights.join(",")}`;
    const css = await (await get(`https://api.fontshare.com/v2/css?f[]=${spec}&display=swap`)).text();
    const faces = parseFaces(css);
    for (const weight of weights) {
      const face = faces.find((f) => f.weight === weight);
      if (!face?.woff2 || !face?.woff) throw new Error(`Fontshare has no ${family} ${weight} woff2+woff`);
      for (const [ext, url] of [["woff2", face.woff2], ["woff", face.woff]]) {
        const file = path.join(OUT, `${family}-${weight}.${ext}`);
        if (await exists(file)) continue;
        await writeFile(file, Buffer.from(await (await get(abs(url))).arrayBuffer()));
        fetched++;
      }
    }
  }
  console.log(`fonts: ${fetched} downloaded, src/fonts ready`);
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  main().catch((err) => {
    console.error(`fonts: ${err.message}`);
    process.exit(1);
  });
}
