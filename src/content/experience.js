// Newest first. `outcome` is the one line a recruiter reads; `detail` is the rest.
export const experience = [
  {
    company: "Arena Entertainment",
    role: "Full Stack Developer",
    period: "Dec 2025 — Present",
    outcome: "Built an AI conversational assistant on AWS Bedrock for 200+ team members, cutting onboarding time and internal support requests across Slack and Jira.",
    detail:
      "Crypto gambling platform. Cut average API latency from 14s to 2s with Lambda warm-up pings and provisioned concurrency (94% hit rate); 50% faster Snowflake and MySQL queries. Rebuilt a five-year-old Angular frontend into a modern UI based on Cloudflare's designs, with standardised patterns and strict frontend principles. Wrote 250 pages of in-app documentation covering customer-ops triage, how-to guides and permissions and access. Refactored TypeScript for algorithmic efficiency, added Redis batch pipelines and rebuilt data tables with keyset pagination, making tables with billions of records retrievable. Built a regression-test automation app that runs UI tests with Playwright, traces Bitbucket PRs to create test cases, and integrates with Claude through an MCP server I built. Rebuilt the internal admin platform in React and .NET with DDD, CQRS over Kafka, gRPC between services and a GraphQL API, migrating it function by function with AI agents.",
    stack: ["C# / .NET", "TypeScript", "Angular", "React", "AWS Bedrock", "AWS Lambda", "Snowflake", "Redis", "Kafka", "gRPC"],
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
    outcome: "Automated bulk creation and deletion of templates in Accurx for GP practices in North Central London (NCL).",
    detail:
      "Delivered a desktop application that drives a third-party healthcare application with Selenium, cutting a template sweep from 4 hours of manual work to 4 minutes.",
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
      "Credit facility platform. Built frontend and backend features, mentored juniors and stepped into Lead Developer duties. Created the backend logic for the debt sale implementation and presented it to an external client.",
    stack: ["C# / .NET 6", "TypeScript", "Vue", "Python", "MySQL", "MSSQL", "Microservices"],
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
