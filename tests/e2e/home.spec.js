import { test, expect } from "@playwright/test";

test.describe("home with JavaScript off", () => {
  test.use({ javaScriptEnabled: false });

  test("hero shows the name with no full stop and the two paths", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toHaveText("Abel Ghebrezadik");
    const hero = page.locator("main section").first();
    await expect(hero.getByRole("link", { name: "Book a 15-minute call" })).toHaveAttribute("href", "/#contact");
    await expect(hero.getByRole("link", { name: "Experience and CV" })).toHaveAttribute("href", "/#experience");
    await expect(hero.getByText("Worked with")).toBeVisible();
    await expect(hero.getByText("NHS England")).toBeVisible();
  });

  test("work features Betmate first, with the other two beside each other", async ({ page }) => {
    await page.goto("/");
    const work = page.locator("#work");
    await expect(work.locator("[data-featured]")).toHaveAttribute("data-featured", "betmate");
    await expect(work.getByRole("link", { name: /Read the Betmate case study/ })).toHaveAttribute("href", "/work/betmate");
  });

  test("each role's detail opens from a More toggle without JavaScript", async ({ page }) => {
    await page.goto("/");
    const first = page.locator("#experience li").first();
    await expect(first.getByText(/Redis batch pipelines/)).toBeHidden();
    await first.getByText("More").click();
    await expect(first.getByText(/Redis batch pipelines/)).toBeVisible();
  });

  test("the footer sets the name large with pill links", async ({ page }) => {
    await page.goto("/");
    const footer = page.locator("footer");
    await expect(footer.getByText("Abel Ghebrezadik", { exact: true })).toBeVisible();
    await expect(footer.getByRole("link", { name: "LinkedIn" })).toHaveAttribute("href", "https://linkedin.com/in/abel-ghebrezadik");
  });

  test("each contact pill shows its icon beside the text, hidden from screen readers", async ({ page }) => {
    await page.goto("/");
    for (const name of ["GitHub", "LinkedIn", "Email", "Phone"]) {
      const link = page.locator("footer").getByRole("link", { name, exact: true });
      await expect(link.locator('svg[aria-hidden="true"]')).toHaveCount(1);
    }
    await expect(page.locator("#contact").getByRole("link", { name: "Book a 15-minute call on Cal.com" }).locator('svg[aria-hidden="true"]')).toHaveCount(1);
  });

  test("selected work links each project to its case study", async ({ page }) => {
    await page.goto("/");
    const work = page.locator("#work");
    for (const slug of ["betmate", "cabeazy", "gpflow", "whenwillyoumarry"]) {
      await expect(work.locator(`a[href="/work/${slug}"]`).first()).toBeVisible();
    }
  });

  test("experience lists seven roles and the CV download", async ({ page }) => {
    await page.goto("/");
    const exp = page.locator("#experience");
    await expect(exp.getByRole("listitem")).toHaveCount(7);
    await expect(exp.getByRole("link", { name: /CV as PDF/ })).toHaveAttribute("href", "/assets/abel_ghebrezadik_cv.pdf");
    await expect(exp.getByRole("link", { name: /CV as Word/ })).toHaveAttribute("href", "/assets/abel_ghebrezadik_cv.docx");
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
