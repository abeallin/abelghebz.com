# 0009: One check gate, run locally and in CI before every deploy

- **Status:** Accepted, chosen by Abel on 1 October 2026 (adopting ESA decisions 0013, 0014, 0024, 0032 and 0033).
- **Date:** 1 October 2026
- **Decides:** what has to pass before a change ships, and how.
- **Relates to:** [0003](0003-content-never-depends-on-javascript.md).
- **Doesn't decide:** branch protection.

## Decision

1. `tool/check.sh` (`npm run check`): lint, unit tests (`node:test`), build once, the style guard, then Playwright
   against the built site. `set -eu`, no pipes, so its exit code is the real result.
2. Playwright covers every page with JavaScript off, axe at WCAG 2.2 A/AA failing on **any** violation, no console
   errors, no sideways scroll at 320px and 375px, nothing animating under reduced motion, the enquiry routing, the
   screen viewer, the booking fallback, SEO tags, the sitemap and the preview cards.
3. The style guard (`scripts/style-guard.mjs`, after XG's `tropes.py`) scans the built HTML and CSS for bullets,
   all-caps, gradients, banned fonts, centred text, a full stop after the name, `[Your input` markers and the stale
   Betmate figures.
4. `.github/workflows/check.yml` runs the same script on every pull request and on `main`. Changes reach `main` through
   pull requests; Railway deploys `main`, gated by its "Wait for CI" setting once Abel turns it on.
5. Shell scripts are pinned to LF in `.gitattributes`, because `sh` fails on CRLF in Windows checkouts.
