import { test, expect } from "@playwright/test";

test("the favicon and Apple touch icon are the AG monogram images, not the old SVG", async ({ page, request }) => {
  await page.goto("/");
  const icon = await page.locator('link[rel="icon"]').first().getAttribute("href");
  expect(icon).toMatch(/^\/icon/);
  const apple = await page.locator('link[rel="apple-touch-icon"]').getAttribute("href");
  expect(apple).toMatch(/^\/apple-icon/);
  for (const href of [icon, apple]) {
    const res = await request.get(href);
    expect(res.status()).toBe(200);
    expect(res.headers()["content-type"]).toBe("image/png");
  }
  expect((await request.get("/favicon.svg")).status()).toBe(404);
});

test.describe("header", () => {
  test("stays at the top while scrolling and offers a call on wide screens", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/");
    const header = page.locator("header").first();
    await page.mouse.wheel(0, 2500);
    await expect.poll(async () => (await header.boundingBox()).y).toBe(0);
    await expect(header.getByRole("link", { name: "Book a call" })).toHaveAttribute("href", "/#contact");
  });

  test("never hides a focused link underneath it", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/");
    await page.mouse.wheel(0, 1200);
    const target = page.locator("#experience a").first();
    await target.focus();
    const headerBottom = (await page.locator("header").first().boundingBox()).height;
    expect((await target.boundingBox()).y).toBeGreaterThanOrEqual(headerBottom);
  });
});
