import React from "react";
import { motion } from "framer-motion";
import { skillRows } from "../../data/content";
import {
  SiJavascript, SiTypescript, SiPython, SiCplusplus,
  SiReact, SiNextdotjs, SiVuedotjs, SiNodedotjs, SiBlazor, SiDotnet,
  SiMongodb, SiSnowflake, SiCockroachlabs,
  SiTerraform, SiDocker, SiKubernetes, SiGithubactions, SiArgo,
  SiRedis, SiApachekafka, SiGraphql,
  SiOpenai, SiGithubcopilot,
  SiVercel, SiRailway, SiCloudflare, SiPerl, SiExpo,
  SiGithub, SiBitbucket, SiJira, SiConfluence, SiNotion, SiClaude, SiSentry, SiDatadog,
} from "react-icons/si";
import { DiJava, DiAws, DiMsqlServer, DiMysql, DiPostgresql, DiGo } from "react-icons/di";
import { TbApi, TbBrandReactNative } from "react-icons/tb";
import { VscWindow, VscAzure } from "react-icons/vsc";
import { FiCpu, FiTool, FiTerminal } from "react-icons/fi";

function VisualStudioIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.58 2.01L10 8.53l-4.77-3.7L2 6.18v11.64l3.23 1.35L10 15.47l7.58 6.52L22 19.67V4.34zM5.23 15.07V8.93L8.11 12zm10.35.87L12 12l3.58-3.94z"/>
    </svg>
  );
}

function VSCodeIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17 1.46l-5.94 5.47L5 2.84 2 4.41v15.17l3 1.59 6.06-4.1L17 22.54l5-2.5V3.96zm-1 16.27l-4.5-3.49L7 17.73V6.27l4.5 3.49L16 6.27z"/>
    </svg>
  );
}

function CursorIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 545 545" fill="currentColor">
      <path d="m466 137-206-119c-7-4-15-4-21 0L33 137c-6 3-9 9-9 16v240c0 6 3 12 9 16l206 119c7 4 15 4 21 0l207-119c5-3 9-9 9-16V153c0-6-4-12-9-16zm-13 25L254 507c-1 2-5 1-5-1V280c0-5-2-9-6-11L47 156c-2-1-1-5 1-5l199 115c4 2 9 2 13 0l199-115c3-1 4 2 2 5l-8 6z"/>
    </svg>
  );
}

function MondayIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none">
      <ellipse cx="10.5" cy="50" rx="5" ry="5" fill="#ff3d57"/>
      <rect x="6" y="14" width="9" height="36" rx="4.5" fill="#ff3d57" transform="rotate(-10 10.5 32)"/>
      <ellipse cx="32" cy="50" rx="5" ry="5" fill="#ffcb00"/>
      <rect x="27.5" y="22" width="9" height="28" rx="4.5" fill="#ffcb00" transform="rotate(-10 32 36)"/>
      <ellipse cx="53.5" cy="50" rx="5" ry="5" fill="#00d647"/>
    </svg>
  );
}

const iconMap = {
  "C#": SiDotnet,
  "Java": DiJava,
  "Python": SiPython,
  "C++": SiCplusplus,
  "JavaScript": SiJavascript,
  "TypeScript": SiTypescript,
  ".NET Core/Framework": SiDotnet,
  "React": SiReact,
  "Vue.js": SiVuedotjs,
  "Node.js": SiNodedotjs,
  "Blazor": SiBlazor,
  "Next.js": SiNextdotjs,
  "React Native": TbBrandReactNative,
  "Go": DiGo,
  "Perl": SiPerl,
  "Expo": SiExpo,
  "WinForms": VscWindow,
  "WPF": VscWindow,
  "MSSQL": DiMsqlServer,
  "MySQL": DiMysql,
  "PostgreSQL": DiPostgresql,
  "MongoDB": SiMongodb,
  "Snowflake": SiSnowflake,
  "CockroachDB": SiCockroachlabs,
  "AWS": DiAws,
  "Terraform": SiTerraform,
  "Docker": SiDocker,
  "Kubernetes": SiKubernetes,
  "GitHub Actions": SiGithubactions,
  "ArgoCD": SiArgo,
  "Redis": SiRedis,
  "Kafka": SiApachekafka,
  "gRPC": TbApi,
  "GraphQL": SiGraphql,
  "Vercel": SiVercel,
  "Railway": SiRailway,
  "Cloudflare": SiCloudflare,
  "Azure": VscAzure,
  "Visual Studio": VisualStudioIcon,
  "VS Code": VSCodeIcon,
  "GitHub": SiGithub,
  "Bitbucket": SiBitbucket,
  "Jira": SiJira,
  "Confluence": SiConfluence,
  "Notion": SiNotion,
  "Monday.com": MondayIcon,
  "Sentry": SiSentry,
  "Datadog": SiDatadog,
  "Claude AI": SiClaude,
  "ChatGPT": SiOpenai,
  "GitHub Copilot": SiGithubcopilot,
  "Cursor": CursorIcon,
  "LLM": FiCpu,
  "Prompt Engineering": FiCpu,
  "Microservices": FiTool,
  "Dapper": SiDotnet,
  "Agile": FiTool,
  "REST APIs": TbApi,
};

function MarqueeRow({ row }) {
  const items = [...row.items, ...row.items];
  const animClass = row.direction === "left" ? "animate-marquee" : "animate-marquee-reverse";

  return (
    <div className="mb-10 last:mb-0">
      <div className="font-mono text-[11px] text-text-dim tracking-[0.15em] uppercase mb-4">
        {row.label}
      </div>
      <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
        <div className={`flex gap-3 w-max hover:[animation-play-state:paused] ${animClass}`}>
          {items.map((item, i) => {
            const Icon = iconMap[item.name];
            return (
              <div
                key={`${item.name}-${i}`}
                className="flex items-center gap-3 px-5 py-3 bg-bg-raised border border-border rounded-sm whitespace-nowrap hover:border-accent/40 transition-all duration-300 shrink-0 group"
              >
                {Icon ? (
                  <Icon className="w-5 h-5 text-text-dim group-hover:text-accent transition-colors" />
                ) : (
                  <span className="w-5 h-5 flex items-center justify-center font-mono text-[9px] text-text-dim">
                    {item.abbr}
                  </span>
                )}
                <span className="text-[13px] font-body font-500 text-text">
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="max-w-[1600px] mx-auto px-6 lg:px-12 py-16 lg:py-32">
      <motion.div
        className="border-t border-border pt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-4 mb-10 lg:mb-16">
          <span className="font-mono text-[11px] text-accent tracking-[0.2em]">04</span>
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-dim">Skills</span>
        </div>

        <h2 className="text-[clamp(36px,5vw,64px)] leading-[1.05] tracking-[-0.03em] mb-10 lg:mb-14">
          <span className="font-body font-800 text-text">My </span>
          <span className="font-display italic text-accent">toolkit</span>
          <span className="font-body font-800 text-text">.</span>
        </h2>

        {skillRows.map((row) => <MarqueeRow key={row.label} row={row} />)}
      </motion.div>
    </section>
  );
}
