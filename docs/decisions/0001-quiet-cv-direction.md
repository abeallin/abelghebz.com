# 0001: The "Quiet CV" look, with an editorial hero

- **Status:** Accepted, chosen by Abel on 1 October 2026 from three directions shown side by side.
- **Date:** 1 October 2026
- **Decides:** the site's visual direction: palette, type and layout character.
- **Relates to:** [0006](0006-light-theme-only.md), [0007](0007-fontshare-erode-and-author.md),
  [0008](0008-own-code-from-named-sources.md); spec `docs/superpowers/specs/2026-10-01-cv-site-redesign-design.md`.
- **Doesn't decide:** the content.

## Context

The site has to win over two audiences equally: hiring managers for lead and senior roles, and clients for private
work. Abel asked for ideas from 21st.dev, Mobbin and Dribbble, and for nothing that looks templated or AI-made. The
live site was dark with a particle hero, and its sections were blank until a scroll animation fired.

## Options

| Option | For | Against |
|---|---|---|
| **A · Quiet CV, editorial hero — chosen** | Calm and readable; one loud moment (the name); reads as senior to both audiences | Less immediately distinctive than B |
| B · Swiss grid | The most distinctive; says "systems thinker" | The giant surname crops on phones; grayscale screenshots undersell app work |
| C · Dark instrument | Impresses technical hiring managers | Clients can read it as cold; closest to the old site |

Sources: Dribbble shots 24892401 (Breneva), 27050710 and 27063944 (Wachid); Mobbin screen cards and flows; Linear's
customer stories and changelog.

## Decision

Warm paper (`#F6F4EF`), ink text, one orange-red accent used only for underlines, focus and hover (`#D9461B`), with
`#B83A12` where the accent must be text or a button. The name is set large in a serif with no full stop after it
(Abel, 1 October 2026). Everything else is quiet.

## Consequences

The palette's contrast is measured and recorded in the spec; the axe gate (0009) holds it.

## What would change this decision

Abel choosing a different direction after seeing it live.
