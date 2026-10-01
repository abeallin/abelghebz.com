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
    const order = ["betmate", "cabeazy", "gpflow", "whenwillyoumarry", "betmate"];
    for (let i = 0; i < 4; i++) {
      await page.goto(`/work/${order[i]}`);
      await expect(page.getByRole("link", { name: /^Next project/ })).toHaveAttribute("href", `/work/${order[i + 1]}`);
    }
  });
});

test("a strip that mixes desktop and phone screens keeps each one's own shape", async ({ page }) => {
  await page.goto("/work/cabeazy");
  const links = page.getByRole("list", { name: "Screens" }).getByRole("link");
  const web = await links.first().boundingBox();
  const phone = await links.last().boundingBox();
  expect(web.width).toBeGreaterThan(web.height);
  expect(phone.height).toBeGreaterThan(phone.width);
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

test("case-study stack chips carry technology marks where an exact one exists", async ({ page }) => {
  await page.goto("/work/cabeazy");
  const stack = page.getByRole("list", { name: "Stack" });
  await expect(stack.getByRole("listitem").filter({ hasText: /^Go$/ }).locator('svg[aria-hidden="true"]')).toHaveCount(1);
  await expect(stack.getByRole("listitem").filter({ hasText: /^Kotlin$/ }).locator("svg")).toHaveCount(1);
  await expect(stack.getByRole("listitem").filter({ hasText: /^WebSockets$/ }).locator("svg")).toHaveCount(0);
});

test("Betmate's stack shows AWS as one chip with the AWS mark", async ({ page }) => {
  await page.goto("/work/betmate");
  const stack = page.getByRole("list", { name: "Stack" });
  await expect(stack.getByRole("listitem").filter({ hasText: /^AWS$/ }).locator('svg[aria-hidden="true"]')).toHaveCount(1);
  await expect(stack.getByRole("listitem").filter({ hasText: /AWS Lambda|SNS\/SQS|CloudFormation/ })).toHaveCount(0);
  // simple-icons has no C# mark ("siSharp" is the sharp image library), so C# stays text-only.
  await expect(stack.getByRole("listitem").filter({ hasText: /^C#$/ }).locator("svg")).toHaveCount(0);
});

test.describe("case-study extras with JavaScript off", () => {
  test.use({ javaScriptEnabled: false });

  test("Betmate shows its key numbers; GPFlow has no stat strip", async ({ page }) => {
    await page.goto("/work/betmate");
    const stats = page.getByRole("list", { name: "Key numbers" });
    await expect(stats).toContainText("1M");
    await expect(stats).toContainText("£500k");
    await page.goto("/work/gpflow");
    await expect(page.getByRole("list", { name: "Key numbers" })).toHaveCount(0);
  });

  test("the flow strip is an ordered list of numbered steps with decorative arrows", async ({ page }) => {
    const p = projects.find((x) => x.slug === "betmate");
    await page.goto("/work/betmate");
    const flow = page.locator("#flow");
    await expect(flow.getByRole("heading", { level: 2 })).toHaveText(p.flow.title);
    const steps = flow.locator("ol > li");
    await expect(steps).toHaveCount(p.flow.steps.length);
    await expect(steps.first()).toContainText(`1 ${p.flow.steps[0].caption}`);
    await expect(flow.locator('[data-connector][aria-hidden="true"]')).toHaveCount(p.flow.steps.length - 1);
  });
});

test("wide screens get a sticky 'On this page' menu that tracks the section in view", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/work/cabeazy");
  const nav = page.getByRole("navigation", { name: "On this page" });
  await expect(nav).toBeVisible();
  for (const name of ["How it works", "Screens", "The problem", "What I built", "The result"]) {
    await expect(nav.getByRole("link", { name })).toBeVisible();
  }
  await nav.getByRole("link", { name: "The result" }).click();
  await expect(nav.getByRole("link", { name: "The result" })).toHaveAttribute("aria-current", "true");
  await expect(nav.getByRole("link", { name: "How it works" })).not.toHaveAttribute("aria-current", "true");
  await page.setViewportSize({ width: 1024, height: 900 });
  await expect(nav).toBeHidden();
});
