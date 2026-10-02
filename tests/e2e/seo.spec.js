import { test, expect } from "@playwright/test";
import { seo } from "../../src/content/seo.js";
import { pages } from "./pages.js";

for (const path of pages) {
  test(`${path} has its title, description, canonical and a preview image`, async ({ page }) => {
    await page.goto(path);
    await expect(page).toHaveTitle(seo.pages[path].title);
    await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", seo.pages[path].description);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", `${seo.site}${path === "/" ? "" : path}`);
    const og = await page.locator('meta[property="og:image"]').getAttribute("content");
    expect(og).toMatch(/opengraph-image/);
    const img = await page.request.get(new URL(og).pathname + new URL(og).search);
    expect(img.status()).toBe(200);
    expect(img.headers()["content-type"]).toBe("image/png");
  });
}

test("sitemap lists every page on the live domain", async ({ request }) => {
  const xml = await (await request.get("/sitemap.xml")).text();
  for (const path of pages) expect(xml).toContain(`<loc>${seo.site}${path === "/" ? "" : path}</loc>`);
});

test("robots allows everything and names the sitemap", async ({ request }) => {
  const txt = await (await request.get("/robots.txt")).text();
  expect(txt).toContain("Allow: /");
  expect(txt).toContain(`Sitemap: ${seo.site}/sitemap.xml`);
});

test("home describes Abel as a Person in JSON-LD", async ({ page }) => {
  await page.goto("/");
  const data = JSON.parse(await page.locator('script[type="application/ld+json"]').textContent());
  expect(data["@type"]).toBe("Person");
  expect(data.name).toBe("Abel Ghebrezadik");
  expect(data.jobTitle).toBe("Lead / Senior Software Engineer");
  expect(data.sameAs).toContain("https://linkedin.com/in/abel-ghebrezadik");
});

test("both CV files are served with the right types", async ({ request }) => {
  const pdf = await request.get("/assets/abel_ghebrezadik_cv.pdf");
  expect(pdf.status()).toBe(200);
  expect(pdf.headers()["content-type"]).toContain("application/pdf");
  const docx = await request.get("/assets/abel_ghebrezadik_cv.docx");
  expect(docx.status()).toBe(200);
  expect((await docx.body()).subarray(0, 2).toString()).toBe("PK");
});

test("the CV files are always revalidated and download with a readable name", async ({ request }) => {
  const pdf = await request.get("/assets/abel_ghebrezadik_cv.pdf");
  expect(pdf.headers()["cache-control"]).toBe("public, max-age=0, must-revalidate");
  expect(pdf.headers()["content-disposition"]).toBe('inline; filename="Abel-Ghebrezadik-CV.pdf"');
  const docx = await request.get("/assets/abel_ghebrezadik_cv.docx");
  expect(docx.headers()["cache-control"]).toBe("public, max-age=0, must-revalidate");
  expect(docx.headers()["content-disposition"]).toBe('attachment; filename="Abel-Ghebrezadik-CV.docx"');
});
