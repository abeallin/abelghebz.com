import { test } from "node:test";
import assert from "node:assert/strict";
import { parseFaces } from "../../scripts/fetch-fontshare.mjs";

const css = `@font-face {
  font-family: 'Erode';
  src: url('//cdn.fontshare.com/wf/A/B/C.woff2') format('woff2'),
       url('//cdn.fontshare.com/wf/A/B/C.woff') format('woff'),
       url('//cdn.fontshare.com/wf/A/B/C.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: 'Erode';
  src: url('//cdn.fontshare.com/wf/X/Y/I.woff2') format('woff2'), url('//cdn.fontshare.com/wf/X/Y/I.woff') format('woff');
  font-weight: 400;
  font-style: italic;
}`;

test("parseFaces returns the normal face with its woff2 and woff urls, not the ttf", () => {
  assert.deepEqual(parseFaces(css), [
    { weight: 400, woff2: "//cdn.fontshare.com/wf/A/B/C.woff2", woff: "//cdn.fontshare.com/wf/A/B/C.woff" },
  ]);
});

test("parseFaces skips italic faces", () => {
  assert.equal(parseFaces(css).some((f) => f.woff2.includes("/I.")), false);
});
