# 0002: Rebuild in place on the existing Next.js app

- **Status:** Accepted, chosen by Abel on 1 October 2026.
- **Date:** 1 October 2026
- **Decides:** whether the redesign reuses the current repo and stack.
- **Relates to:** [0003](0003-content-never-depends-on-javascript.md), [0009](0009-check-gate-and-ci.md).
- **Doesn't decide:** hosting, which stays on Railway behind Cloudflare.

## Options

| Option | For | Against |
|---|---|---|
| **Rebuild in place — chosen** | Same repo, Next 16, Tailwind 4 and Railway deploy; nothing new to host | Most components are rewritten |
| Rebuild, keep Framer Motion | Less motion work | Keeps the class of bug that blanked the live site |
| Start from a template (Magic UI portfolio) | Faster start | Brings its own look and a shadcn setup that fight 0001 |

## Decision

Same repository and deploy. Framer Motion, `react-icons`, the particle canvas, the custom cursor and the Create React
App leftovers are removed; `radix-ui` is added for the screen viewer. All copy moves to `src/content/`, one source for
every page, card and test.
