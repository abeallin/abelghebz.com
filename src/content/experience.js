// Newest first. `outcome` is the one line a recruiter reads; `detail` is the rest.
export const experience = [
  {
    company: "Arena Entertainment",
    role: "Full Stack Developer",
    period: "Dec 2025 — Present",
    outcome: "Cut API latency by up to 8s with Lambda warm-up pings and concurrency (94% hit rate); 50% faster Snowflake and MySQL queries.",
    detail:
      "Crypto gambling platform. Refactored TypeScript for algorithmic efficiency, added Redis batch pipelines and rebuilt data tables with keyset pagination. Built an automation app that drives UI testing through Playwright, Bitbucket, GitHub and Jira MCPs. Now building a new React and .NET app with DDD, CQRS over Kafka and gRPC between services.",
    stack: ["C# / .NET", "TypeScript", "React", "Snowflake", "Redis", "Kafka", "gRPC", "AWS Lambda"],
    link: { label: "arenaentertainment.com", url: "https://arenaentertainment.com/" },
  },
  {
    company: "Betmate",
    role: "Lead / Senior Software Engineer",
    period: "Apr 2025 — Jul 2025",
    outcome: "Built a multiplayer game for a leading sports betting company with a £500k jackpot, scaled to 1 million users.",
    detail:
      "Designed the high-performance C# backend on AWS Lambda, with CockroachDB through Dapper and event-driven messaging over SNS and SQS. CI/CD with API Gateway, Lambda and CloudFormation.",
    stack: ["C#", "AWS Lambda", "CockroachDB", "Dapper", "SNS/SQS", "CloudFormation"],
    link: { label: "betmate.app", url: "https://www.betmate.app/" },
  },
  {
    company: "NHS England",
    role: "Software Engineer (Contract)",
    period: "Dec 2024 — Feb 2025",
    outcome: "Automated bulk creation and deletion of templates in a healthcare application used by GPs nationwide.",
    detail:
      "Delivered a desktop application that drives a third-party healthcare application with Selenium, removing a significant amount of manual work.",
    stack: ["Python", "Selenium", "Tkinter", "CSV"],
    link: { label: "england.nhs.uk", url: "https://www.england.nhs.uk/" },
  },
  {
    company: "Fvtvre",
    role: "Senior Software Engineer",
    period: "Apr 2024 — Jul 2024",
    outcome: "Built a property management product rolled out to EJAR, the Saudi department of rent.",
    detail:
      "A .NET 8 microservice API and Vue.js frontend for a KSA-based PropTech startup, improving EJAR's inventory assessment process.",
    stack: [".NET 8", "Vue.js", "Microservices", "REST APIs"],
  },
  {
    company: "SalaryFinance",
    role: "Senior Software Engineer",
    period: "Aug 2021 — Apr 2024",
    outcome: "Technical lead on Project Tahiti, which saved the company millions in fines. Resolved 500+ production issues in 6 months, 80% faster than other engineers.",
    detail:
      "Credit facility platform. Built frontend and backend features, mentored juniors and stepped into Lead Developer duties. Worked on the debt sale implementation and presented to external clients.",
    stack: ["C# / .NET 6", "React", "MSSQL", "Microservices"],
    link: { label: "salaryfinance.com", url: "https://www.salaryfinance.com/uk/" },
  },
  {
    company: "Optal (acquired by Wex)",
    role: "Senior Software Engineer",
    period: "May 2018 — Apr 2021",
    outcome: "Monitored millions of daily Expedia and Booking.com transactions, reconciled against Ixaris and MasterCard data, and settled across 50+ bank accounts in 10 international entities.",
    detail:
      "e-Payments platform. Built desktop applications for accounts management, in multiple currencies.",
    stack: ["C# / .NET", "WinForms", "WPF", "MSSQL"],
    link: { label: "wexinc.com", url: "https://www.wexinc.com/en-gb/" },
  },
  {
    company: "London Metal Exchange (via FDM Group)",
    role: "IT Consultant",
    period: "May 2016 — May 2018",
    outcome: "Built MiFID II regulatory reporting APIs and a SOAP API for internal data retrieval.",
    detail: "Graduate scheme with FDM Group, contracted to the LME. Built features in C++, Java and C#, and scripted in Perl, PowerShell and Batch.",
    stack: ["C# / .NET", "C++", "Java", "Perl"],
    link: { label: "fdmgroup.com", url: "https://www.fdmgroup.com/" },
  },
];
