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
} from "react-icons/si";
import { DiJava, DiAws, DiMsqlServer, DiMysql, DiPostgresql, DiGo } from "react-icons/di";
import { TbApi, TbBrandReactNative } from "react-icons/tb";
import { VscWindow } from "react-icons/vsc";
import { FiCpu, FiTool, FiZap, FiTerminal } from "react-icons/fi";

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
  "Expo": SiReact,
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
  "Claude AI": FiTerminal,
  "ChatGPT": SiOpenai,
  "GitHub Copilot": SiGithubcopilot,
  "Cursor": FiTerminal,
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
    <section id="skills" className="max-w-[1600px] mx-auto px-6 lg:px-12 py-32">
      <motion.div
        className="border-t border-border pt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-[11px] text-accent tracking-[0.2em]">04</span>
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-dim">Skills</span>
        </div>

        <h2 className="text-[clamp(36px,5vw,64px)] leading-[1.05] tracking-[-0.03em] mb-14">
          <span className="font-body font-800 text-text">My </span>
          <span className="font-display italic text-accent">toolkit</span>
          <span className="font-body font-800 text-text">.</span>
        </h2>

        {skillRows.map((row) => <MarqueeRow key={row.label} row={row} />)}
      </motion.div>
    </section>
  );
}
