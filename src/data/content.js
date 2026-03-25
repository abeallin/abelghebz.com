// src/data/content.js

export const personal = {
  name: "Abel Ghebrezadik",
  initials: "AG",
  title: "Lead/Senior Software Engineer",
  tagline: "I build",
  taglineHighlight: "products",
  description:
    "Lead/Senior Software Engineer with 9 years' experience across Tech: Finance, Property, Health, and Gambling. Self-taught developer with a Mathematics degree. Proven track record in leading greenfield projects, resolving legacy tech debt, and deploying scalable backend systems.",
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
  bio: "Lead/Senior Software Engineer based in London with 9 years' experience across Finance, Property, Health, and Gambling. Self-taught developer with a Mathematics degree and a strong analytical mindset. Proven track record in leading greenfield projects, resolving legacy tech debt, and deploying scalable backend systems using .NET, AWS, and modern ORMs.",
};

export const timeline = [
  {
    year: "2025 — Present",
    company: "Arena Entertainment",
    title: "Full Stack Developer",
    description:
      "Crypto gambling platform. Optimising TypeScript performance and rebuilding admin platform in C# with Kafka, gRPC, and DDD.",
  },
  {
    year: "Apr — Jul 2025",
    company: "Betmate",
    title: "Lead/Senior Software Engineer",
    description:
      "Multiplayer sports betting game with £500k jackpot. Scaled to 300,000 users on AWS Lambda serverless architecture.",
  },
  {
    year: "Dec 2024 — Feb 2025",
    company: "NHS England",
    title: "Software Engineer (Contract)",
    description:
      "Python healthcare automation tool for GP practices nationwide. Contract outside IR35.",
  },
  {
    year: "Apr — Jul 2024",
    company: "Fvtvre",
    title: "Senior Software Engineer",
    description:
      ".NET 8 microservices and Vue.js for a KSA-based PropTech startup, deployed to EJAR.",
  },
  {
    year: "Aug 2021 — Apr 2024",
    company: "SalaryFinance",
    title: "Senior Software Engineer",
    description:
      "Technical lead on critical project. Resolved 500+ prod issues in 6 months, 80% faster than peers.",
  },
  {
    year: "May 2018 — Apr 2021",
    company: "Optal (acquired by Wex)",
    title: "Senior Software Engineer",
    description:
      "B2B e-card payments. Millions of daily transactions for Expedia and Booking.com.",
  },
  {
    year: "May 2016 — May 2018",
    company: "FDM Group → LME",
    title: "IT Consultant",
    description:
      "Graduate scheme at London Metal Exchange. MIFID II regulatory reporting APIs in C# .NET.",
  },
];

export const experience = [
  {
    company: "Arena Entertainment",
    initials: "AE",
    role: "Full Stack Developer",
    year: "Dec 2025 — Present",
    description:
      "Crypto gambling platform. Refactoring TypeScript adhering to big O notation. 50% improvement in Snowflake and MySQL queries. Reduced API latency by up to 8s with Lambda warm-up pings and concurrency (94% hit rate). Enhanced Redis with batch pipelines. Rebuilt data tables with keyset/cursor pagination. Created automation app integrating Playwright, Bitbucket, GitHub, and Jira MCPs for automated UI testing. Building new full-stack app in React and .NET with DDD, CQRS via Kafka, and gRPC interservice comms.",
    tech: ["C# / .NET", "TypeScript", "React", "Snowflake", "Redis", "Kafka", "gRPC", "AWS Lambda"],
    link: { label: "arenaentertainment.com", url: "https://arenaentertainment.com/" },
    featured: true,
  },
  {
    company: "Betmate",
    initials: "BM",
    role: "Lead/Senior Software Engineer",
    year: "Apr 2025 — Jul 2025",
    description:
      "Built a multiplayer game for a leading sports betting company with a £500k jackpot, scaled to 300,000 users. Designed high-performance C# backend on AWS Lambda (serverless). Integrated CockroachDB with Dapper ORM. Built event-driven architecture using SNS and SQS. Implemented CI/CD pipelines with API Gateway, Lambda, and CloudFormation.",
    tech: ["C#", "AWS Lambda", "CockroachDB", "Dapper", "SNS/SQS", "CloudFormation"],
    link: { label: "betmate.app", url: "https://www.betmate.app/" },
  },
  {
    company: "NHS England",
    initials: "NH",
    role: "Software Engineer (Contract)",
    year: "Dec 2024 — Feb 2025",
    description:
      "Delivered a Python desktop application using Selenium to automate features in a 3rd-party healthcare application used nationwide by GPs. Automated bulk creation and deletion of templates, removing significant time and labour inefficiency.",
    tech: ["Python", "Selenium", "Tkinter", "CSV"],
    link: { label: "england.nhs.uk", url: "https://www.england.nhs.uk/" },
  },
  {
    company: "Fvtvre",
    initials: "FV",
    role: "Senior Software Engineer",
    year: "Apr 2024 — Jul 2024",
    description:
      "Developed a .NET 8 microservice API and Vue.js frontend for a KSA-based PropTech startup. Built a property management product rolled out to EJAR, the Saudi department of rent, enhancing their inventory assessment process.",
    tech: [".NET 8", "Vue.js", "Microservices", "REST APIs"],
  },
  {
    company: "SalaryFinance",
    initials: "SF",
    role: "Senior Software Engineer",
    year: "Aug 2021 — Apr 2024",
    description:
      "Technical lead on Project Tahiti — saved the company millions in fines. Resolved 500+ production issues in 6 months, 80% faster than other engineers. Built front-end and back-end features, mentored juniors, stepped into Lead Developer duties. Involved in debt sale implementation and presenting to external clients.",
    tech: ["C# / .NET 6", "React", "MSSQL", "Microservices"],
    link: { label: "salaryfinance.com", url: "https://www.salaryfinance.com/uk/" },
  },
  {
    company: "Optal (acquired by Wex)",
    initials: "OP",
    role: "Senior Software Engineer",
    year: "May 2018 — Apr 2021",
    description:
      "Developed desktop applications for accounts management. Monitored millions of daily transactions from Expedia and Booking.com, reconciled with Ixaris and MasterCard data. Settled across 50+ bank accounts in multiple currencies across 10 international entities.",
    tech: ["C# / .NET", "WinForms", "WPF", "MSSQL"],
    link: { label: "wexinc.com", url: "https://www.wexinc.com/en-gb/" },
  },
  {
    company: "FDM Group → LME",
    initials: "FD",
    role: "IT Consultant",
    year: "May 2016 — May 2018",
    description:
      "Graduate scheme contracted to London Metal Exchange. Built functionality in C++, Java, and C#. Created a SOAP API for internal data retrieval. Developed MIFID II regulatory reporting APIs. Scripted in Perl, PowerShell, and Batch.",
    tech: ["C# / .NET", "C++", "Java", "Perl"],
    link: { label: "fdmgroup.com", url: "https://www.fdmgroup.com/" },
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
    name: "Diaspora Dreams",
    type: "Art Dealership",
    description:
      "An online art dealership startup. Built as a side venture to showcase and sell art.",
    tech: ["React", "JavaScript", "CSS"],
    links: [
      { label: "Live Site", url: "https://diasporadreams.co.uk" },
    ],
  },
  {
    number: "04",
    name: "GPFlow",
    type: "Healthcare Automation Tool",
    description:
      "An Electron desktop application that automates Accurx template management for NHS England. Bulk create and delete templates via CSV import with a clean GUI.",
    tech: ["Electron", "JavaScript", "Selenium", "CSV"],
    links: [
      { label: "GitHub", url: "https://github.com/abeallin/GPFlow" },
    ],
  },
];

export const skillRows = [
  {
    label: "Languages",
    direction: "left",
    items: [
      { abbr: "C#", name: "C#" },
      { abbr: "JV", name: "Java" },
      { abbr: "PY", name: "Python" },
      { abbr: "C+", name: "C++" },
      { abbr: "JS", name: "JavaScript" },
      { abbr: "TS", name: "TypeScript" },
    ],
  },
  {
    label: "Web & Mobile Frameworks",
    direction: "right",
    items: [
      { abbr: ".N", name: ".NET Core/Framework" },
      { abbr: "Re", name: "React" },
      { abbr: "Vu", name: "Vue.js" },
      { abbr: "No", name: "Node.js" },
      { abbr: "Bz", name: "Blazor" },
      { abbr: "Nx", name: "Next.js" },
      { abbr: "RN", name: "React Native" },
      { abbr: "Fl", name: "Flutter" },
      { abbr: "PW", name: "PWA" },
    ],
  },
  {
    label: "Databases",
    direction: "left",
    items: [
      { abbr: "MS", name: "MSSQL" },
      { abbr: "My", name: "MySQL" },
      { abbr: "PG", name: "PostgreSQL" },
      { abbr: "Mg", name: "MongoDB" },
      { abbr: "SF", name: "Snowflake" },
      { abbr: "CR", name: "CockroachDB" },
    ],
  },
  {
    label: "Cloud, DevOps & Tools",
    direction: "right",
    items: [
      { abbr: "AW", name: "AWS" },
      { abbr: "TF", name: "Terraform" },
      { abbr: "Do", name: "Docker" },
      { abbr: "K8", name: "Kubernetes" },
      { abbr: "GH", name: "GitHub Actions" },
      { abbr: "Ar", name: "ArgoCD" },
      { abbr: "Rd", name: "Redis" },
      { abbr: "Ka", name: "Kafka" },
      { abbr: "gR", name: "gRPC" },
      { abbr: "GQ", name: "GraphQL" },
      { abbr: "SR", name: "SignalR" },
    ],
  },
  {
    label: "AI & Practices",
    direction: "left",
    items: [
      { abbr: "CL", name: "Claude AI" },
      { abbr: "GP", name: "ChatGPT" },
      { abbr: "CP", name: "GitHub Copilot" },
      { abbr: "CU", name: "Cursor" },
      { abbr: "LM", name: "LLM" },
      { abbr: "PE", name: "Prompt Engineering" },
      { abbr: "μS", name: "Microservices" },
      { abbr: "Dp", name: "Dapper" },
      { abbr: "Ag", name: "Agile" },
    ],
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
];
