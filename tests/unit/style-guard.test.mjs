import { test } from "node:test";
import assert from "node:assert/strict";
import { scanHtml, scanCss } from "../../scripts/style-guard.mjs";

const clean = '<main><h1 id="hero-name"><span>Abel</span> <span>Ghebrezadik</span></h1><p>Hello</p></main>';

test("a clean page reports nothing", () => {
  assert.deepEqual(scanHtml(clean), []);
  assert.deepEqual(scanCss(".a{color:red;font-family:var(--font-author),system-ui,sans-serif}"), []);
});

const html = [
  ["bullet glyph", "<p>• one</p>"],
  ["full stop after the hero name", '<h1 id="hero-name"><span>Abel</span> <span>Ghebrezadik</span>.</h1>'],
  ["input marker", "<p>[Your input: the problem]</p>"],
  ["stale figure", "<p>scaled to 300,000 users</p>"],
];
for (const [name, sample] of html) {
  test(`html: reports ${name}`, () => {
    assert.ok(scanHtml(sample).some((hit) => hit.rule === name), JSON.stringify(scanHtml(sample)));
  });
}

const css = [
  ["all-caps text", ".x{text-transform:uppercase}"],
  ["gradient", ".x{background:linear-gradient(red,blue)}"],
  ["gradient", ".x{background-image:radial-gradient(red,blue)}"],
  ["list marker", ".x{list-style-type:disc}"],
  ["font outside the system", ".x{font-family:Inter,sans-serif}"],
];
for (const [name, sample] of css) {
  test(`css: reports ${name} in ${sample}`, () => {
    assert.ok(scanCss(sample).some((hit) => hit.rule === name), JSON.stringify(scanCss(sample)));
  });
}

test("css: Tailwind's own reset declarations are not reported", () => {
  assert.deepEqual(scanCss("ol,ul,menu{list-style:none}"), []);
});
