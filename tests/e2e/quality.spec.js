import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { pages } from "./pages.js";

// Cal.com's embed is stubbed so these checks measure this site, not Cal's iframe or its uptime.
test.beforeEach(async ({ page }) => {
  await page.route("https://app.cal.com/**", (route) => route.fulfill({ status: 200, contentType: "text/javascript", body: "" }));
});

for (const path of pages) {
  test.describe(path, () => {
    test("has no WCAG 2.2 A/AA violations at any impact level", async ({ page }) => {
      await page.goto(path);
      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
        .analyze();
      expect(results.violations.map((v) => `${v.id} (${v.impact}): ${v.nodes.map((n) => n.target.join(" ")).join(", ")}`)).toEqual([]);
    });

    test("logs no console errors", async ({ page }) => {
      const errors = [];
      page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
      page.on("pageerror", (e) => errors.push(e.message));
      await page.goto(path, { waitUntil: "networkidle" });
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await page.waitForTimeout(300);
      expect(errors).toEqual([]);
    });

    for (const width of [320, 375]) {
      test(`does not scroll sideways at ${width}px`, async ({ page }) => {
        await page.setViewportSize({ width, height: 800 });
        await page.goto(path);
        const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
        expect(overflow).toBeLessThanOrEqual(0);
      });
    }

    test("nothing animates when the visitor asks for reduced motion", async ({ browser }) => {
      const context = await browser.newContext({ reducedMotion: "reduce", viewport: { width: 1440, height: 900 } });
      const page = await context.newPage();
      await page.route("https://app.cal.com/**", (route) => route.fulfill({ status: 200, contentType: "text/javascript", body: "" }));
      await page.goto(path);
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
      await page.waitForTimeout(200);
      expect(await page.evaluate(() => document.getAnimations().length)).toBe(0);
      await context.close();
    });
  });
}

test("the scroll reveal does run when motion is allowed (so the reduced-motion test can fail)", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/work/betmate");
  await page.evaluate(() => window.scrollTo(0, 400));
  expect(await page.evaluate(() => document.getAnimations().length)).toBeGreaterThan(0);
});
