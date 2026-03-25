# Portfolio Website Redesign — Design Spec

**Author:** Abel Ghebrezadik
**Date:** 2026-03-25
**Status:** Approved

## Overview

Redesign the existing React CV site into a professional portfolio/personal brand website. Single-page scrolling site with rich animations, dark theme, and interactive elements. The goal is to attract opportunities (jobs, freelance, collaborations) by showcasing work, experience, and skills with high visual polish.

## Tech Stack

- **Framework:** React 19 (existing) with Create React App
- **Styling:** Tailwind CSS 4 (already installed, needs activation/configuration — see Build Configuration below)
- **Animations:** Framer Motion (new dependency)
- **Typography:** Inter (weights 300–800) + JetBrains Mono (monospace labels/tags)
- **Icons:** Devicon (existing, for skill logos), React Icons (existing, for social links)

## Build Configuration

Tailwind CSS v4 uses a CSS-first configuration model (`@import "tailwindcss"` in CSS, no `tailwind.config.js`). CRA's PostCSS pipeline does not natively support this without customisation.

**Approach:** Use `craco` (Create React App Configuration Override) to extend CRA's PostCSS config with Tailwind v4's PostCSS plugin, avoiding a full eject. Steps:

1. Install `@craco/craco` and update `package.json` scripts to use `craco` instead of `react-scripts`
2. Create `craco.config.js` with PostCSS config for `@tailwindcss/postcss`
3. Add `@import "tailwindcss"` to `index.css` along with `@theme` block registering the design tokens (colors, fonts)
4. Remove the existing CSS custom properties and migrate to Tailwind theme tokens

If craco proves incompatible with CRA 5 + Tailwind v4, fallback plan is to migrate to **Vite** (`@vitejs/plugin-react`) which has native PostCSS support. This is a clean swap since the app has no CRA-specific dependencies.

## Design System

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| `bg-primary` | `#06060b` | Page background |
| `gradient-start` | `#AE67FA` | Purple accent |
| `gradient-end` | `#F49867` | Orange accent |
| `text-primary` | `#ffffff` | Headings, primary text |
| `text-secondary` | `rgba(255,255,255,0.45)` | Body text, descriptions |
| `text-muted` | `rgba(255,255,255,0.25)` | Labels, subtle text |
| `border-subtle` | `rgba(255,255,255,0.06)` | Card borders, dividers |
| `surface` | `rgba(255,255,255,0.02)` | Card backgrounds |
| `status-green` | `#34D399` | Availability indicator |

### Typography

| Element | Font | Weight | Size |
|---------|------|--------|------|
| Hero title | Inter | 300/800 | clamp(56px, 8vw, 96px) |
| Section heading | Inter | 300/700 | 44px |
| Body text | Inter | 400 | 15–17px |
| Labels/tags | JetBrains Mono | 400 | 11–13px |
| Nav links | Inter | 500 | 13px |

### Shared Patterns

- **Section tag:** JetBrains Mono uppercase label with gradient line prefix (e.g., `— ABOUT`, `— EXPERIENCE`)
- **Gradient text:** `linear-gradient(135deg, #AE67FA, #F49867)` applied via `background-clip: text`
- **Tech pills:** Small rounded pills with `JetBrains Mono`, purple-tinted background and border
- **Cards:** `surface` background, `border-subtle` border, 20px border-radius, hover lifts with gradient top border
- **Dividers:** Horizontal gradient line fading to transparent at edges

## Sections

### 1. Navigation

Fixed top bar with:
- **Logo:** "AG /" — name bold, slash muted
- **Links:** About, Experience, Projects, Skills — uppercase, 13px, gradient underline on hover
- Smooth scroll to sections on click

### 2. Hero — Particle Network

Full viewport height. Three layers:

1. **Background:** Canvas-based particle system — ~60 particles in purple/orange, floating with slow drift. Particles connect with lines when near each other. Lines also connect particles to cursor position within a radius. Ambient gradient glow orbs (blurred, low opacity) in corners.

2. **Content:**
   - Section label: `— SOFTWARE ENGINEER` (monospace, uppercase)
   - Title: Three animated lines — "I build" (light) / "**products** that" (bold gradient) / "people love." (light). Staggered reveal animation (translateY + fade).
   - Description: 1–2 sentences, `text-secondary` color
   - CTAs: "View Projects →" (gradient filled button) + "Download CV" (ghost button)
   - Status: Green pulsing dot + "Available for opportunities"

3. **Footer area:** Social links (GitHub, LinkedIn, Email) left-aligned as subtle uppercase text links. Scroll indicator on the right with animated gradient line.

**Interactions:**
- Custom cursor — ring that follows mouse with eased lag, scales up on hoverable elements. Hidden on touch devices. Disabled when `prefers-reduced-motion` is set.
- Particles connect to cursor within ~200px radius
- Staggered entrance animations on load

### 3. About — Split with Career Timeline

Two-column layout:

**Left column (40%):**
- Section tag: `— ABOUT`
- Heading: "Building for **7+ years**."
- Short bio paragraph (3–4 sentences): who you are, what you do, what you care about

**Right column (60%):**
- Vertical timeline with gradient line (`#AE67FA` → `#F49867` → transparent`)
- 4 career milestones with:
  - Year range (JetBrains Mono, purple tint)
  - Company + title (bold)
  - One-line description (muted)
  - Dot on the timeline line — hollow by default, fills + glows on hover

**Animations:** Scroll-triggered — left column fades in from left, timeline items stagger in from right.

### 4. Experience — Cards Grid

- Section tag: `— EXPERIENCE`
- Heading: "Where I've **built things**."

**Layout:**
- ITSW gets a **featured full-width card** (spans 2 columns) with a split layout: left side has company info (logo placeholder, year badge, title, role, description, tech tags, link to site), right side has a site preview area (could be screenshot or styled placeholder)
- Remaining 4 companies in a **2-column grid** of equal cards
- Each card: company logo as styled initials in a rounded square (final design, not placeholder), year badge (pill), company name, role, description, tech tags

**Card styling:**
- `surface` background, `border-subtle` border, 20px radius
- Hover: lift -4px, gradient top border appears, subtle box shadow
- Tech tags as pills at bottom

**Companies (in order):**
1. ITSW — Founder & Full-Stack Engineer (2024–Present) — Featured
2. Salary Finance — Senior Software Engineer (2022–2024)
3. WEX / Optal — Software Engineer (2020–2022)
4. London Metal Exchange — Software Developer (2018–2020)
5. FDM Group — Software Consultant (2017–2018)

### 5. Projects — Stacked Showcase

- Section tag: `— PROJECTS`
- Heading: "Things I've **shipped**."

**Layout:** Vertical stack of full-width cards, alternating image side (left/right) per card.

**Each card:**
- One side: Browser frame mockup (dots header + content area) showing project preview/screenshot
- Other side: Project number (01, 02, etc.), project name (large), project type/category (orange accent), description paragraph, tech pills row, links (Live Site ↗, GitHub ↗)

**Card styling:**
- Full-width, `surface` background, `border-subtle` border, 24px radius
- Hover: lift -4px, shadow deepens, browser frame scales slightly (1.03)
- Alternating direction gives visual rhythm

**Projects:** 4 cards. ITSW is confirmed as #1. Projects 2–4 are TBD — build the section with placeholder content (title: "Project Name", description: "Project description goes here", tech: placeholder pills). Abel will swap in real content before launch. The alternating layout works with any even or odd count.

**Animations:** Each card slides in from alternating sides on scroll, browser frame has a subtle parallax offset.

### 6. Skills — Infinite Scroll Marquee

- Section tag: `— SKILLS`
- Heading: "My **toolkit**."

**Layout:** Two horizontal rows, each scrolling continuously in opposite directions. Fade-to-transparent mask on left and right edges.

**Row 1 — Languages & Frameworks (scrolls left):**
C# / .NET, Python, JavaScript, React, Vue.js, Node.js, Java, Go

**Row 2 — Infrastructure & Data (scrolls right):**
AWS, Docker, MSSQL, MySQL, MongoDB, Flutter, C++

Each item is a pill with icon placeholder (2-letter abbreviation in rounded square) + name. Items are duplicated in the DOM for seamless looping.

**Interactions:** Hover on a pill pauses the row animation. Row labels above each marquee in JetBrains Mono.

**Animations:** CSS `@keyframes` for continuous scroll. Framer Motion for scroll-triggered entrance of the section.

### 7. Footer

Minimal footer matching the dark theme:
- Social links (GitHub, LinkedIn, Email)
- Copyright line
- Consistent with nav styling

## Animation Strategy

All animations use **Framer Motion** except the particle system (vanilla Canvas API) and the skill marquee (CSS keyframes).

| Trigger | Animation | Duration |
|---------|-----------|----------|
| Page load | Hero text stagger reveal | 0.2s delay between lines |
| Page load | Hero description + CTAs fade in | 0.8s, delayed |
| Page load | Particle system starts | Immediate, continuous |
| Scroll into view | Section headings fade + slide up | 0.6s |
| Scroll into view | About timeline items stagger in | 0.15s delay between items |
| Scroll into view | Experience cards stagger in | 0.1s delay between cards |
| Scroll into view | Project cards slide in from alternating sides | 0.6s each |
| Hover | Cards lift + border glow | 0.3–0.4s ease |
| Hover | Nav links gradient underline | 0.3s |
| Hover | Timeline dots fill + glow | 0.3s |
| Continuous | Custom cursor follows mouse | 0.12 lerp factor |
| Continuous | Particle drift + connections | 60fps canvas loop |
| Continuous | Skill marquee scroll | 30–35s per loop |
| Continuous | Status dot pulse | 2s infinite |

## Accessibility & Reduced Motion

All continuous animations (particle system, custom cursor, skill marquee, status dot pulse) respect `prefers-reduced-motion: reduce`:
- Particles render as static dots with no drift or connections
- Custom cursor is disabled (system cursor used)
- Marquee stops scrolling, displays as a static wrapped grid
- Scroll-triggered animations play instantly (no transition)

Fonts use `font-display: swap` to prevent invisible text during load. Canvas has no visible content fallback needed (decorative only).

## Responsive Considerations

- **Desktop first** (current site is desktop-focused)
- Breakpoints: 1024px (tablet), 768px (mobile)
- Mobile: single column layouts, reduced particle count (~20), marquee continues, hero text scales down via `clamp()`
- Custom cursor hidden on touch devices
- Nav collapses to hamburger on mobile

## Migration Strategy

This is a **full rebuild**, not an incremental refactor. The existing component files (`src/components/header/`, `src/components/experience/`, `src/components/skill/`, `src/containers/`) will be deleted and replaced with the new structure. The existing `App.js` will be rewritten as `App.jsx`. Since the site is small (5 components), there is no benefit to incremental migration.

Steps: (1) Create new component structure alongside existing, (2) rewrite `App.jsx` to use new components, (3) delete old component/container directories, (4) clean up unused assets.

## Data Architecture

All content remains **hardcoded** in a central data file (`src/data/content.js`). This matches the existing approach and keeps things simple for a personal site.

**Download CV:** The "Download CV" button links to the existing PDF at `/assets/abel_ghebrezadik_cv.pdf` (already in `/public/assets/`).

## File Structure (Proposed)

```
src/
├── components/
│   ├── Hero/
│   │   ├── Hero.jsx
│   │   ├── ParticleCanvas.jsx
│   │   └── CustomCursor.jsx
│   ├── About/
│   │   └── About.jsx
│   ├── Experience/
│   │   └── Experience.jsx
│   ├── Projects/
│   │   └── Projects.jsx
│   ├── Skills/
│   │   └── Skills.jsx
│   ├── Navbar/
│   │   └── Navbar.jsx
│   └── Footer/
│       └── Footer.jsx
├── data/
│   └── content.js          // Centralised content data
├── hooks/
│   └── useScrollAnimation.js
├── App.jsx
├── index.js
└── index.css               // Tailwind directives + CSS variables
```

## Out of Scope

- Blog/writing section
- Contact form
- CMS integration
- Dark/light theme toggle
- Multi-page routing
- SEO/SSR (CRA is SPA-only)
- Testimonials section
