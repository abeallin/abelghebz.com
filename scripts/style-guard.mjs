// Fails the build on the generic-AI tells Abel has ruled out (from XG's tropes.py and NO-AI-TELLS.md),
// on leftover [Your input] markers, and on the stale figures the redesign corrected.
// Scans the built HTML and CSS in .next/, so it checks what visitors actually get.
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HTML_RULES = [
  ["bullet glyph", />\s*[•▪‣]\s/],
  ["full stop after the hero name", /id="hero-name"[^]*?Ghebrezadik<\/span>\.<\/h1>/],
  ["input marker", /\[Your input/],
  ["stale figure", /300,000|500,000 users/],
  ["centred text", /class="[^"]*\btext-center\b/],
];

// Fonts that read as template defaults or belonged to the old site; the system is Erode, Author and JetBrains Mono.
const BANNED_FONTS = /\b(Inter|Roboto|Arial|Helvetica|Poppins|Montserrat|Open Sans|Space Grotesk|Space Mono|Instrument Serif|Syne|Geist|Satoshi)\b/;

const CSS_RULES = [
  ["all-caps text", /text-transform:\s*uppercase/],
  ["gradient", /(linear|radial|conic)-gradient\(/],
  ["list marker", /list-style(-type)?:\s*(disc|circle|square|decimal)/],
  ["font outside the system", new RegExp(`font-family:[^;}]*${BANNED_FONTS.source}`)],
];

const scan = (rules) => (text) =>
  rules.filter(([, rx]) => rx.test(text)).map(([rule, rx]) => ({ rule, match: text.match(rx)[0].slice(0, 80) }));

export const scanHtml = scan(HTML_RULES);
export const scanCss = scan(CSS_RULES);

async function files(dir, ext) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true, recursive: true })) {
    if (entry.isFile() && entry.name.endsWith(ext)) out.push(path.join(entry.parentPath, entry.name));
  }
  return out;
}

async function main() {
  const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", ".next");
  const html = await files(path.join(root, "server", "app"), ".html");
  const css = await files(path.join(root, "static"), ".css");
  if (html.length === 0 || css.length === 0) {
    console.error("style guard: no built HTML or CSS found; run the build first");
    process.exit(1);
  }
  let hits = 0;
  for (const [list, scanner] of [[html, scanHtml], [css, scanCss]]) {
    for (const file of list) {
      for (const hit of scanner(await readFile(file, "utf8"))) {
        hits++;
        console.error(`${path.relative(root, file)}: ${hit.rule}: ${hit.match}`);
      }
    }
  }
  console.log(`style guard: ${html.length} pages and ${css.length} stylesheets scanned, ${hits} problems`);
  process.exit(hits ? 1 : 0);
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) main();
