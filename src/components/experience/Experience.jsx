import React from "react";
import { motion } from "framer-motion";
import { experience } from "../../data/content";
import TechPill from "../shared/TechPill";

function ExperienceCard({ item, index }) {
  if (item.featured) {
    return (
      <motion.div
        className="col-span-full grid grid-cols-1 lg:grid-cols-2 gap-0 bg-bg-raised border border-border overflow-hidden group hover:border-accent/30 transition-all duration-500"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="p-8 lg:p-10">
          <div className="flex justify-between items-start mb-6">
            <div className="w-12 h-12 bg-accent/10 border border-accent/20 flex items-center justify-center font-mono text-sm text-accent font-bold">
              {item.initials}
            </div>
            <span className="font-mono text-[11px] text-text-dim tracking-wider">
              {item.year}
            </span>
          </div>
          <h3 className="text-2xl font-body font-700 text-text mb-1 group-hover:text-accent transition-colors">
            {item.company}
          </h3>
          <div className="font-mono text-[11px] text-text-dim uppercase tracking-wider mb-5">{item.role}</div>
          <p className="text-[14px] leading-[1.8] text-text-dim mb-6">{item.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {item.tech.map((t) => <TechPill key={t} label={t} />)}
          </div>
          {item.link && (
            <a
              href={item.link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-accent hover:text-text transition-colors"
            >
              Visit {item.link.label} ↗
            </a>
          )}
        </div>
        <div className="flex items-center justify-center bg-bg border-l border-border min-h-[240px]">
          <span className="font-mono text-[11px] text-text-dim/30 uppercase tracking-widest">Preview</span>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="p-8 bg-bg-raised border border-border group hover:border-accent/30 transition-all duration-500"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <div className="flex justify-between items-start mb-6">
        <div className="w-10 h-10 bg-surface border border-border flex items-center justify-center font-mono text-[11px] text-text-dim">
          {item.initials}
        </div>
        <span className="font-mono text-[11px] text-text-dim tracking-wider">{item.year}</span>
      </div>
      <h3 className="text-lg font-body font-600 text-text mb-1 group-hover:text-accent transition-colors">
        {item.company}
      </h3>
      <div className="font-mono text-[11px] text-text-dim uppercase tracking-wider mb-4">{item.role}</div>
      <p className="text-[13px] leading-[1.8] text-text-dim mb-5">{item.description}</p>
      <div className="flex flex-wrap gap-2 mb-5">
        {item.tech.map((t) => <TechPill key={t} label={t} />)}
      </div>
      {item.link && (
        <a
          href={item.link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-accent hover:text-text transition-colors"
        >
          Visit {item.link.label} ↗
        </a>
      )}
    </motion.div>
  );
}

export default function Experience() {
  const featured = experience.filter((e) => e.featured);
  const rest = experience.filter((e) => !e.featured);

  return (
    <section id="experience" className="max-w-[1600px] mx-auto px-6 lg:px-12 py-32">
      <div className="border-t border-border pt-12">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-[11px] text-accent tracking-[0.2em]">02</span>
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-dim">Experience</span>
        </div>

        <h2 className="text-[clamp(36px,5vw,64px)] leading-[1.05] tracking-[-0.03em] mb-14">
          <span className="font-body font-800 text-text">Where I've </span>
          <span className="font-display italic text-accent">built things</span>
          <span className="font-body font-800 text-text">.</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {featured.map((item, i) => <ExperienceCard key={item.company} item={item} index={i} />)}
          {rest.map((item, i) => <ExperienceCard key={item.company} item={item} index={i} />)}
        </div>
      </div>
    </section>
  );
}
