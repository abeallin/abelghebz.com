import { test, expect } from "@playwright/test";

test.describe("home with JavaScript off", () => {
  test.use({ javaScriptEnabled: false });

  test("hero shows the name with no full stop and the two paths", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toHaveText("Abel Ghebrezadik");
    await expect(page.getByRole("link", { name: "Experience and CV" })).toHaveAttribute("href", "/#experience");
    await expect(page.getByRole("link", { name: "See the work, book a call" })).toHaveAttribute("href", "/#work");
  });

  test("selected work links each project to its case study", async ({ page }) => {
    await page.goto("/");
    const work = page.locator("#work");
    for (const slug of ["betmate", "gpflow", "whenwillyoumarry"]) {
      await expect(work.locator(`a[href="/work/${slug}"]`).first()).toBeVisible();
    }
  });

  test("experience lists seven roles and the CV download", async ({ page }) => {
    await page.goto("/");
    const exp = page.locator("#experience");
    await expect(exp.getByRole("listitem")).toHaveCount(7);
    await expect(exp.getByRole("link", { name: /Download CV/ })).toHaveAttribute("href", "/assets/abel_ghebrezadik_cv.pdf");
    await expect(exp).toContainText("Dec 2025");
    await expect(page.locator("main")).toContainText("1 million users");
  });

  test("about shows the photo and grouped skills", async ({ page }) => {
    await page.goto("/");
    const about = page.locator("#about");
    await expect(about.getByRole("img", { name: "Abel Ghebrezadik" })).toBeVisible();
    await expect(about).toContainText("Languages");
    await expect(about).toContainText("CockroachDB");
    await expect(about).toContainText("Mathematics degree. I've worked");
  });
});

test("nav links all stay visible at 320px", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 700 });
  await page.goto("/");
  const nav = page.getByRole("navigation", { name: "Main" });
  for (const name of ["Work", "Experience", "CV", "Contact"]) {
    await expect(nav.getByRole("link", { name, exact: true })).toBeVisible();
  }
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
});
