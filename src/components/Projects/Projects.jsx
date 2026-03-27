import React from "react";
import { motion } from "framer-motion";
import { projects } from "../../data/content";
import TechPill from "../shared/TechPill";

function BrowserFrame({ label, screenshot }) {
  return (
    <div className="w-[85%] bg-bg border border-border overflow-hidden group-hover:border-accent/20 transition-colors duration-500">
      <div className="flex gap-1.5 px-4 py-3 border-b border-border">
        <span className="w-2 h-2 rounded-full bg-border" />
        <span className="w-2 h-2 rounded-full bg-border" />
        <span className="w-2 h-2 rounded-full bg-border" />
      </div>
      {screenshot ? (
        <img src={screenshot} alt={label} className="w-full h-auto block" />
      ) : (
        <div className="h-[180px] flex items-center justify-center font-mono text-[11px] text-text-dim/20 uppercase tracking-widest">
          {label}
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="max-w-[1600px] mx-auto px-6 lg:px-12 py-16 lg:py-32">
      <div className="border-t border-border pt-12">
        <div className="flex items-center gap-4 mb-10 lg:mb-16">
          <span className="font-mono text-[11px] text-accent tracking-[0.2em]">03</span>
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-dim">Projects</span>
        </div>

        <h2 className="text-[clamp(36px,5vw,64px)] leading-[1.05] tracking-[-0.03em] mb-10 lg:mb-14">
          <span className="font-body font-800 text-text">Things I've </span>
          <span className="font-display italic text-accent">shipped</span>
          <span className="font-body font-800 text-text">.</span>
        </h2>

        <div className="flex flex-col gap-4">
          {projects.map((project, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={project.number}
                className="group grid grid-cols-1 lg:grid-cols-2 bg-bg-raised border border-border overflow-hidden min-h-[200px] lg:min-h-[360px] hover:border-accent/30 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
              >
                <div className={`relative overflow-hidden bg-bg flex items-center justify-center min-h-[200px] lg:min-h-[360px] border-border ${!isEven ? "lg:order-2 lg:border-l" : "lg:border-r"}`}>
                  <BrowserFrame label={project.name} screenshot={project.screenshot} />
                </div>

                <div className={`p-6 sm:p-10 lg:p-14 flex flex-col justify-center ${!isEven ? "lg:order-1" : ""}`}>
                  <div className="font-mono text-[11px] text-accent tracking-[0.2em] mb-5">
                    {project.number}
                  </div>
                  <h3 className="text-[22px] sm:text-[28px] font-body font-700 text-text mb-2 group-hover:text-accent transition-colors">
                    {project.name}
                  </h3>
                  <div className="font-mono text-[11px] text-text-dim uppercase tracking-wider mb-6">
                    {project.type}
                  </div>
                  <p className="text-[14px] leading-[1.8] text-text-dim mb-8">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t) => <TechPill key={t} label={t} />)}
                  </div>
                  <div className="flex gap-6">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-[11px] uppercase tracking-wider text-text-dim hover:text-accent transition-colors border-b border-border hover:border-accent pb-1"
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
      </div>
    </section>
  );
}
