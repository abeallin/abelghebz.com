// src/data/content.js

export const personal = {
  name: "Abel Ghebrezadik",
  initials: "AG",
  title: "Lead/Senior Software Engineer",
  tagline: "I build",
  taglineHighlight: "products",
  description:
    "Lead/Senior Software Engineer with 10 years' experience across Tech: Finance, Property, Health, and Gambling. Self-taught developer with a Mathematics degree. Proven track record in leading greenfield projects, resolving legacy tech debt, and deploying scalable backend systems.",
  cvPath: "/assets/abel_ghebrezadik_cv.pdf",
};

export const social = [
  { label: "GitHub", url: "https://github.com/abeallin", icon: "github" },
  { label: "LinkedIn", url: "https://linkedin.com/in/abel-ghebrezadik", icon: "linkedin" },
  { label: "Gmail", url: "mailto:2percentcargoltd@gmail.com", icon: "gmail" },
  { label: "Outlook", url: "mailto:abel_g@hotmail.co.uk", icon: "outlook" },
  { label: "Phone", url: "tel:+447527841324", icon: "phone" },
];

export const about = {
  heading: "Building for",
  headingHighlight: "10+ years",
  bio: "Lead/Senior Software Engineer based in London with 10 years' experience across Finance, Property, Health, and Gambling.",
};

export const timeline = [
  {
    year: "2025 — Present",
    company: "Arena Entertainment",
    title: "Full Stack Developer",
    description:
      "Crypto gambling platform.",
  },
  {
    year: "Apr — Jul 2025",
    company: "Betmate",
    title: "Lead/Senior Software Engineer",
    description:
      "Multiplayer sports betting platform.",
  },
  {
    year: "Dec 2024 — Feb 2025",
    company: "NHS England",
    title: "Full Stack Software Engineer",
    description:
      "National healthcare service.",
  },
  {
    year: "Apr — Jul 2024",
    company: "Fvtvre",
    title: "Senior Software Engineer",
    description:
      "KSA-based PropTech startup.",
  },
  {
    year: "Aug 2021 — Apr 2024",
    company: "SalaryFinance",
    title: "Senior Software Engineer",
    description:
      "Credit facility platform.",
  },
  {
    year: "May 2018 — Apr 2021",
    company: "Optal (acquired by Wex)",
    title: "Senior/Mid-Level Software Engineer",
    description:
      "e-Payments platform.",
  },
  {
    year: "May 2016 — May 2018",
    company: "London Metal Exchange",
    title: "Junior Software Engineer (via FDM Group)",
    description:
      "International financial services.",
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
    company: "London Metal Exchange (via FDM Group)",
    initials: "LME",
    role: "IT Consultant at FDM Group",
    year: "May 2016 — May 2018",
    description:
      "Graduate scheme, contracted to London Metal Exchange. Built functionality in C++, Java, and C#. Created a SOAP API for internal data retrieval. Developed MIFID II regulatory reporting APIs. Scripted in Perl, PowerShell, and Batch.",
    tech: ["C# / .NET", "C++", "Java", "Perl"],
    link: { label: "fdmgroup.com", url: "https://www.fdmgroup.com/" },
  },
];

export const projects = [
  {
    number: "01",
    name: "whenwillyoumarry.com",
    type: "Wedding Website Platform",
    description:
      "A fully featured wedding website builder with RSVP management, gift registry, guest communication, and beautiful customisable templates.",
    tech: ["TypeScript", "Next.js", "React", "PostgreSQL", "AWS"],
    screenshot: "/screenshots/01.png",
    links: [
      { label: "Live Site", url: "https://whenwillyoumarry.com" },
    ],
  },
  {
    number: "02",
    name: "GPFlow",
    type: "Healthcare Automation Tool",
    description:
      "An Electron desktop application that automates Accurx template management for NHS England. Bulk create and delete templates via CSV import with a clean GUI.",
    tech: ["Electron", "JavaScript", "Selenium", "CSV"],
    screenshot: "/screenshots/02.png",
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
      { abbr: "GO", name: "Go" },
      { abbr: "PL", name: "Perl" },
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
      { abbr: "EX", name: "Expo" },
      { abbr: "WF", name: "WinForms" },
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
    label: "Cloud & Hosting",
    direction: "right",
    items: [
      { abbr: "AW", name: "AWS" },
      { abbr: "Az", name: "Azure" },
      { abbr: "Vc", name: "Vercel" },
      { abbr: "Rw", name: "Railway" },
      { abbr: "CF", name: "Cloudflare" },
    ],
  },
  {
    label: "DevOps & Infrastructure",
    direction: "left",
    items: [
      { abbr: "Do", name: "Docker" },
      { abbr: "TF", name: "Terraform" },
      { abbr: "GH", name: "GitHub Actions" },
      { abbr: "Ar", name: "ArgoCD" },
    ],
  },
  {
    label: "Protocols",
    direction: "right",
    items: [
      { abbr: "gR", name: "gRPC" },
      { abbr: "GQ", name: "GraphQL" },
    ],
  },
  {
    label: "Messaging & Cache",
    direction: "left",
    items: [
      { abbr: "Ka", name: "Kafka" },
      { abbr: "Rd", name: "Redis" },
    ],
  },
  {
    label: "Monitoring",
    direction: "right",
    items: [
      { abbr: "Sn", name: "Sentry" },
      { abbr: "Dd", name: "Datadog" },
    ],
  },
  {
    label: "Repositories",
    direction: "left",
    items: [
      { abbr: "GH", name: "GitHub" },
      { abbr: "BB", name: "Bitbucket" },
    ],
  },
  {
    label: "Project Management",
    direction: "right",
    items: [
      { abbr: "JR", name: "Jira" },
      { abbr: "CF", name: "Confluence" },
      { abbr: "NT", name: "Notion" },
    ],
  },
  {
    label: "IDEs",
    direction: "left",
    items: [
      { abbr: "VS", name: "Visual Studio" },
      { abbr: "VC", name: "VS Code" },
      { abbr: "CU", name: "Cursor" },
    ],
  },
  {
    label: "AI",
    direction: "right",
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
