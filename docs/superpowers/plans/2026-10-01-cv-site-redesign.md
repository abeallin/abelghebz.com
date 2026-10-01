# abelghebz.com Quiet CV Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild abelghebz.com as the approved "Quiet CV" design: a home page and three case-study pages whose content never depends on JavaScript, with a Cal.com + mailto enquiry router, SEO cards, and one check gate in CI.

**Architecture:** Next 16 App Router, server components by default, all copy in `src/content/*.js`. Client components only for the screen viewer, enquiry router and Cal embed, each with a working no-JS fallback in the server HTML. CSS-only motion. Fonts fetched from Fontshare at build time into a git-ignored folder.

**Tech Stack:** Next 16.2, React 19, Tailwind CSS 4, `radix-ui`, `next/font`, `next/og`, Playwright + `@axe-core/playwright`, `node:test`, ESLint 9 flat config.

**Spec:** `docs/superpowers/specs/2026-10-01-cv-site-redesign-design.md`

## Global Constraints

- Colours exactly: paper `#F6F4EF`, ink `#151515`, body `#3C3C3C`, muted `#6A6A6A` (never on tile), tile `#E8E4DB`, rule `#D9D5CC`, accent `#D9461B` (never text), accent-ink `#B83A12`.
- Fonts: Erode (display), Author (text, body 17px, lead 19px), JetBrains Mono (labels). No other families.
- No full stop after the hero name. No all-caps except "CV". No bullets, dotted pills, tick circles, gradients, glows. Body copy left-aligned. One shadow level.
- Facts: Betmate **1 million users**; Arena **Dec 2025 — Present**. Never "300,000" or "500,000 users".
- Routing: hiring and something-else → `abelghebz@gmail.com`; building → `2percentcargoltd@gmail.com`. Booking: `https://cal.com/abel-ghebrezadik/15min`.
- No framer-motion, no react-icons, no animation library. Server HTML is always the finished state.
- Fontshare files are never committed (`/src/fonts/` ignored).
- Conventional Commits; every commit ends with `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`.
- Edit files with the Edit/Write tools; never rewrite files through Python text mode (CRLF hazard).

## Review Focus

1. A phone at 320px with long words (company names, "Ghebrezadik") must not scroll sideways — pinned by the reflow test on every page.
2. Visitor with JS off submits the enquiry form — must still produce a mailto to the default address — pinned in Task 6 by a JS-disabled form test (asserts `action`/`method`/`enctype`).
3. Unknown `/work/<slug>` must 404, not crash — pinned in Task 5.
4. Screen viewer: closing must return focus to the screen that opened it; arrow keys at the ends must wrap — pinned in Task 5.
5. Enquiry fields hidden for one route must not leak into the mailto body of another (e.g. switching Hiring → Project after typing Company) — pinned in Task 6 unit and e2e tests.

## File map

```
app/
  layout.js              fonts, globals, metadata from seo.js, JSON-LD
  globals.css            @theme tokens, base, motion
  page.js                home: composes sections
  not-found.js           restyled 404
  sitemap.js, robots.js
  opengraph-image.js     home OG card
  work/[slug]/page.js    case study
  work/[slug]/opengraph-image.js
src/
  content/profile.js     personal, social, hero copy
  content/experience.js  seven roles
  content/projects.js    three projects incl. case-study text + captions
  content/skills.js      grouped skills
  content/seo.js         per-page title/description/canonical
  content/routing.js     enquiry addresses, CAL_URL
  lib/fonts.js           next/font/local + google
  lib/mailto.js          buildEnquiry(state) -> { to, subject, body, href }
  components/Nav.jsx
  components/Hero.jsx
  components/ProjectTile.jsx, WorkSection.jsx
  components/ExperienceList.jsx
  components/About.jsx
  components/Contact.jsx, CalEmbed.jsx (client), EnquiryRouter.jsx (client)
  components/FactsRow.jsx, ScreenStrip.jsx, ScreenViewer.jsx (client)
  components/Footer.jsx, SocialRow.jsx
scripts/fetch-fontshare.mjs, scripts/style-guard.mjs
tests/unit/*.test.mjs     node:test
tests/e2e/*.spec.js       Playwright
tool/check.sh
.github/workflows/check.yml
docs/decisions/0001..0009
```

Deleted: `src/App.jsx`, `src/index.css`, `src/data/`, `src/components/{About,Footer,Hero,Navbar,Projects,Skills,experience,shared}`, `src/assets/`, `scripts/screenshots.js`, CRA `README.md`.

---

### Task 1: Tooling baseline and housekeeping

**Files:** `package.json`, `eslint.config.mjs`, `playwright.config.js`, `.gitignore`, `tool/check.sh`, `scripts/fetch-fontshare.mjs`, `tests/unit/smoke.test.mjs`

- [ ] Untrack `/.claude/settings.local.json`, `/.playwright-mcp/`, `/.superpowers/`, `/itsw-full.jpeg` (`git rm -r --cached`), add the anchored lines to `.gitignore` plus `/src/fonts/`, `/test-results/`, `/playwright-report/`. Run `git status` and confirm only intended paths changed.
- [ ] `npm rm framer-motion react-icons playwright`; `npm i radix-ui`; `npm i -D eslint@9 eslint-config-next @playwright/test @axe-core/playwright`.
- [ ] Scripts: `"fonts": "node scripts/fetch-fontshare.mjs"`, `"prebuild": "npm run fonts"`, `"lint": "eslint ."`, `"test:unit": "node --test tests/unit/"`, `"test:e2e": "playwright test"`, `"check": "sh tool/check.sh"`, `"guard": "node scripts/style-guard.mjs"`.
- [ ] `fetch-fontshare.mjs`: for `erode@400,500` and `author@400,500,600`, GET `https://api.fontshare.com/v2/css?f[]=<spec>&display=swap`, parse each `@font-face` `src` woff2 URL + weight, download unmodified to `src/fonts/<family>-<weight>.woff2`; skip files already present; exit 1 on any non-200.
- [ ] `tool/check.sh` (`set -eu`): `npm run lint`, `npm run test:unit`, `npm run build`, `npm run guard`, `npx playwright test`; each step echoed; exit code is the real result.
- [ ] `playwright.config.js`: `webServer` = `npx next start -p $PORT` with `PORT` from env or 3210, `reuseExistingServer: !CI`, Chromium only, `retries: CI?1:0`, trace on first retry.
- [ ] Verify: `npm run fonts` downloads 5 files; `npm run lint` runs. Commit `build: tooling baseline, untrack local files`.

### Task 2: Content modules

**Files:** `src/content/{profile,experience,projects,skills,seo,routing}.js`, `tests/unit/content.test.mjs`

**Produces:** `profile` `{ name, role, location, summary, cvPath, email, phone, social: [{label,url}] }`; `experience: [{ company, role, period, outcome, stack: string[], link?: {label,url} }]` (7, newest first); `projects: [{ slug, name, kind: 'mobile'|'web'|'backend', eyebrow, headline, summary, facts: {client, role, when, live: [{label,url}]}, stack, screens: [{src, caption, ratio: 'phone'|'web'}], problem, built: [{lead, text}], result }]`; `skillGroups: [{label, items: string[]}]`; `seo` `{ site, pages: { '/': {title, description}, '/work/<slug>': ... } }`; `routing` `{ HIRING_EMAIL, PROJECT_EMAIL, CAL_URL }`.

- [ ] Write `content.test.mjs` first: no string anywhere in content contains `300,000` or `500,000 users`; Betmate text contains `1 million`; Arena period starts `Dec 2025`; every project slug is unique kebab-case; every screen `src` exists under `public/`; every `/work/<slug>` has a seo entry; no `[Your input` string remains. Run → fails (modules missing).
- [ ] Write the modules from `src/data/content.js`, correcting the two facts, collapsing skills to groups (Languages; Frameworks; Databases; Cloud and DevOps; Messaging, caching and protocols; Monitoring and tooling; AI). Case-study problem/result text is drafted only from existing content; captions from looking at each screenshot (listed in the PR for Abel to confirm).
- [ ] Run → passes. Commit `feat(content): one content source with corrected facts`.

### Task 3: Design system, layout, cleanup

**Files:** `app/globals.css`, `src/lib/fonts.js`, `app/layout.js`, `app/not-found.js`, delete old `src/*`.

- [ ] `fonts.js`: `localFont` Erode (400,500 → `--font-erode`), Author (400,500,600 → `--font-author`), `JetBrains_Mono` 400 (`--font-mono`), all `display: 'swap'`.
- [ ] `globals.css`: `@import "tailwindcss"`; `@theme` with the eight colours, `--font-display: var(--font-erode), serif`, `--font-sans: var(--font-author), sans-serif`, `--font-mono`; `body` paper/ink, 17px/1.6; `:focus-visible` 2px accent outline offset 3px; skip link; motion block (§ Motion of spec) behind `@supports` + `prefers-reduced-motion: no-preference` + `min-width: 48rem`.
- [ ] `layout.js`: `<html lang="en-GB">`, font variables on `<html>`, skip link to `#main`, metadata from `seo.js`.
- [ ] Delete old components, `src/App.jsx`, `src/index.css`, `src/data`, `src/assets`, `scripts/screenshots.js`.
- [ ] Commit `refactor: new design system, remove old components and framer-motion`.

### Task 4: Home page

**Files:** `app/page.js`, components `Nav, SocialRow, Hero, WorkSection, ProjectTile, FactsRow, ExperienceList, About, Footer`, `tests/e2e/home.spec.js`, `tests/e2e/pages.js`

- [ ] `pages.js` exports `['/', '/work/betmate', '/work/gpflow', '/work/whenwillyoumarry']`.
- [ ] `home.spec.js` (JS disabled context): h1 is "Abel Ghebrezadik" with no trailing "."; both path links present with hrefs `#experience` and `#work`; three project tiles each linking to `/work/<slug>`; seven experience rows; "Download CV" → `/assets/abel_ghebrezadik_cv.pdf`; "1 million" visible; "Dec 2025" visible. Nav at 320px: all four links visible (they wrap to a second row under the name) with no horizontal scroll. No menu dialog: four short links fit, so the spec's Radix Dialog menu is dropped (YAGNI; spec updated).
- [ ] Run → fails. Build components per spec §3 (all server components). Filter tabs component is not built (YAGNI: renders only at ≥5 projects; there are 3).
- [ ] Run → passes. Screenshot 1440 and 375, compare to mockup. Commit `feat(home): quiet CV home page`.

### Task 5: Case-study pages and screen viewer

**Files:** `app/work/[slug]/page.js`, `ScreenStrip.jsx`, `ScreenViewer.jsx`, `tests/e2e/case-study.spec.js`

- [ ] Tests: each slug renders its headline (h1), facts row, all screens (each an `<a href>` to the image when JS off); `/work/nope` returns 404; viewer: click 2nd screen → dialog with that image; ArrowRight → 3rd; ArrowLeft from 1st wraps to last; Escape closes and focus returns to the opening screen link; "Next project" cycles betmate → gpflow → whenwillyoumarry → betmate.
- [ ] Run → fails. Implement with `generateStaticParams`, `dynamicParams = false`, `notFound()`; `ScreenStrip` server-renders `<a>` links; `ScreenViewer` client wraps them and intercepts clicks.
- [ ] Run → passes. Commit `feat(work): case-study pages with screen viewer`.

### Task 6: Contact — Cal embed and enquiry router

**Files:** `src/lib/mailto.js`, `tests/unit/mailto.test.mjs`, `Contact.jsx`, `CalEmbed.jsx`, `EnquiryRouter.jsx`, `tests/e2e/contact.spec.js`

**Produces:** `buildEnquiry({ who: 'hiring'|'project'|'other', need?, name, email, message, company?, role?, timeline?, budget? }) → { to, subject, body, href }`.

- [ ] `mailto.test.mjs` first: hiring → to HIRING_EMAIL, subject `[Hiring] <role> at <company>: <name>`; project → PROJECT_EMAIL, subject `[Project] <need label>: <name>`; other → HIRING_EMAIL, `[Enquiry] <name>`; body lists only fields of the chosen route (project state carrying a stale `company` must not include it); `href` encodes with `encodeURIComponent` (spaces as `%20`, not `+`); empty optional budget omitted.
- [ ] Implement `mailto.js`; tests pass.
- [ ] `contact.spec.js`: Cal fallback link `href` = CAL_URL present with JS off; JS off form has `action="mailto:abelghebz@gmail.com" method="post" enctype="text/plain"`; JS on: choosing Hiring shows Company+Role and hides need/timeline/budget; choosing Project shows need/timeline/budget; submit (intercept `window.location` assignment via `page.exposeFunction`/route on `mailto:`) produces the exact `href` from `buildEnquiry`; required fields block submit with visible messages.
- [ ] Implement components; `CalEmbed` loads `https://app.cal.com/embed/embed.js` via IntersectionObserver, inline `calLink: "abel-ghebrezadik/15min"`, keeps the fallback link visible until the iframe exists.
- [ ] Tests pass. Commit `feat(contact): Cal.com booking and enquiry router`.

### Task 7: SEO and link previews

**Files:** `app/sitemap.js`, `app/robots.js`, `app/opengraph-image.js`, `app/work/[slug]/opengraph-image.js`, layout JSON-LD, `tests/e2e/seo.spec.js`

- [ ] Tests: each page has the seo title, description and canonical; `/sitemap.xml` lists all four URLs on `https://abelghebz.com`; `/robots.txt` allows all and names the sitemap; `/opengraph-image` and `/work/betmate/opengraph-image` return 200 `image/png`; home has a JSON-LD `Person` with `name`, `jobTitle`, `sameAs`.
- [ ] Implement; OG uses Erode woff2 → load the font as ArrayBuffer from `src/fonts` (satori needs ttf/otf/woff; if woff2 is rejected, fetch Erode's woff from Fontshare in `fetch-fontshare.mjs` as well).
- [ ] Tests pass. Commit `feat(seo): metadata list, sitemap, robots, link-preview cards`.

### Task 8: Quality gates — a11y, reflow, motion, style guard

**Files:** `tests/e2e/quality.spec.js`, `scripts/style-guard.mjs`, `tests/unit/style-guard.test.mjs`

- [ ] `quality.spec.js` for every page in `pages.js`: axe (`wcag2a, wcag2aa, wcag21a, wcag21aa, wcag22aa`) has **zero** violations; no console errors; `scrollWidth <= innerWidth` at 320 and 375; with `reducedMotion: 'reduce'` `document.getAnimations().length === 0` after scrolling to bottom.
- [ ] `style-guard.mjs` scans `.next/server/app/**/*.html` and `.next/static/css/*.css` for: `•▪‣`, `list-style-type:disc`, `text-transform:uppercase`, `linear-gradient(`/`radial-gradient(`, `Ghebrezadik.` inside the h1, `[Your input`, font-family names outside Erode/Author/JetBrains Mono/fallbacks. `style-guard.test.mjs` feeds it fixture strings: each banned pattern is reported, a clean fixture reports nothing.
- [ ] Fix whatever fails. Commit `test: accessibility, reflow, motion and style gates`.

### Task 9: CI, docs, decision records

**Files:** `.github/workflows/check.yml`, `README.md`, `docs/decisions/0001..0009`

- [ ] Workflow: on `pull_request` and push to `main`; `ubuntu-latest`; Node 24; `npm ci`; `npx playwright install --with-deps chromium`; `sh tool/check.sh`; upload Playwright report only on failure (retention 3 days).
- [ ] Push branch; open a draft PR; read the run. If GitHub-hosted runners are blocked, record that and switch `runs-on` to the Hetzner self-hosted label after registering a runner (needs Abel only if registration needs his token).
- [ ] README: run, check, deploy, fonts licence note, component sources table, open items for Abel.
- [ ] Decision records 0001 look (A), 0002 rebuild in place, 0003 content without JS / no animation library, 0004 case-study pages, 0005 contact (Cal.com + mailto + routing), 0006 light only, 0007 Fontshare Erode + Author fetched at build, 0008 own code from named sources, 0009 check gate + CI. Each states who decided.
- [ ] Commit `docs: readme and decision records`; `ci: check workflow`.

### Task 10: Final verification and handoff

- [ ] `npm run check` locally, exit 0, output read in full.
- [ ] Screenshots at 1440 and 375 of every page reviewed against the mockups.
- [ ] Whole-branch review by a fresh reviewer; fix findings.
- [ ] PR description: what changed, screenshots, captions to confirm, open items. Mark ready. **Stop before merge** (merge deploys the live site).
