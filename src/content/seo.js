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
    title: `Cabeazy: Real-Time Taxi Dispatch Platform & Mobile Apps | ${name}`,
    description:
      "Technical case study on building a real-time taxi booking and driver dispatch system using NATS messaging, Expo React Native, Kotlin, and Mapbox routing.",
    keywords: [
      "taxi dispatch system",
      "real-time dispatch NATS",
      "ride-hailing app architecture",
      "Expo React Native driver app",
      "Kotlin mobile app",
      "Mapbox taxi routing",
      "Cabeazy",
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
    title: `When Will You Marry: Viral Dating Prediction App & Micro-Payments | ${name}`,
    description:
      "Case study on building a viral dating quiz platform with Stripe micro-payments, Cloudflare R2 storage, Redis rate limiting, and social sharing on Railway.",
    keywords: [
      "viral quiz application",
      "Stripe micro-payments Next.js",
      "Cloudflare R2 storage",
      "Next.js Redis rate limiting",
      "dating prediction web app",
      "Drizzle ORM",
      "whenwillyoumarry.com",
    ],
    category: "WebApplication",
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
