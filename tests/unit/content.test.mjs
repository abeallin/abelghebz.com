import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { profile } from "../../src/content/profile.js";
import { experience } from "../../src/content/experience.js";
import { projects } from "../../src/content/projects.js";
import { skillGroups } from "../../src/content/skills.js";
import { seo } from "../../src/content/seo.js";
import { HIRING_EMAIL, PROJECT_EMAIL, CAL_URL } from "../../src/content/routing.js";

const all = JSON.stringify({ profile, experience, projects, skillGroups, seo });

test("no stale Betmate user figures remain", () => {
  assert.equal(all.includes("300,000"), false);
  assert.equal(all.includes("500,000"), false);
});

test("Betmate says it scaled to 1 million users", () => {
  const betmate = projects.find((p) => p.slug === "betmate");
  assert.match(JSON.stringify(betmate), /1 million users/);
  assert.match(JSON.stringify(experience.find((e) => e.company === "Betmate")), /1 million users/);
});

test("Arena started in Dec 2025", () => {
  assert.match(experience.find((e) => e.company === "Arena Entertainment").period, /^Dec 2025/);
});

test("experience lists seven roles, newest first", () => {
  assert.equal(experience.length, 7);
  assert.equal(experience[0].company, "Arena Entertainment");
  assert.match(experience.at(-1).company, /London Metal Exchange/);
});

test("project slugs are unique kebab-case", () => {
  const slugs = projects.map((p) => p.slug);
  assert.equal(new Set(slugs).size, slugs.length);
  for (const s of slugs) assert.match(s, /^[a-z0-9]+(-[a-z0-9]+)*$/);
});

test("every screenshot exists under public/ and has a caption", () => {
  for (const p of projects) {
    assert.ok(p.screens.length > 0, p.slug);
    for (const s of p.screens) {
      assert.ok(existsSync(`public${s.src}`), s.src);
      assert.ok(s.caption.length > 0, s.src);
      assert.ok(["phone", "web"].includes(s.ratio), s.src);
    }
  }
});

test("every page has an seo entry with a title and description", () => {
  for (const path of ["/", ...projects.map((p) => `/work/${p.slug}`)]) {
    assert.ok(seo.pages[path]?.title, path);
    assert.ok(seo.pages[path]?.description, path);
  }
});

test("no [Your input] marker remains in content", () => {
  assert.equal(all.includes("[Your input"), false);
});

test("the hero name has no trailing full stop", () => {
  assert.equal(profile.name, "Abel Ghebrezadik");
});

test("routing sends hiring and project enquiries to the agreed addresses", () => {
  assert.equal(HIRING_EMAIL, "abelghebz@gmail.com");
  assert.equal(PROJECT_EMAIL, "2percentcargoltd@gmail.com");
  assert.equal(CAL_URL, "https://cal.com/abel-ghebrezadik/15min");
});

test("the site shows abelghebz@gmail.com and not the Outlook address", () => {
  assert.equal(profile.email, "abelghebz@gmail.com");
  assert.equal(all.includes("hotmail"), false);
});

test("Betmate copy matches the game as the screenshots describe it", () => {
  const b = projects.find((p) => p.slug === "betmate");
  assert.doesNotMatch(b.problem, /share the prize pool/);
  assert.match(b.problem, /[Oo]utlast everyone/);
});

test("Optal says monitored, as the original did, not that Abel reconciled millions", () => {
  assert.match(experience.find((e) => e.company.startsWith("Optal")).outcome, /^Monitored/);
});

test("GPFlow says it ships as both an Electron desktop app and a web app", () => {
  const g = projects.find((p) => p.slug === "gpflow");
  assert.match(g.summary, /Electron desktop app/);
  assert.match(g.summary, /web app/);
  assert.ok(g.built.some((b) => /web/i.test(b.lead + b.text)));
});

test("cabeazy is a pre-launch own product with its live site, pricing and no invented numbers", () => {
  const c = projects.find((p) => p.slug === "cabeazy");
  assert.ok(c, "cabeazy project exists");
  assert.match(c.eyebrow, /pre-launch/i);
  assert.ok(c.live.some((l) => l.url === "https://cabeazy.com"));
  assert.match(JSON.stringify(c), /£50 a month/);
  assert.ok(c.screens.some((s) => s.ratio === "web") && c.screens.some((s) => s.ratio === "phone"), "mixes web and phone screens");
  assert.doesNotMatch(JSON.stringify(c), /\b\d[\d,]* (users|rides|drivers signed)/);
});

test("GPFlow's stack is what its repo uses: Next.js, Tailwind, Electron and Playwright, not Selenium", () => {
  const g = projects.find((p) => p.slug === "gpflow");
  for (const t of ["Next.js", "Tailwind CSS", "Electron", "Playwright"]) assert.ok(g.stack.includes(t), t);
  assert.doesNotMatch(JSON.stringify(g), /Selenium/);
});

test("cabeazy lists Kotlin and says Swift is planned, not built", () => {
  const c = projects.find((p) => p.slug === "cabeazy");
  assert.ok(c.stack.includes("Kotlin"));
  assert.match(JSON.stringify(c.built), /Swift iOS app planned/);
});

test("stacks match the repos: whenwillyoumarry runs on Railway and R2, not AWS; GPFlow uses MongoDB; cabeazy uses NATS", () => {
  const w = projects.find((p) => p.slug === "whenwillyoumarry");
  assert.ok(!w.stack.includes("AWS"), "whenwillyoumarry is not on AWS");
  for (const t of ["Drizzle", "Redis", "Stripe", "Cloudflare R2", "Railway"]) assert.ok(w.stack.includes(t), t);
  assert.doesNotMatch(JSON.stringify(w.facts), /AWS/);
  assert.ok(projects.find((p) => p.slug === "gpflow").stack.includes("MongoDB"));
  for (const t of ["NATS", "Expo", "Jetpack Compose", "Mapbox"]) assert.ok(projects.find((p) => p.slug === "cabeazy").stack.includes(t), t);
  assert.deepEqual(projects.find((p) => p.slug === "betmate").stack, ["C#", "AWS", "CockroachDB", "Dapper"]);
});

test("Arena's latency result is the average Abel measured: 14s down to 2s", () => {
  const arena = experience.find((e) => e.company === "Arena Entertainment");
  assert.match(arena.outcome, /from 14s to 2s/);
  assert.doesNotMatch(JSON.stringify(experience), /up to 8s/);
});

test("Arena includes the Angular rebuild, the Bedrock AI chat and the 250 pages of docs", () => {
  const arena = experience.find((e) => e.company === "Arena Entertainment");
  const all = arena.outcome + " " + arena.detail;
  assert.match(all, /Angular/);
  assert.match(all, /AWS Bedrock/);
  assert.match(all, /250 pages/);
  for (const t of ["Angular", "AWS Bedrock"]) assert.ok(arena.stack.includes(t), t);
});

test("Arena's AI chat says who uses it and what it saves", () => {
  const arena = experience.find((e) => e.company === "Arena Entertainment");
  assert.match(arena.detail, /AI conversational assistant on AWS Bedrock, used by 200 people/);
  assert.match(arena.detail, /Slack and Jira/);
});
