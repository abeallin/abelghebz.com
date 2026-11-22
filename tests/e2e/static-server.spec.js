import { test, expect } from "@playwright/test";

// What server.mjs does that Next used to (decision 0019): 404s, no reading outside out/, cache headers, and
// pre-resized images that exist for every width a srcset names.

test("an unknown path answers 404 with the site's 404 page", async ({ request }) => {
  const res = await request.get("/no-such-page-anywhere");
  expect(res.status()).toBe(404);
  expect(res.headers()["content-type"]).toContain("text/html");
  expect(res.headers()["x-content-type-options"]).toBe("nosniff");
  expect(await res.text()).toContain("</html>");
});

test("scanner paths and paths outside the site answer 404", async ({ request }) => {
  for (const p of ["/.env", "/.git/config", "/wp-login.php", "/%2e%2e/package.json", "/..%2fpackage.json", "/../server.mjs"]) {
    const res = await request.get(p);
    expect(res.status(), p).toBe(404);
    expect(await res.text(), p).not.toContain('"dependencies"');
  }
});

test("only GET and HEAD are served", async ({ request }) => {
  const res = await request.post("/", { data: "x" });
  expect(res.status()).toBe(405);
  const head = await request.head("/");
  expect(head.status()).toBe(200);
});

test("built assets are immutable and pages always revalidate", async ({ page, request }) => {
  await page.goto("/");
  const script = await page.locator("script[src^='/_next/static/']").first().getAttribute("src");
  const asset = await request.get(script);
  expect(asset.status()).toBe(200);
  expect(asset.headers()["cache-control"]).toBe("public, max-age=31536000, immutable");
  const html = await request.get("/");
  expect(html.headers()["cache-control"]).toBe("public, max-age=0, must-revalidate");
});

test("every image width in every srcset on the home and a case study exists as WebP", async ({ page, request }) => {
  const urls = new Set();
  for (const path of ["/", "/work/betmate"]) {
    await page.goto(path);
    for (const srcset of await page.locator("img[srcset]").evaluateAll((els) => els.map((e) => e.getAttribute("srcset")))) {
      for (const part of srcset.split(",")) urls.add(part.trim().split(" ")[0]);
    }
  }
  expect(urls.size).toBeGreaterThan(5);
  for (const url of urls) {
    expect(url.startsWith("/_img/"), url).toBe(true);
    const res = await request.get(url);
    expect(res.status(), url).toBe(200);
    expect(res.headers()["content-type"], url).toBe("image/webp");
  }
});

test("a repeat request with the ETag gets 304", async ({ request }) => {
  const first = await request.get("/me.jpg");
  const etag = first.headers()["etag"];
  expect(etag).toBeTruthy();
  const again = await request.get("/me.jpg", { headers: { "if-none-match": etag } });
  expect(again.status()).toBe(304);
});
