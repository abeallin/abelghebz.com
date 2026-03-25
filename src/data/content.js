// src/data/content.js

export const personal = {
  name: "Abel Ghebrezadik",
  initials: "AG",
  title: "Senior Software Engineer",
  tagline: "I build",
  taglineHighlight: "products",
  description:
    "Full-stack engineer with 7+ years building products across fintech, enterprise, and startups. From system architecture to pixel-perfect frontends.",
  cvPath: "/assets/abel_ghebrezadik_cv.pdf",
};

export const social = [
  { label: "GitHub", url: "https://github.com/abeallin", icon: "github" },
  { label: "LinkedIn", url: "https://linkedin.com/in/abel-ghebrezadik", icon: "linkedin" },
  { label: "Email", url: "mailto:abel_g@hotmail.co.uk", icon: "email" },
  { label: "Phone", url: "tel:07527841324", icon: "phone" },
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
      "Wedding website platform with RSVP, gift registry, and guest broadcasts. Next.js, TypeScript, and AWS.",
  },
  {
    year: "2023 — Present",
    company: "CabEazy",
    title: "Founder & Developer",
    description:
      "The UK's first driver-owned ride-hailing platform. Operating in 35+ cities with a fairer commission model.",
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
      "Wedding website platform with RSVP management, gift registry, guest broadcasts, and customisable templates. One-time £50 pricing — no subscriptions.",
    tech: ["TypeScript", "Next.js", "React", "PostgreSQL", "AWS"],
    link: { label: "ithinkshewifey.com", url: "https://ithinkshewifey.com" },
    featured: true,
  },
  {
    company: "CabEazy",
    initials: "CE",
    role: "Founder & Developer",
    year: "2023 — Present",
    description:
      "The UK's first driver-owned ride-hailing platform. 10% commission capped at £149/month — after which rides are free. Operating in 35+ UK cities.",
    tech: ["React", "Node.js", "AWS", "PostgreSQL"],
    link: { label: "cabeazy.com", url: "https://cabeazy.com" },
  },
  {
    company: "Salary Finance",
    initials: "SF",
    role: "Senior Software Engineer",
    year: "2022 — 2024",
    description:
      "Financial wellbeing platform serving hundreds of employers. Led feature development across .NET microservices and React frontends.",
    tech: ["C# / .NET", "React", "MSSQL", "Azure"],
  },
  {
    company: "WEX / Optal",
    initials: "WX",
    role: "Software Engineer",
    year: "2020 — 2022",
    description:
      "Global payments and travel fintech. High-volume transaction processing and virtual card management systems.",
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
    tech: ["TypeScript", "Next.js", "React", "PostgreSQL", "AWS"],
    links: [
      { label: "Live Site", url: "https://ithinkshewifey.com" },
    ],
  },
  {
    number: "02",
    name: "CabEazy",
    type: "Ride-Hailing Platform",
    description:
      "The UK's first driver-owned ride-hailing platform. An alternative to Uber with a 10% commission capped at £149/month — after which rides are free. Operating in 35+ UK cities.",
    tech: ["React", "Node.js", "AWS", "PostgreSQL"],
    links: [
      { label: "Live Site", url: "https://cabeazy.com" },
    ],
  },
  {
    number: "03",
    name: "GPFlow",
    type: "Healthcare Automation Tool",
    description:
      "An Electron desktop application that automates Accurx template management for NHS England. Bulk create and delete templates via CSV import with a clean GUI.",
    tech: ["Electron", "JavaScript", "Selenium", "CSV"],
    links: [
      { label: "GitHub", url: "https://github.com/abeallin/GPFlow" },
    ],
  },
  {
    number: "04",
    name: "Pass the Meerkat",
    type: "Interactive Web Game",
    description:
      "A fun React-based web game built as a creative side project.",
    tech: ["React", "JavaScript", "CSS"],
    links: [
      { label: "Live Demo", url: "https://pass-the-meerkat.vercel.app" },
    ],
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
      { abbr: "TS", name: "TypeScript" },
      { abbr: "Re", name: "React" },
      { abbr: "Nx", name: "Next.js" },
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
      { abbr: "PG", name: "PostgreSQL" },
      { abbr: "MS", name: "MSSQL" },
      { abbr: "My", name: "MySQL" },
      { abbr: "Mg", name: "MongoDB" },
      { abbr: "Az", name: "Azure" },
      { abbr: "El", name: "Electron" },
    ],
  },
  {
    label: "AI & Tools",
    direction: "left",
    items: [
      { abbr: "CL", name: "Claude AI" },
      { abbr: "GP", name: "ChatGPT" },
      { abbr: "CP", name: "GitHub Copilot" },
      { abbr: "CU", name: "Cursor" },
    ],
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
];
