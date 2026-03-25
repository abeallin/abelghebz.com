// src/data/content.js

export const personal = {
  name: "Abel Ghebrezadik",
  initials: "AG",
  title: "Senior Software Engineer",
  tagline: "I build",
  taglineHighlight: "products",
  description:
    "Senior Software Engineer with 9 years of commercial experience across FinTech, PropTech, and HealthTech. Self-taught developer and Mathematics graduate — analytical, methodical, and algorithmic by nature.",
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
  headingHighlight: "9+ years",
  bio: "Senior Software Engineer based in London with 9 years of commercial experience across FinTech, PropTech, and HealthTech. Self-taught developer and Mathematics graduate — analytical, methodical, and algorithmic by nature.",
};

export const timeline = [
  {
    year: "2024 — Present",
    company: "NHS England",
    title: "Software Engineer (Contract)",
    description:
      "Python healthcare automation tool for GP practices nationwide. Contracted outside IR35.",
  },
  {
    year: "2024",
    company: "Fvtvre",
    title: "Senior Software Engineer",
    description:
      ".NET 8 microservices and Vue.js for a KSA-based PropTech startup, deployed to EJAR.",
  },
  {
    year: "2021 — 2024",
    company: "SalaryFinance",
    title: "Senior Software Engineer",
    description:
      ".NET 6 microservices platform. Technical lead on critical project. Resolved 500+ prod issues in 6 months.",
  },
  {
    year: "2018 — 2021",
    company: "Optal → Wex",
    title: "Software Engineer",
    description:
      ".NET Framework monolith. B2B e-card payments processing millions of daily transactions for Expedia and Booking.com.",
  },
  {
    year: "2016 — 2018",
    company: "FDM Group → LME",
    title: "IT Consultant",
    description:
      "Graduate scheme contracted to London Metal Exchange. Built MIFID II regulatory reporting APIs in C# .NET.",
  },
];

export const experience = [
  {
    company: "NHS England",
    initials: "NH",
    role: "Software Engineer (Contract)",
    year: "Dec 2024 — Feb 2025",
    description:
      "Delivered a Python desktop application using Selenium to automate features in a 3rd-party healthcare application used nationwide by GPs. Automated bulk creation and deletion of templates, removing a significant time and labour inefficiency.",
    tech: ["Python", "Selenium", "Tkinter", "CSV"],
  },
  {
    company: "Fvtvre",
    initials: "FV",
    role: "Senior Software Engineer",
    year: "Apr 2024 — Jul 2024",
    description:
      "Developed a .NET 8 microservice API and Vue.js frontend for a KSA-based PropTech startup. Built a property management product rolled out to EJAR, the Saudi department of rent, to enhance their inventory assessment process.",
    tech: [".NET 8", "Vue.js", "Microservices", "REST APIs"],
  },
  {
    company: "SalaryFinance",
    initials: "SF",
    role: "Senior Software Engineer",
    year: "Aug 2021 — Apr 2024",
    description:
      "Technical lead on a critical project that saved the company millions in fines. Resolved 500+ production issues in 6 months — 80% faster than other engineers. Built front-end and back-end features, mentored juniors, and stepped into Lead Developer duties.",
    tech: ["C# / .NET 6", "React", "MSSQL", "Microservices"],
    featured: true,
  },
  {
    company: "Optal → Wex",
    initials: "OP",
    role: "Software Engineer",
    year: "May 2018 — Apr 2021",
    description:
      "Developed WinForms/WPF desktop applications for an accounts management system. Monitored millions of daily transactions from Expedia and Booking.com, reconciled with Ixaris and MasterCard data, and settled across 50+ bank accounts in multiple currencies.",
    tech: ["C# / .NET", "WinForms", "WPF", "MSSQL"],
  },
  {
    company: "FDM Group → LME",
    initials: "FD",
    role: "IT Consultant",
    year: "May 2016 — May 2018",
    description:
      "Graduate scheme contracted to London Metal Exchange. Built new functionality in C++, Java, and C#. Created a SOAP API for internal data retrieval. Developed MIFID II regulatory reporting APIs ensuring compliance with financial standards.",
    tech: ["C# / .NET", "C++", "Java", "Perl"],
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
      { abbr: "C#", name: "C# .NET" },
      { abbr: "PY", name: "Python" },
      { abbr: "C+", name: "C++" },
      { abbr: "JV", name: "Java" },
      { abbr: "JS", name: "JavaScript" },
      { abbr: "TS", name: "TypeScript" },
      { abbr: "Re", name: "React" },
      { abbr: "Nx", name: "Next.js" },
      { abbr: "Vu", name: "Vue.js" },
      { abbr: "No", name: "Node.js" },
      { abbr: "GO", name: "Go" },
      { abbr: "Fl", name: "Flutter" },
      { abbr: "WF", name: "WinForms" },
      { abbr: "WP", name: "WPF" },
    ],
  },
  {
    label: "Infrastructure & Data",
    direction: "right",
    items: [
      { abbr: "AW", name: "AWS" },
      { abbr: "MS", name: "MSSQL" },
      { abbr: "My", name: "MySQL" },
      { abbr: "PG", name: "PostgreSQL" },
      { abbr: "NQ", name: "NoSQL" },
      { abbr: "μS", name: "Microservices" },
      { abbr: "AP", name: "REST APIs" },
      { abbr: "CI", name: "CI/CD" },
      { abbr: "UT", name: "Unit Testing" },
      { abbr: "Ag", name: "Agile" },
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
