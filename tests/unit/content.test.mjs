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
  assert.match(g.summary, /Electron desktop app and a web app/);
  assert.ok(g.built.some((b) => /web/i.test(b.lead + b.text)));
});
