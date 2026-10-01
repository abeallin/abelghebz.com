import { test, expect } from "@playwright/test";
import { buildEnquiry } from "../../src/lib/mailto.js";
import { CAL_URL } from "../../src/content/routing.js";

// Tests never depend on Cal.com being up: its embed script is replaced by an empty one.
test.beforeEach(async ({ page }) => {
  await page.route("https://app.cal.com/**", (route) => route.fulfill({ status: 200, contentType: "text/javascript", body: "" }));
});

test.describe("contact with JavaScript off", () => {
  test.use({ javaScriptEnabled: false });

  test("the booking link goes to the 15-minute Cal.com event", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("#contact").getByRole("link", { name: "Book a 15-minute call on Cal.com" })).toHaveAttribute("href", CAL_URL);
  });

  test("the form still sends by email to the work address", async ({ page }) => {
    await page.goto("/");
    const form = page.locator("#contact form");
    await expect(form).toHaveAttribute("action", "mailto:abelghebz@gmail.com");
    await expect(form).toHaveAttribute("method", "post");
    await expect(form).toHaveAttribute("enctype", "text/plain");
    await expect(form.getByLabel("Company")).toBeVisible();
    await expect(form.getByLabel("Timeline")).toBeVisible();
  });
});

test.describe("enquiry router", () => {
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      window.__opened = [];
      window.open = (url) => {
        window.__opened.push(url);
        return null;
      };
    });
    await page.goto("/");
  });

  test("hiring shows company and role and hides the project fields", async ({ page }) => {
    const form = page.locator("#contact form");
    await form.locator("label", { hasText: "Hiring for a role" }).click();
    await expect(form.getByLabel("Company")).toBeVisible();
    await expect(form.getByLabel("Role", { exact: true })).toBeVisible();
    await expect(form.getByLabel("Timeline")).toBeHidden();
    await expect(form.getByRole("group", { name: "I need…" })).toBeHidden();
  });

  test("a hiring enquiry opens the exact email", async ({ page }) => {
    const form = page.locator("#contact form");
    await form.locator("label", { hasText: "Hiring for a role" }).click();
    await form.getByLabel("Company").fill("Acme");
    await form.getByLabel("Role", { exact: true }).fill("Lead Engineer");
    await form.getByLabel("Name").fill("Sam Taylor");
    await form.getByLabel("Email").fill("sam@example.com");
    await form.getByLabel(/Message/).fill("We'd like to talk.");
    await form.getByRole("button", { name: "Send enquiry" }).click();
    const expected = buildEnquiry({ who: "hiring", company: "Acme", role: "Lead Engineer", name: "Sam Taylor", email: "sam@example.com", message: "We'd like to talk." });
    await expect.poll(() => page.evaluate(() => window.__opened)).toEqual([expected.href]);
  });

  test("a project enquiry goes to the private-work address without stale hiring fields", async ({ page }) => {
    const form = page.locator("#contact form");
    await form.locator("label", { hasText: "Hiring for a role" }).click();
    await form.getByLabel("Company").fill("Stale Co");
    await form.locator("label", { hasText: "Looking for someone to build something" }).click();
    await form.locator("label", { hasText: "A backend or API" }).click();
    await form.getByLabel("Timeline").fill("Next month");
    await form.getByLabel("Name").fill("Sam Taylor");
    await form.getByLabel("Email").fill("sam@example.com");
    await form.getByLabel(/Message/).fill("An API for my app.");
    await form.getByRole("button", { name: "Send enquiry" }).click();
    const [href] = await page.evaluate(() => window.__opened);
    expect(href.startsWith("mailto:2percentcargoltd@gmail.com?")).toBe(true);
    expect(decodeURIComponent(href)).not.toContain("Stale Co");
    expect(decodeURIComponent(href)).toContain("[Project] A backend or API: Sam Taylor");
  });

  test("missing required fields block sending and say what's missing", async ({ page }) => {
    const form = page.locator("#contact form");
    await form.getByRole("button", { name: "Send enquiry" }).click();
    await expect(form.getByText("Choose what you're here for.")).toBeVisible();
    await expect(form.getByText("Add your name.")).toBeVisible();
    await expect(form.getByText("Add an email address.")).toBeVisible();
    expect(await page.evaluate(() => window.__opened)).toEqual([]);
  });

  test("a failed send is announced and focus moves to the first problem", async ({ page }) => {
    const form = page.locator("#contact form");
    await form.getByRole("button", { name: "Send enquiry" }).click();
    await expect(form.getByRole("alert")).toContainText("4 fields need attention");
    await expect(form.locator('input[name="who"]').first()).toBeFocused();
    await expect(form.getByRole("radiogroup", { name: "I'm…" })).toHaveAttribute("aria-invalid", "true");
  });

  test("after sending, the routed address is shown in case no email app opened", async ({ page }) => {
    const form = page.locator("#contact form");
    await form.locator("label", { hasText: "Looking for someone to build something" }).click();
    await form.getByLabel("Name").fill("Sam Taylor");
    await form.getByLabel("Email").fill("sam@example.com");
    await form.getByLabel(/Message/).fill("An app.");
    await form.getByRole("button", { name: "Send enquiry" }).click();
    const status = form.getByRole("status");
    await expect(status).toContainText("didn't open");
    await expect(status.getByRole("link", { name: "2percentcargoltd@gmail.com" })).toHaveAttribute("href", "mailto:2percentcargoltd@gmail.com");
  });
});
