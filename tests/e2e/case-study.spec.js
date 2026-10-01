import { test, expect } from "@playwright/test";
import { projects } from "../../src/content/projects.js";

test.describe("case studies with JavaScript off", () => {
  test.use({ javaScriptEnabled: false });

  for (const p of projects) {
    test(`${p.slug} renders headline, facts, every screen and the three sections`, async ({ page }) => {
      await page.goto(`/work/${p.slug}`);
      await expect(page.getByRole("heading", { level: 1 })).toHaveText(p.headline);
      for (const f of p.facts) await expect(page.locator("main dl").first()).toContainText(f.value);
      const strip = page.getByRole("list", { name: "Screens" });
      await expect(strip.getByRole("link")).toHaveCount(p.screens.length);
      await expect(strip.getByRole("link").first()).toHaveAttribute("href", p.screens[0].src);
      for (const h of ["The problem", "What I built", "The result"]) {
        await expect(page.getByRole("heading", { level: 2, name: h })).toBeVisible();
      }
    });
  }

  test("an unknown project is a 404", async ({ page }) => {
    const res = await page.goto("/work/nope");
    expect(res.status()).toBe(404);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText("Page not found");
  });

  test("next project cycles through all three and back", async ({ page }) => {
    const order = ["betmate", "gpflow", "whenwillyoumarry", "betmate"];
    for (let i = 0; i < 3; i++) {
      await page.goto(`/work/${order[i]}`);
      await expect(page.getByRole("link", { name: /^Next project/ })).toHaveAttribute("href", `/work/${order[i + 1]}`);
    }
  });
});

test.describe("screen viewer", () => {
  test("opens on the chosen screen, moves with arrows, wraps, and returns focus on Escape", async ({ page }) => {
    const p = projects.find((x) => x.slug === "betmate");
    await page.goto("/work/betmate");
    const links = page.getByRole("list", { name: "Screens" }).getByRole("link");
    await links.nth(1).click();
    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();
    await expect(dialog.getByRole("img")).toHaveAttribute("alt", p.screens[1].caption);
    await page.keyboard.press("ArrowRight");
    await expect(dialog.getByRole("img")).toHaveAttribute("alt", p.screens[2].caption);
    await page.keyboard.press("ArrowLeft");
    await page.keyboard.press("ArrowLeft");
    await page.keyboard.press("ArrowLeft");
    await expect(dialog.getByRole("img")).toHaveAttribute("alt", p.screens.at(-1).caption);
    await page.keyboard.press("Escape");
    await expect(dialog).toBeHidden();
    await expect(links.nth(1)).toBeFocused();
  });

  test("previous and next buttons work and say where you are", async ({ page }) => {
    const p = projects.find((x) => x.slug === "gpflow");
    await page.goto("/work/gpflow");
    await page.getByRole("list", { name: "Screens" }).getByRole("link").first().click();
    const dialog = page.getByRole("dialog");
    await expect(dialog).toContainText(`1 of ${p.screens.length}`);
    await dialog.getByRole("button", { name: "Next screen" }).click();
    await expect(dialog).toContainText(`2 of ${p.screens.length}`);
    await dialog.getByRole("button", { name: "Previous screen" }).click();
    await dialog.getByRole("button", { name: "Previous screen" }).click();
    await expect(dialog).toContainText(`${p.screens.length} of ${p.screens.length}`);
    await dialog.getByRole("button", { name: "Close" }).click();
    await expect(dialog).toBeHidden();
  });
});

test("an unknown project's preview card is a 404, not a server error", async ({ request }) => {
  const res = await request.get("/work/nope/opengraph-image");
  expect(res.status()).toBe(404);
});
