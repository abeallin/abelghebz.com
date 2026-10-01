# 0003: Content never depends on JavaScript; motion only adds to it

- **Status:** Accepted, chosen by Abel on 1 October 2026 (adopting ESA decision 0006).
- **Date:** 1 October 2026
- **Decides:** how anything interactive or animated is built.
- **Relates to:** [0002](0002-rebuild-in-place.md), [0009](0009-check-gate-and-ci.md).

## Context

A full-page capture of the old site on 1 October 2026 showed About, Experience and Projects completely blank: Framer
Motion rendered their start state and only revealed them on scroll. Crawlers, link previews and print saw nothing.

## Decision

1. The server HTML is the finished page. Tests load every page with JavaScript off and check the key text.
2. Motion is CSS only: screens lift on hover and focus, and case-study screens ease in through
   `animation-timeline: view()`, inside `@supports`, `prefers-reduced-motion: no-preference` and `min-width: 48rem`.
3. No animation library.
4. Interactive parts have a plain fallback in the HTML: screenshots are links to the image, the enquiry form posts as
   `mailto`, and the Cal.com booking is also a plain link.
5. Anything shown on hover is also shown on keyboard focus.
