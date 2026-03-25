# Portfolio Website Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the existing React CV site into a polished, animation-rich single-page portfolio with particle effects, scroll animations, and interactive elements.

**Architecture:** Full rebuild of the existing CRA app. Configure Tailwind v4 via craco, add Framer Motion, then build each section as a standalone component fed by a central data file. Canvas-based particle system and custom cursor are isolated in their own files.

**Tech Stack:** React 19, Tailwind CSS 4 (via craco), Framer Motion, Canvas API, Inter + JetBrains Mono fonts

**Spec:** `docs/superpowers/specs/2026-03-25-portfolio-redesign-design.md`

---

## File Map

| File | Responsibility |
|------|---------------|
| `craco.config.js` | PostCSS config for Tailwind v4 |
| `src/index.css` | Tailwind directives, `@theme` tokens, global styles, font imports, reduced-motion rules |
| `src/index.js` | React entry point (unchanged) |
| `src/App.jsx` | Root layout — renders all sections in order |
| `src/data/content.js` | All site content: bio, experience, projects, skills, social links |
| `src/components/Navbar/Navbar.jsx` | Fixed top nav with logo, section links, smooth scroll, mobile hamburger |
| `src/components/Hero/Hero.jsx` | Hero section layout, animated text, CTAs, status indicator, social links |
| `src/components/Hero/ParticleCanvas.jsx` | Canvas particle system — drift, connections, cursor interaction |
| `src/components/Hero/CustomCursor.jsx` | Custom cursor ring with eased follow and hover scaling |
| `src/components/About/About.jsx` | Split layout — bio left, career timeline right |
| `src/components/Experience/Experience.jsx` | Cards grid — featured ITSW card + 2-col grid |
| `src/components/Projects/Projects.jsx` | Stacked alternating showcase cards with browser frames |
| `src/components/Skills/Skills.jsx` | Infinite scroll marquee — two rows, opposite directions |
| `src/components/shared/TechPill.jsx` | Reusable tech tag pill used in Experience and Projects |
| `src/components/Footer/Footer.jsx` | Minimal footer with social links and copyright |

---

## Task 1: Build Tooling Setup (craco + Tailwind v4)

**Files:**
- Modify: `package.json`
- Create: `craco.config.js`
- Modify: `src/index.css`
- Modify: `public/index.html`

- [ ] **Step 1: Install dependencies**

```bash
cd C:/Users/Abel/React/ag-cv && npm install framer-motion && npm install -D @craco/craco @tailwindcss/postcss
```

- [ ] **Step 2: Update package.json scripts to use craco**

Replace the `scripts` block in `package.json`:

```json
"scripts": {
  "start": "craco start",
  "build": "craco build",
  "test": "craco test",
  "eject": "react-scripts eject"
}
```

- [ ] **Step 3: Create craco.config.js**

```js
// craco.config.js
module.exports = {
  style: {
    postcss: {
      plugins: [require("@tailwindcss/postcss")],
    },
  },
};
```

- [ ] **Step 4: Rewrite src/index.css with Tailwind v4 directives and design tokens**

```css
@import "tailwindcss";

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400&display=swap');

@theme {
  --color-bg-primary: #06060b;
  --color-gradient-start: #AE67FA;
  --color-gradient-end: #F49867;
  --color-text-primary: #ffffff;
  --color-text-secondary: rgba(255, 255, 255, 0.45);
  --color-text-muted: rgba(255, 255, 255, 0.25);
  --color-border-subtle: rgba(255, 255, 255, 0.06);
  --color-surface: rgba(255, 255, 255, 0.02);
  --color-status-green: #34D399;
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: var(--font-sans);
  background-color: var(--color-bg-primary);
  color: var(--color-text-primary);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Reduced motion preferences */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

- [ ] **Step 5: Update public/index.html font preconnects**

In `public/index.html`, add inside `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

- [ ] **Step 6: Verify dev server starts**

```bash
cd C:/Users/Abel/React/ag-cv && npm start
```

Expected: Dev server starts on port 3000 with no errors. Page renders with dark background (`#06060b`).

**If this step fails** (craco incompatible with CRA 5 + Tailwind v4): Follow the Vite fallback from the spec. Run `npm install -D vite @vitejs/plugin-react`, create `vite.config.js`, move `public/index.html` to root as `index.html`, update `package.json` scripts to use `vite`/`vite build`, and remove `react-scripts` and `@craco/craco`.

- [ ] **Step 7: Commit**

```bash
git add craco.config.js package.json package-lock.json src/index.css public/index.html
git commit -m "chore: configure craco + Tailwind CSS v4 with design tokens"
```

---

## Task 2: Content Data File

**Files:**
- Create: `src/data/content.js`

- [ ] **Step 1: Create src/data/content.js**

```js
// src/data/content.js

export const personal = {
  name: "Abel Ghebrezadik",
  initials: "AG",
  title: "Senior Software Engineer",
  tagline: "I build",
  taglineHighlight: "products",
  taglineSuffix: "that\npeople love.",
  description:
    "Senior Software Engineer crafting scalable, user-focused applications. From backend systems to polished frontends — I bring ideas to life.",
  status: "Available for opportunities",
  cvPath: "/assets/abel_ghebrezadik_cv.pdf",
};

export const social = [
  { label: "GitHub", url: "https://github.com/negus14" },
  { label: "LinkedIn", url: "https://linkedin.com/in/abel-ghebrezadik" },
  { label: "Email", url: "mailto:abel_g@hotmail.co.uk" },
];

export const about = {
  heading: "Building for",
  headingHighlight: "7+ years",
  bio: "Senior Software Engineer based in London. I build full-stack products across fintech, enterprise, and startups. I care about clean code, great UX, and shipping things that work.",
};

export const timeline = [
  {
    year: "2024 — Present",
    company: "ITSW",
    title: "Founder & Full-Stack Engineer",
    description:
      "Building a wedding website platform from the ground up. Full-stack React, Node.js, and cloud infrastructure.",
  },
  {
    year: "2022 — 2024",
    company: "Salary Finance",
    title: "Senior Software Engineer",
    description:
      "Financial wellbeing platform. Led feature development across .NET backend and React frontend.",
  },
  {
    year: "2020 — 2022",
    company: "WEX / Optal",
    title: "Software Engineer",
    description:
      "Global payments and travel fintech. Built systems handling high-volume transaction processing.",
  },
  {
    year: "2018 — 2020",
    company: "London Metal Exchange",
    title: "Software Developer",
    description:
      "Enterprise trading platform. Worked on core exchange systems used by global commodity traders.",
  },
];

export const experience = [
  {
    company: "ITSW",
    initials: "IT",
    role: "Founder & Full-Stack Engineer",
    year: "2024 — Present",
    description:
      "Building a wedding website platform from scratch — product design, full-stack development, and infrastructure. My own product, built from the ground up.",
    tech: ["React", "Node.js", "AWS", "PostgreSQL"],
    link: { label: "ithinkshewifey.com", url: "https://ithinkshewifey.com" },
    featured: true,
  },
  {
    company: "Salary Finance",
    initials: "SF",
    role: "Senior Software Engineer",
    year: "2022 — 2024",
    description:
      "Financial wellbeing platform. Led feature development across .NET microservices and React frontends.",
    tech: ["C# / .NET", "React", "MSSQL", "Azure"],
  },
  {
    company: "WEX / Optal",
    initials: "WX",
    role: "Software Engineer",
    year: "2020 — 2022",
    description:
      "Global payments and travel fintech. High-volume transaction processing and virtual card systems.",
    tech: ["C# / .NET", "Python", "MSSQL", "Docker"],
  },
  {
    company: "London Metal Exchange",
    initials: "LM",
    role: "Software Developer",
    year: "2018 — 2020",
    description:
      "Enterprise trading platform. Core exchange systems and market data infrastructure for global commodity trading.",
    tech: ["C# / .NET", "Java", "MSSQL"],
  },
  {
    company: "FDM Group",
    initials: "FD",
    role: "Software Consultant",
    year: "2017 — 2018",
    description:
      "IT consultancy programme. Enterprise software development training and client deployment.",
    tech: ["Java", "SQL", "C#"],
  },
];

export const projects = [
  {
    number: "01",
    name: "I Think She Wifey",
    type: "Wedding Website Platform",
    description:
      "A fully featured wedding website builder with RSVP management, gift registry, guest communication, and beautiful customisable templates.",
    tech: ["React", "Node.js", "AWS", "PostgreSQL"],
    links: [
      { label: "Live Site", url: "https://ithinkshewifey.com" },
    ],
  },
  {
    number: "02",
    name: "Project Name",
    type: "Project Category",
    description: "Project description goes here.",
    tech: ["Tech", "Stack"],
    links: [],
  },
  {
    number: "03",
    name: "Project Name",
    type: "Project Category",
    description: "Project description goes here.",
    tech: ["Tech", "Stack"],
    links: [],
  },
  {
    number: "04",
    name: "Project Name",
    type: "Project Category",
    description: "Project description goes here.",
    tech: ["Tech", "Stack"],
    links: [],
  },
];

export const skillRows = [
  {
    label: "Languages & Frameworks",
    direction: "left",
    items: [
      { abbr: "C#", name: "C# / .NET" },
      { abbr: "PY", name: "Python" },
      { abbr: "JS", name: "JavaScript" },
      { abbr: "Re", name: "React" },
      { abbr: "Vu", name: "Vue.js" },
      { abbr: "No", name: "Node.js" },
      { abbr: "JV", name: "Java" },
      { abbr: "GO", name: "Go" },
    ],
  },
  {
    label: "Infrastructure & Data",
    direction: "right",
    items: [
      { abbr: "AW", name: "AWS" },
      { abbr: "Do", name: "Docker" },
      { abbr: "MS", name: "MSSQL" },
      { abbr: "My", name: "MySQL" },
      { abbr: "Mg", name: "MongoDB" },
      { abbr: "Fl", name: "Flutter" },
      { abbr: "C+", name: "C++" },
    ],
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
];
```

- [ ] **Step 2: Commit**

```bash
git add src/data/content.js
git commit -m "feat: add centralised content data file"
```

---

## Task 3: Navbar Component

**Files:**
- Create: `src/components/Navbar/Navbar.jsx`

- [ ] **Step 1: Create src/components/Navbar/Navbar.jsx**

```jsx
import React, { useState, useEffect } from "react";
import { navLinks } from "../../data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-16 py-6 transition-all duration-300 ${
        scrolled ? "bg-bg-primary/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <a href="#" className="text-lg font-bold tracking-tight text-white">
        AG <span className="font-normal text-text-muted">/</span>
      </a>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-10">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="relative text-[13px] font-medium uppercase tracking-wider text-text-muted hover:text-white/90 transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-gradient-to-r after:from-gradient-start after:to-gradient-end hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-[1.5px] bg-white transition-all duration-300 ${
            menuOpen ? "rotate-45 translate-y-[7px]" : ""
          }`}
        />
        <span
          className={`block w-6 h-[1.5px] bg-white transition-all duration-300 ${
            menuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-6 h-[1.5px] bg-white transition-all duration-300 ${
            menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
          }`}
        />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-bg-primary/95 backdrop-blur-md border-t border-border-subtle md:hidden">
          <ul className="flex flex-col p-8 gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium uppercase tracking-wider text-text-secondary hover:text-white transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Navbar/Navbar.jsx
git commit -m "feat: add Navbar component with scroll effect and mobile menu"
```

---

## Task 4: Custom Cursor

**Files:**
- Create: `src/components/Hero/CustomCursor.jsx`

- [ ] **Step 1: Create src/components/Hero/CustomCursor.jsx**

```jsx
import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const visibleRef = useRef(false);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const [enabled] = useState(() => {
    if (typeof window === "undefined") return false;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    return !isTouch && !reducedMotion;
  });

  useEffect(() => {
    if (!enabled) return;

    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX - 2}px`;
        dotRef.current.style.top = `${e.clientY - 2}px`;
      }
      if (!visibleRef.current) {
        visibleRef.current = true;
        setVisible(true);
      }
    };

    const onEnter = () => setHovering(true);
    const onLeave = () => setHovering(false);

    // Use event delegation for hover detection (covers dynamically rendered elements)
    const onMouseOver = (e) => {
      if (e.target.closest("a, button, [data-hover]")) onEnter();
    };
    const onMouseOut = (e) => {
      if (e.target.closest("a, button, [data-hover]")) onLeave();
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);

    let raf;
    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.12;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.12;
      if (cursorRef.current) {
        cursorRef.current.style.left = `${pos.current.x - 10}px`;
        cursorRef.current.style.top = `${pos.current.y - 10}px`;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className={`fixed w-5 h-5 rounded-full border-[1.5px] border-gradient-start/60 pointer-events-none z-[9999] mix-blend-difference transition-transform duration-150 ease-out ${
          hovering ? "scale-[2.5] !border-gradient-end/80" : ""
        } ${visible ? "opacity-100" : "opacity-0"}`}
      />
      <div
        ref={dotRef}
        className={`fixed w-1 h-1 rounded-full bg-white pointer-events-none z-[9999] ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      />
    </>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Hero/CustomCursor.jsx
git commit -m "feat: add CustomCursor component with hover scaling and reduced-motion support"
```

---

## Task 5: Particle Canvas

**Files:**
- Create: `src/components/Hero/ParticleCanvas.jsx`

- [ ] **Step 1: Create src/components/Hero/ParticleCanvas.jsx**

```jsx
import React, { useEffect, useRef } from "react";

const PARTICLE_COUNT = 60;
const PARTICLE_COUNT_MOBILE = 20;
const CONNECTION_DIST = 150;
const MOUSE_DIST = 200;

class Particle {
  constructor(w, h) {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.vx = (Math.random() - 0.5) * 0.4;
    this.vy = (Math.random() - 0.5) * 0.4;
    this.size = Math.random() * 2 + 0.5;
    this.baseSize = this.size;
    this.color = Math.random() > 0.5 ? "174,103,250" : "244,152,103";
    this.alpha = Math.random() * 0.3 + 0.1;
  }

  update(w, h) {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > w) this.vx *= -1;
    if (this.y < 0 || this.y > h) this.vy *= -1;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${this.color},${this.alpha})`;
    ctx.fill();
  }
}

export default function ParticleCanvas() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isMobile = window.innerWidth < 768;
    const count = isMobile ? PARTICLE_COUNT_MOBILE : PARTICLE_COUNT;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from(
      { length: count },
      () => new Particle(canvas.width, canvas.height)
    );

    const onMouse = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    document.addEventListener("mousemove", onMouse);

    // Static render for reduced motion
    if (reducedMotion) {
      particles.forEach((p) => p.draw(ctx));
      return () => {
        window.removeEventListener("resize", resize);
        document.removeEventListener("mousemove", onMouse);
      };
    }

    let raf;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      for (let i = 0; i < particles.length; i++) {
        particles[i].update(canvas.width, canvas.height);
        particles[i].draw(ctx);

        // Particle-to-particle connections
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DIST) {
            const a = (1 - dist / CONNECTION_DIST) * 0.08;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(174,103,250,${a})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }

        // Mouse connections
        const dx = particles[i].x - mx;
        const dy = particles[i].y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_DIST) {
          const a = (1 - dist / MOUSE_DIST) * 0.2;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mx, my);
          ctx.strokeStyle = `rgba(244,152,103,${a})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
          particles[i].size = Math.min(particles[i].size + 0.02, 3);
        } else {
          particles[i].size = Math.max(
            particles[i].size - 0.01,
            particles[i].baseSize
          );
        }
      }

      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Hero/ParticleCanvas.jsx
git commit -m "feat: add ParticleCanvas with cursor interaction and reduced-motion fallback"
```

---

## Task 6: Hero Section

**Files:**
- Create: `src/components/Hero/Hero.jsx`

- [ ] **Step 1: Create src/components/Hero/Hero.jsx**

```jsx
import React from "react";
import { motion } from "framer-motion";
import { personal, social } from "../../data/content";

const lineVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.2, duration: 0.8, ease: "easeOut" },
  }),
};

const fadeIn = (delay) => ({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay, duration: 0.8 } },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative z-[1] min-h-screen flex flex-col justify-center px-8 lg:px-16 max-w-[1400px] mx-auto"
    >
      {/* Ambient glows */}
      <div className="fixed top-[-200px] right-[-100px] w-[600px] h-[600px] rounded-full bg-gradient-start opacity-[0.08] blur-[120px] pointer-events-none z-0" />
      <div className="fixed bottom-[-300px] left-[-200px] w-[600px] h-[600px] rounded-full bg-gradient-end opacity-[0.08] blur-[120px] pointer-events-none z-0" />

      {/* Label */}
      <div className="flex items-center gap-3 mb-8 font-mono text-xs text-text-muted tracking-[3px] uppercase">
        <span className="w-8 h-[1px] bg-gradient-to-r from-gradient-start to-gradient-end" />
        {personal.title}
      </div>

      {/* Title */}
      <h1 className="text-[clamp(56px,8vw,96px)] font-light leading-[1.05] tracking-[-3px] mb-10">
        <motion.span
          className="block"
          custom={0}
          initial="hidden"
          animate="visible"
          variants={lineVariants}
        >
          {personal.tagline}
        </motion.span>
        <motion.span
          className="block"
          custom={1}
          initial="hidden"
          animate="visible"
          variants={lineVariants}
        >
          <strong className="font-extrabold bg-gradient-to-br from-gradient-start to-gradient-end bg-clip-text text-transparent">
            {personal.taglineHighlight}
          </strong>{" "}
          that
        </motion.span>
        <motion.span
          className="block"
          custom={2}
          initial="hidden"
          animate="visible"
          variants={lineVariants}
        >
          people love.
        </motion.span>
      </h1>

      {/* Description */}
      <motion.p
        className="text-[17px] text-text-secondary leading-relaxed max-w-[480px] mb-12"
        variants={fadeIn(0.9)}
        initial="hidden"
        animate="visible"
      >
        {personal.description}
      </motion.p>

      {/* CTAs */}
      <motion.div
        className="flex gap-4 items-center mb-12"
        variants={fadeIn(1.1)}
        initial="hidden"
        animate="visible"
      >
        <a
          href="#projects"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-br from-gradient-start to-gradient-end text-white text-sm font-semibold rounded-xl hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(174,103,250,0.3)] transition-all duration-200"
        >
          View Projects <span>→</span>
        </a>
        <a
          href={personal.cvPath}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3.5 border border-border-subtle text-text-secondary text-sm font-medium rounded-xl bg-surface hover:border-white/25 hover:text-white hover:bg-white/5 transition-all duration-300"
        >
          Download CV
        </a>
      </motion.div>

      {/* Status */}
      <motion.div
        className="flex items-center gap-2 text-xs text-text-muted"
        variants={fadeIn(1.3)}
        initial="hidden"
        animate="visible"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-status-green animate-pulse shadow-[0_0_0_0_rgba(52,211,153,0.4)]" />
        {personal.status}
      </motion.div>

      {/* Hero footer */}
      <motion.div
        className="absolute bottom-10 left-8 right-8 lg:left-16 lg:right-16 flex justify-between items-center"
        variants={fadeIn(1.4)}
        initial="hidden"
        animate="visible"
      >
        <div className="flex gap-7">
          {social.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium tracking-[1.5px] uppercase text-text-muted hover:text-white/70 transition-colors duration-300"
            >
              {s.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2.5 text-[11px] tracking-[2px] uppercase text-white/20">
          <span>Scroll</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-gradient-start/50 to-transparent animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Hero/Hero.jsx
git commit -m "feat: add Hero section with animated text, CTAs, and status indicator"
```

---

## Task 7: About Section

**Files:**
- Create: `src/components/About/About.jsx`

- [ ] **Step 1: Create src/components/About/About.jsx**

```jsx
import React from "react";
import { motion } from "framer-motion";
import { about, timeline } from "../../data/content";

const sectionTag = (
  <div className="flex items-center gap-3 mb-6 font-mono text-[11px] text-text-muted tracking-[3px] uppercase">
    <span className="w-6 h-[1px] bg-gradient-to-r from-gradient-start to-gradient-end" />
    About
  </div>
);

export default function About() {
  return (
    <section id="about" className="max-w-[1200px] mx-auto px-8 lg:px-16 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-16 items-start">
        {/* Left — Bio */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {sectionTag}
          <h2 className="text-[44px] font-light leading-[1.2] tracking-[-1px] mb-6">
            {about.heading}{" "}
            <strong className="font-bold bg-gradient-to-br from-gradient-start to-gradient-end bg-clip-text text-transparent">
              {about.headingHighlight}
            </strong>
            .
          </h2>
          <p className="text-[15px] leading-[1.8] text-text-secondary">
            {about.bio}
          </p>
        </motion.div>

        {/* Right — Timeline */}
        <div className="relative pl-10">
          {/* Gradient line */}
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-gradient-start via-gradient-end to-transparent" />

          {timeline.map((item, i) => (
            <motion.div
              key={item.company}
              className="relative pb-10 last:pb-0 group"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              {/* Dot */}
              <div className="absolute left-[-44px] top-[6px] w-[9px] h-[9px] rounded-full bg-bg-primary border-2 border-gradient-start group-hover:bg-gradient-start group-hover:shadow-[0_0_12px_rgba(174,103,250,0.5)] transition-all duration-300" />

              <div className="font-mono text-xs text-gradient-start/60 mb-2 tracking-[1px]">
                {item.year}
              </div>
              <h4 className="text-base font-semibold text-white/85 mb-2">
                {item.company} — {item.title}
              </h4>
              <p className="text-sm leading-relaxed text-text-secondary">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/About/About.jsx
git commit -m "feat: add About section with bio and animated career timeline"
```

---

## Task 8: Experience Section

**Files:**
- Create: `src/components/shared/TechPill.jsx`
- Create: `src/components/Experience/Experience.jsx`

- [ ] **Step 1: Create src/components/shared/TechPill.jsx**

```jsx
import React from "react";

export default function TechPill({ label }) {
  return (
    <span className="text-[11px] font-mono px-3.5 py-1 bg-gradient-start/[0.08] border border-gradient-start/[0.15] rounded-full text-gradient-start/70">
      {label}
    </span>
  );
}
```

- [ ] **Step 2: Create src/components/Experience/Experience.jsx**

```jsx
import React from "react";
import { motion } from "framer-motion";
import { experience } from "../../data/content";
import TechPill from "../shared/TechPill";

function ExperienceCard({ item, index }) {
  if (item.featured) {
    return (
      <motion.div
        className="col-span-full grid grid-cols-1 lg:grid-cols-2 gap-10 p-9 bg-surface border border-border-subtle rounded-[20px] relative overflow-hidden hover:border-gradient-start/[0.15] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all duration-400 before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[2px] before:bg-gradient-to-r before:from-gradient-start before:to-gradient-end before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-400"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <div className="flex justify-between items-start mb-5">
            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-lg font-bold text-text-muted">
              {item.initials}
            </div>
            <span className="font-mono text-[11px] text-gradient-start/60 px-3 py-1.5 bg-gradient-start/[0.06] rounded-full">
              {item.year}
            </span>
          </div>
          <h3 className="text-xl font-semibold text-white/90 mb-1">
            {item.company}
          </h3>
          <div className="text-[13px] text-text-muted mb-4">{item.role}</div>
          <p className="text-sm leading-relaxed text-text-secondary mb-5">
            {item.description}
          </p>
          <div className="flex flex-wrap gap-1.5 mb-5">
            {item.tech.map((t) => (
              <TechPill key={t} label={t} />
            ))}
          </div>
          {item.link && (
            <a
              href={item.link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[13px] text-gradient-start/60 hover:text-gradient-start transition-colors"
            >
              Visit {item.link.label} →
            </a>
          )}
        </div>
        <div className="flex items-center justify-center">
          <div className="w-full h-[200px] bg-gradient-to-br from-gradient-start/[0.06] to-gradient-end/[0.06] rounded-2xl border border-border-subtle flex items-center justify-center">
            <span className="text-[13px] text-white/15">Site preview</span>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="p-9 bg-surface border border-border-subtle rounded-[20px] relative overflow-hidden hover:border-gradient-start/[0.15] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all duration-400 before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[2px] before:bg-gradient-to-r before:from-gradient-start before:to-gradient-end before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-400"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex justify-between items-start mb-5">
        <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-lg font-bold text-text-muted">
          {item.initials}
        </div>
        <span className="font-mono text-[11px] text-gradient-start/60 px-3 py-1.5 bg-gradient-start/[0.06] rounded-full">
          {item.year}
        </span>
      </div>
      <h3 className="text-xl font-semibold text-white/90 mb-1">
        {item.company}
      </h3>
      <div className="text-[13px] text-text-muted mb-4">{item.role}</div>
      <p className="text-sm leading-relaxed text-text-secondary mb-5">
        {item.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {item.tech.map((t) => (
          <TechPill key={t} label={t} />
        ))}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const featured = experience.filter((e) => e.featured);
  const rest = experience.filter((e) => !e.featured);

  return (
    <section
      id="experience"
      className="max-w-[1200px] mx-auto px-8 lg:px-16 py-24"
    >
      <div className="flex items-center gap-3 mb-6 font-mono text-[11px] text-text-muted tracking-[3px] uppercase">
        <span className="w-6 h-[1px] bg-gradient-to-r from-gradient-start to-gradient-end" />
        Experience
      </div>
      <h2 className="text-[44px] font-light leading-[1.15] tracking-[-1.5px] mb-14">
        Where I've{" "}
        <strong className="font-bold bg-gradient-to-br from-gradient-start to-gradient-end bg-clip-text text-transparent">
          built things
        </strong>
        .
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {featured.map((item, i) => (
          <ExperienceCard key={item.company} item={item} index={i} />
        ))}
        {rest.map((item, i) => (
          <ExperienceCard key={item.company} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/shared/TechPill.jsx src/components/Experience/Experience.jsx
git commit -m "feat: add shared TechPill and Experience section with featured card and grid layout"
```

---

## Task 9: Projects Section

**Files:**
- Create: `src/components/Projects/Projects.jsx`

- [ ] **Step 1: Create src/components/Projects/Projects.jsx**

```jsx
import React from "react";
import { motion } from "framer-motion";
import { projects } from "../../data/content";
import TechPill from "../shared/TechPill";

function BrowserFrame({ label }) {
  return (
    <div className="w-[85%] bg-[#0a0a12] rounded-xl overflow-hidden border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.4)] group-hover:scale-[1.03] transition-transform duration-400">
      <div className="flex gap-1.5 px-4 py-3 bg-white/[0.03] border-b border-white/[0.06]">
        <span className="w-2 h-2 rounded-full bg-white/10" />
        <span className="w-2 h-2 rounded-full bg-white/10" />
        <span className="w-2 h-2 rounded-full bg-white/10" />
      </div>
      <div className="h-[180px] flex items-center justify-center text-white/15 text-[13px]">
        {label}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-[1200px] mx-auto px-8 lg:px-16 py-24"
    >
      <div className="flex items-center gap-3 mb-6 font-mono text-[11px] text-text-muted tracking-[3px] uppercase">
        <span className="w-6 h-[1px] bg-gradient-to-r from-gradient-start to-gradient-end" />
        Projects
      </div>
      <h2 className="text-[44px] font-light leading-[1.15] tracking-[-1.5px] mb-14">
        Things I've{" "}
        <strong className="font-bold bg-gradient-to-br from-gradient-start to-gradient-end bg-clip-text text-transparent">
          shipped
        </strong>
        .
      </h2>

      <div className="flex flex-col gap-8">
        {projects.map((project, i) => {
          const isEven = i % 2 === 0;
          return (
            <motion.div
              key={project.number}
              className="group grid grid-cols-1 lg:grid-cols-2 bg-surface border border-border-subtle rounded-3xl overflow-hidden min-h-[360px] hover:border-gradient-start/[0.15] hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-400"
              initial={{ opacity: 0, x: isEven ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
            >
              {/* Preview — order flips on even/odd */}
              <div
                className={`relative overflow-hidden bg-gradient-to-br from-gradient-start/[0.04] to-gradient-end/[0.04] flex items-center justify-center min-h-[360px] ${
                  !isEven ? "lg:order-2" : ""
                }`}
              >
                <BrowserFrame label={project.name} />
              </div>

              {/* Info */}
              <div
                className={`p-10 lg:p-12 flex flex-col justify-center ${
                  !isEven ? "lg:order-1" : ""
                }`}
              >
                <div className="font-mono text-xs text-gradient-start/40 mb-4 tracking-[2px]">
                  {project.number}
                </div>
                <h3 className="text-[28px] font-bold text-white/95 mb-2">
                  {project.name}
                </h3>
                <div className="text-[13px] font-medium text-gradient-end/70 mb-5">
                  {project.type}
                </div>
                <p className="text-[15px] leading-relaxed text-text-secondary mb-7">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-7">
                  {project.tech.map((t) => (
                    <TechPill key={t} label={t} />
                  ))}
                </div>
                <div className="flex gap-5">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] text-text-secondary hover:text-gradient-start transition-colors flex items-center gap-1.5"
                    >
                      {link.label} ↗
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Projects/Projects.jsx
git commit -m "feat: add Projects section with alternating stacked showcase cards"
```

---

## Task 10: Skills Section

**Files:**
- Create: `src/components/Skills/Skills.jsx`

- [ ] **Step 1: Create src/components/Skills/Skills.jsx**

```jsx
import React from "react";
import { motion } from "framer-motion";
import { skillRows } from "../../data/content";

function MarqueeRow({ row }) {
  const items = [...row.items, ...row.items]; // Duplicate for seamless loop
  const animClass =
    row.direction === "left" ? "animate-marquee" : "animate-marquee-reverse";

  return (
    <div className="mb-12 last:mb-0">
      <div className="font-mono text-xs text-text-muted tracking-[2px] uppercase mb-5">
        {row.label}
      </div>
      <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className={`flex gap-4 w-max hover:[animation-play-state:paused] ${animClass}`}>
          {items.map((item, i) => (
            <div
              key={`${item.abbr}-${i}`}
              className="flex items-center gap-3 px-7 py-4 bg-surface border border-border-subtle rounded-2xl whitespace-nowrap hover:border-gradient-start/20 hover:bg-gradient-start/[0.04] transition-all duration-300 shrink-0"
            >
              <div className="w-8 h-8 bg-white/[0.04] rounded-lg flex items-center justify-center text-[10px] font-mono text-gradient-start/50">
                {item.abbr}
              </div>
              <span className="text-sm font-medium text-white/70">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="max-w-[1200px] mx-auto px-8 lg:px-16 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-6 font-mono text-[11px] text-text-muted tracking-[3px] uppercase">
          <span className="w-6 h-[1px] bg-gradient-to-r from-gradient-start to-gradient-end" />
          Skills
        </div>
        <h2 className="text-[44px] font-light leading-[1.15] tracking-[-1.5px] mb-14">
          My{" "}
          <strong className="font-bold bg-gradient-to-br from-gradient-start to-gradient-end bg-clip-text text-transparent">
            toolkit
          </strong>
          .
        </h2>

        {skillRows.map((row) => (
          <MarqueeRow key={row.label} row={row} />
        ))}
      </motion.div>
    </section>
  );
}
```

- [ ] **Step 2: Add marquee keyframes to index.css**

Append to the end of `src/index.css`:

```css
/* Marquee animations */
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
@keyframes marquee-reverse {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}

@utility animate-marquee {
  animation: marquee 30s linear infinite;
}
@utility animate-marquee-reverse {
  animation: marquee-reverse 35s linear infinite;
}

/* Marquee reduced-motion fallback: static wrapped grid */
@media (prefers-reduced-motion: reduce) {
  .animate-marquee,
  .animate-marquee-reverse {
    animation: none !important;
    flex-wrap: wrap;
    width: auto;
    gap: 12px;
  }
}
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Skills/Skills.jsx src/index.css
git commit -m "feat: add Skills section with infinite scroll marquee"
```

---

## Task 11: Footer Section

**Files:**
- Create: `src/components/Footer/Footer.jsx`

- [ ] **Step 1: Create src/components/Footer/Footer.jsx**

```jsx
import React from "react";
import { social } from "../../data/content";

export default function Footer() {
  return (
    <footer className="max-w-[1200px] mx-auto px-8 lg:px-16 py-12 border-t border-border-subtle">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
        <p className="text-xs text-text-muted">
          © {new Date().getFullYear()} Abel Ghebrezadik
        </p>
        <div className="flex gap-6">
          {social.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium tracking-[1px] uppercase text-text-muted hover:text-white/70 transition-colors duration-300"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Footer/Footer.jsx
git commit -m "feat: add Footer component with social links"
```

---

## Task 12: Wire Everything in App.jsx

**Files:**
- Rewrite: `src/App.js` → `src/App.jsx`
- Delete: `src/App.css`

- [ ] **Step 1: Rename and rewrite App.js → App.jsx**

```bash
cd C:/Users/Abel/React/ag-cv && git mv src/App.js src/App.jsx
```

Then replace the contents of `src/App.jsx`:

```jsx
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import ParticleCanvas from "./components/Hero/ParticleCanvas";
import CustomCursor from "./components/Hero/CustomCursor";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      <CustomCursor />
      <ParticleCanvas />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Delete src/App.css**

```bash
rm src/App.css
```

- [ ] **Step 3: Verify the app renders**

```bash
cd C:/Users/Abel/React/ag-cv && npm start
```

Expected: Full site renders with all sections visible, particles animating, scroll animations triggering as you scroll down. No console errors.

- [ ] **Step 4: Commit**

```bash
git add src/App.jsx
git rm src/App.css 2>/dev/null; git add -u src/App.css
git commit -m "feat: wire all sections in App.jsx and remove old App.css"
```

---

## Task 13: Clean Up Old Code

**Files:**
- Delete: `src/components/header/`
- Delete: `src/components/experience/`
- Delete: `src/components/skill/`
- Delete: `src/components/import.js`
- Delete: `src/components/index.js`
- Delete: `src/containers/`

- [ ] **Step 1: Delete old component and container directories**

```bash
cd C:/Users/Abel/React/ag-cv
rm -rf src/components/header src/components/experience src/components/skill src/components/import.js src/components/index.js src/containers src/pages
rm -f src/App.test.js src/logo.svg src/reportWebVitals.js src/setupTests.js
```

Also remove the `reportWebVitals()` call and import from `src/index.js` — it references the deleted file.

- [ ] **Step 2: Verify app still runs**

```bash
npm start
```

Expected: App renders without errors. All old code was already replaced in Task 12.

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "chore: remove old component and container directories"
```

---

## Task 14: Final Verification and Polish

- [ ] **Step 1: Test all sections render**

Open `http://localhost:3000` and scroll through the entire page. Verify:
- Navbar shows and has backdrop blur on scroll
- Hero particles animate and connect to cursor
- Custom cursor follows mouse smoothly
- Hero text staggers in on load
- About section has timeline with glowing dots on hover
- Experience cards lift on hover with gradient top border
- Projects cards alternate left/right with browser frames
- Skills marquee scrolls continuously in opposite directions
- Footer shows at bottom

- [ ] **Step 2: Test mobile hamburger**

Resize browser to < 768px width. Verify:
- Hamburger icon appears
- Menu opens/closes
- Links scroll to sections and close menu

- [ ] **Step 3: Test reduced motion**

In browser devtools, enable `prefers-reduced-motion: reduce`. Verify:
- Particles are static
- Custom cursor disappears
- Marquee stops scrolling
- No scroll animations (elements visible immediately)

- [ ] **Step 4: Final commit**

```bash
git add -A
git commit -m "feat: complete portfolio website redesign"
```
