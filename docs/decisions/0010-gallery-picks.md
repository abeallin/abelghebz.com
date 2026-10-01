# 0010: The gallery picks: Hero D, Work D, Experience B, Buttons A, and pills, never underlines

- **Status:** Accepted, chosen by Abel on 1 October 2026 from the hidden `/gallery` page.
- **Date:** 1 October 2026
- **Decides:** the layout of each home section and how links and actions look.
- **Relates to:** [0001](0001-quiet-cv-direction.md) (direction, which this refines),
  [0008](0008-own-code-from-named-sources.md) (sources).
- **Doesn't decide:** the colours or type ([0001](0001-quiet-cv-direction.md), [0007](0007-fontshare-erode-and-author.md)).

## Context

Abel saw the first build locally and said it "aesthetically needs to improve", that it had "a lot of underlining under
links", and that the ideas should come from the reference designs we had scanned. He asked for a gallery and brand page,
as on ESA. The gallery (`/gallery`, noindex, unlinked) offered four heroes, four work layouts, three experience layouts
and three action sets, each based on a named reference; `/brand` shows the system.

## Decision

| Section | Pick | Based on |
|---|---|---|
| Hero | **D, quiet CV**: photo, name, one headline, two pills, a "Worked with" row | Dribbble 27050710 / 27063944 (Wachid) |
| Work | **D**: Betmate featured large, the other two beside each other, covers on each app's colour | Mobbin app pages; Dribbble 27536327 (Satz) |
| Experience | **B**: timeline, each role's detail behind a "More" pill (`<details>`, no JS needed) | Linear changelog; 21st.dev olewandowski1/timeline-1 |
| Buttons, contact, footer | **A**: pills, a dark call-to-action card opening Contact, the name set large in the footer with pill links | Dribbble 27429954 (Alevtinka), 27050710 (Wachid) |

Abel: "I like pills not small arrows, looks too generic." So every action on the public pages is a pill, nav links show
a short accent bar on hover and focus, and nothing is underlined. A Playwright test fails if any link on a public page is
underlined at rest.

## Consequences

The gallery and brand pages stay in the app as the record of the options; the arrow and block styles live only there.
