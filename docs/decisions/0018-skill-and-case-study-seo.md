# 0018: Search-intent SEO for skills, tech stacks, and case studies

- **Status:** Accepted. Requested by Abel on 2 October 2026.
- **Date:** 2 October 2026
- **Decides:** SEO metadata structure, JSON-LD Schema.org entities (`Person.knowsAbout`, `SoftwareApplication`, `TechArticle`), skill taxonomy enhancements, and search-intent page titles and descriptions.
- **Relates to:** [0003](0003-content-never-depends-on-javascript.md), [0004](0004-a-page-per-project.md), [0009](0009-check-gate-and-ci.md), [0017](0017-refined-type-scale-and-header-wordmark.md).

## Context

While the site maintained solid technical foundations (SSR HTML, dynamic sitemap, robots.txt, canonical URLs, and Open Graph previews), search discovery for specific technical queries (e.g., *"C# AWS Lambda sports betting game"*, *"real-time taxi dispatch NATS"*, *"hire AWS Bedrock engineer London"*) was limited:
- Case studies had no Schema.org JSON-LD structured data.
- The `Person` schema lacked the machine-readable `knowsAbout` taxonomy used by Google and AI search engines to construct Knowledge Graph entities.
- Case study `<title>` tags used generic text (`Betmate: case study | Abel Ghebrezadik`) rather than ranking for the core architecture and application category.
- Meta `keywords` were omitted across all routes.
- The skill taxonomy lacked AI engineering competencies (AWS Bedrock, Claude MCP, prompt engineering) and architecture paradigms (Event-Driven, DDD, CQRS).

## Decision

1. **Rich JSON-LD Structured Data:**
   - **Homepage `Person` Entity:** Expanded to include `knowsAbout` listing primary stacks and architectural competencies (`C#`, `.NET`, `AWS Lambda`, `AWS Bedrock`, `Kafka`, `PostgreSQL`, `CockroachDB`, `Snowflake`, `Redis`, `Next.js`, `Event-Driven Architecture`, `Domain-Driven Design (DDD)`, `Microservices`, `Model Context Protocol (MCP)`), an `image` link, and an `Occupation` entity with skills breakdown.
   - **Case Studies (`/work/[slug]`):** Injected structured data containing both `SoftwareApplication` (naming application category, operating systems, keywords, and author) and `TechArticle` (linking each project's stack as machine-readable Schema.org `about` entities).

2. **Search-Intent Page Titles and Descriptions:**
   - Updated each case study title and meta description in `src/content/seo.js` to target exact-match search queries for project categories and stacks:
     - **Betmate:** `Betmate: C# & AWS Lambda Sports Betting Game | Abel Ghebrezadik`
     - **Cabeazy:** `Cabeazy: Real-Time Taxi Dispatch Platform & Mobile Apps | Abel Ghebrezadik`
     - **GPFlow:** `GPFlow: NHS GP Clinical Template Automation App | Abel Ghebrezadik`
     - **When Will You Marry:** `When Will You Marry: Viral Dating Prediction App & Micro-Payments | Abel Ghebrezadik`
     - **Homepage:** `Abel Ghebrezadik | Lead Backend & Full-Stack Engineer, London`

3. **Meta Keywords Tag:**
   - Populated `<meta name="keywords">` across all routes via Next.js metadata API to assist Bing, DuckDuckGo, technical recruiter scrapers, and AI crawlers.

4. **Skill Taxonomy Expansion:**
   - Updated `src/content/skills.js` to explicitly feature:
     - `AI and LLM engineering`: `AWS Bedrock`, `Claude MCP`, `Playwright Automation`, `Prompt Engineering`, `OpenAI / ChatGPT`, `Cursor`, `GitHub Copilot`.
     - `Architecture and patterns`: `Event-Driven Architecture`, `Domain-Driven Design (DDD)`, `CQRS`, `Microservices`, `Serverless`.
     - `Messaging and protocols`: added `NATS` alongside Kafka, Redis, SNS/SQS, and gRPC.
