import { test, expect } from "@playwright/test";

const SECTIONS = [
  { id: "hero", name: "Hero", min: 4 },
  { id: "work", name: "Work", min: 4 },
  { id: "experience", name: "Experience and about", min: 3 },
  { id: "actions", name: "Buttons, links, contact and footer", min: 3 },
];

test.describe("gallery with JavaScript off", () => {
  test.use({ javaScriptEnabled: false });

  test("is hidden from search and lists every section", async ({ page }) => {
    const res = await page.goto("/gallery");
    expect(res.status()).toBe(200);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText("Gallery");
    for (const s of SECTIONS) {
      await expect(page.locator(`#${s.id}`).getByRole("heading", { level: 2 })).toHaveText(s.name);
    }
  });

  for (const s of SECTIONS) {
    test(`${s.name} offers at least ${s.min} labelled versions, each naming its source`, async ({ page }) => {
      await page.goto("/gallery");
      const versions = page.locator(`#${s.id} [data-version]`);
      expect(await versions.count()).toBeGreaterThanOrEqual(s.min);
      for (const v of await versions.all()) {
        await expect(v.getByRole("heading", { level: 3 })).toHaveText(new RegExp(`^${s.name.split(/[ ,]/)[0]} · `));
        await expect(v.getByText(/^Based on /)).toBeVisible();
      }
    });
  }

  test("brand page shows the palette, the type and the buttons", async ({ page }) => {
    const res = await page.goto("/brand");
    expect(res.status()).toBe(200);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
    for (const hex of ["#F6F4EF", "#151515", "#3C3C3C", "#6A6A6A", "#E8E4DB", "#D9D5CC", "#D9461B", "#B83A12"]) {
      await expect(page.getByText(hex, { exact: true })).toBeVisible();
    }
    for (const face of ["Erode", "General Sans", "JetBrains Mono"]) {
      await expect(page.getByRole("heading", { level: 3, name: face })).toBeVisible();
    }
  });
});

test("gallery and brand stay out of the sitemap and off the public pages", async ({ page, request }) => {
  const xml = await (await request.get("/sitemap.xml")).text();
  expect(xml).not.toContain("/gallery");
  expect(xml).not.toContain("/brand");
  await page.goto("/");
  await expect(page.locator('a[href*="/gallery"], a[href*="/brand"]')).toHaveCount(0);
});
