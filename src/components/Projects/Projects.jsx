import React from "react";
import { motion } from "framer-motion";
import { projects } from "../../data/content";
import TechPill from "../shared/TechPill";

function BrowserFrame({ label }) {
  return (
    <div className="w-[85%] bg-[#0a0a12] rounded-xl overflow-hidden border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.4)] group-hover:scale-[1.03] transition-transform duration-400">
      <div className="flex gap-1.5 px-4 py-3 bg-white/[0.03] border-b border-white/[0.06]">
        <span className="w-2 h-2 rounded-full bg-white/10" />
        <span className="w-2 h-2 rounded-full bg-white/10" />
        <span className="w-2 h-2 rounded-full bg-white/10" />
      </div>
      <div className="h-[180px] flex items-center justify-center text-white/15 text-[13px]">
        {label}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-[1200px] mx-auto px-8 lg:px-16 py-24"
    >
      <div className="flex items-center gap-3 mb-6 font-mono text-[11px] text-text-muted tracking-[3px] uppercase">
        <span className="w-6 h-[1px] bg-gradient-to-r from-gradient-start to-gradient-end" />
        Projects
      </div>
      <h2 className="text-[44px] font-light leading-[1.15] tracking-[-1.5px] mb-14">
        Things I've{" "}
        <strong className="font-bold bg-gradient-to-br from-gradient-start to-gradient-end bg-clip-text text-transparent">
          shipped
        </strong>
        .
      </h2>

      <div className="flex flex-col gap-8">
        {projects.map((project, i) => {
          const isEven = i % 2 === 0;
          return (
            <motion.div
              key={project.number}
              className="group grid grid-cols-1 lg:grid-cols-2 bg-surface border border-border-subtle rounded-3xl overflow-hidden min-h-[360px] hover:border-gradient-start/[0.15] hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-400"
              initial={{ opacity: 0, x: isEven ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
            >
              <div
                className={`relative overflow-hidden bg-gradient-to-br from-gradient-start/[0.04] to-gradient-end/[0.04] flex items-center justify-center min-h-[360px] ${
                  !isEven ? "lg:order-2" : ""
                }`}
              >
                <BrowserFrame label={project.name} />
              </div>

              <div
                className={`p-10 lg:p-12 flex flex-col justify-center ${
                  !isEven ? "lg:order-1" : ""
                }`}
              >
                <div className="font-mono text-xs text-gradient-start/40 mb-4 tracking-[2px]">
                  {project.number}
                </div>
                <h3 className="text-[28px] font-bold text-white/95 mb-2">
                  {project.name}
                </h3>
                <div className="text-[13px] font-medium text-gradient-end/70 mb-5">
                  {project.type}
                </div>
                <p className="text-[15px] leading-relaxed text-text-secondary mb-7">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-7">
                  {project.tech.map((t) => (
                    <TechPill key={t} label={t} />
                  ))}
                </div>
                <div className="flex gap-5">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] text-text-secondary hover:text-gradient-start transition-colors flex items-center gap-1.5"
                    >
                      {link.label} ↗
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
