import { projects } from "./projects.js";
import { profile } from "./profile.js";

const site = "https://abelghebz.com";
const name = profile.name;

const projectSeo = {
  betmate: {
    title: `Betmate: C# & AWS Lambda Sports Betting Game | ${name}`,
    description:
      "Technical case study on building the serverless C# backend on AWS Lambda and CockroachDB for a £500k-jackpot multiplayer sports betting game scaled to 1M users.",
    keywords: [
      "sports betting game backend",
      "C# AWS Lambda case study",
      "CockroachDB gaming architecture",
      "Final One Standing",
      "serverless betting platform",
      "Dapper ORM",
      "SNS SQS event-driven",
      "Betmate",
    ],
    category: "SportsApplication",
    operatingSystem: "iOS, Android, Web",
  },
  cabeazy: {
    title: `cabeazy: UK Private Hire Dispatch Platform & Native Mobile Apps | ${name}`,
    description:
      "Technical case study on building a real-time private hire dispatch platform, corporate account billing portal, contract-first Go API (chi, sqlc, WebSockets), and native Kotlin Android and SwiftUI iOS apps with Mapbox and LiveKit.",
    keywords: [
      "private hire dispatch system",
      "UK taxi dispatch software",
      "real-time dispatch WebSockets",
      "Go chi sqlc OpenAPI",
      "SwiftUI iOS app",
      "Kotlin Jetpack Compose app",
      "Mapbox taxi routing",
      "LiveKit VoIP CallKit",
      "cabeazy",
    ],
    category: "BusinessApplication",
    operatingSystem: "Android, iOS, Web",
  },
  gpflow: {
    title: `GPFlow: NHS GP Clinical Template Automation App | ${name}`,
    description:
      "Case study on building GPFlow, a dual Electron desktop and Next.js web application that automates bulk clinical templates for GP practices in North Central London using Playwright.",
    keywords: [
      "NHS GP automation",
      "clinical template automation",
      "Electron desktop app",
      "Next.js Playwright RPA",
      "healthcare software tools",
      "MongoDB primary care",
      "GPFlow",
    ],
    category: "BusinessApplication",
    operatingSystem: "Windows, macOS, Web",
  },
  whenwillyoumarry: {
    title: `whenwillyoumarry.com: Wedding Website Builder with 7 Layouts, RSVPs & Seating | ${name}`,
    description:
      "Case study on building whenwillyoumarry.com, a multi-tenant Next.js wedding website builder with 7 switchable layouts, live split-screen editor, RSVP and seating chart, 0%-fee gifts, digital flyers, and AhaSend/Sweego guest broadcasts.",
    keywords: [
      "wedding website builder",
      "Next.js multi-tenant custom domains",
      "Stripe one-time checkout Next.js",
      "Cloudflare R2 storage",
      "RSVP and seating chart app",
      "wedding guest messaging",
      "Drizzle ORM",
      "whenwillyoumarry.com",
    ],
    category: "WebApplication",
    operatingSystem: "Web",
  },
  perfectrole: {
    title: `perfectrole.app: 135k+ Direct-to-Employer Job Index & Salary Intelligence | ${name}`,
    description:
      "Case study on building perfectrole.app, a direct-to-employer ATS job aggregation engine and pay benchmark platform indexing 135,000+ roles from 2,500+ company careers pages.",
    keywords: [
      "direct to employer job board",
      "ATS job aggregator architecture",
      "tech compensation intelligence",
      "tech salary benchmarks by market",
      "Next.js SQLite WAL high concurrency",
      "Stripe B2B job board billing",
      "perfectrole.app",
    ],
    category: "BusinessApplication",
    operatingSystem: "Web",
  },
};

export const seo = {
  site,
  name,
  pages: {
    "/": {
      title: `${name} | Lead Backend & Full-Stack Engineer, London`,
      description:
        "Lead / Senior Software Engineer with ten years across finance, property, health and gambling. Specialising in C#, .NET, AWS, Kafka, distributed backends and AI assistants. Case studies, CV, or book a 30-minute call.",
      keywords: [
        "Lead Software Engineer London",
        "Senior Backend Engineer",
        "C# .NET Lead Developer",
        "AWS Serverless Architect",
        "AWS Bedrock AI Assistant",
        "Kafka Event-Driven Architecture",
        "Distributed Systems Engineer",
        "Abel Ghebrezadik",
      ],
    },
    ...Object.fromEntries(
      projects.map((p) => {
        const custom = projectSeo[p.slug];
        return [
          `/work/${p.slug}`,
          {
            title: custom?.title || `${p.name}: case study | ${name}`,
            description: custom?.description || `${p.headline}. ${p.summary}`,
            keywords: custom?.keywords || [p.name, ...p.stack, "case study"],
            category: custom?.category || "WebApplication",
            operatingSystem: custom?.operatingSystem || "Web",
          },
        ];
      }),
    ),
  },
};
