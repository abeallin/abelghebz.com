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
