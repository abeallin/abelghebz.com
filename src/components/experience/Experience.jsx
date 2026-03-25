import React from "react";
import { motion } from "framer-motion";
import { experience } from "../../data/content";
import TechPill from "../shared/TechPill";

function ExperienceCard({ item, index }) {
  if (item.featured) {
    return (
      <motion.div
        className="col-span-full grid grid-cols-1 lg:grid-cols-2 gap-10 p-9 bg-surface border border-border-subtle rounded-[20px] relative overflow-hidden hover:border-gradient-start/[0.15] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all duration-400 before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[2px] before:bg-gradient-to-r before:from-gradient-start before:to-gradient-end before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-400"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <div className="flex justify-between items-start mb-5">
            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-lg font-bold text-text-muted">
              {item.initials}
            </div>
            <span className="font-mono text-[11px] text-gradient-start/60 px-3 py-1.5 bg-gradient-start/[0.06] rounded-full">
              {item.year}
            </span>
          </div>
          <h3 className="text-xl font-semibold text-white/90 mb-1">
            {item.company}
          </h3>
          <div className="text-[13px] text-text-muted mb-4">{item.role}</div>
          <p className="text-sm leading-relaxed text-text-secondary mb-5">
            {item.description}
          </p>
          <div className="flex flex-wrap gap-1.5 mb-5">
            {item.tech.map((t) => (
              <TechPill key={t} label={t} />
            ))}
          </div>
          {item.link && (
            <a
              href={item.link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[13px] text-gradient-start/60 hover:text-gradient-start transition-colors"
            >
              Visit {item.link.label} →
            </a>
          )}
        </div>
        <div className="flex items-center justify-center">
          <div className="w-full h-[200px] bg-gradient-to-br from-gradient-start/[0.06] to-gradient-end/[0.06] rounded-2xl border border-border-subtle flex items-center justify-center">
            <span className="text-[13px] text-white/15">Site preview</span>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="p-9 bg-surface border border-border-subtle rounded-[20px] relative overflow-hidden hover:border-gradient-start/[0.15] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all duration-400 before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[2px] before:bg-gradient-to-r before:from-gradient-start before:to-gradient-end before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-400"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex justify-between items-start mb-5">
        <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-lg font-bold text-text-muted">
          {item.initials}
        </div>
        <span className="font-mono text-[11px] text-gradient-start/60 px-3 py-1.5 bg-gradient-start/[0.06] rounded-full">
          {item.year}
        </span>
      </div>
      <h3 className="text-xl font-semibold text-white/90 mb-1">
        {item.company}
      </h3>
      <div className="text-[13px] text-text-muted mb-4">{item.role}</div>
      <p className="text-sm leading-relaxed text-text-secondary mb-5">
        {item.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {item.tech.map((t) => (
          <TechPill key={t} label={t} />
        ))}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const featured = experience.filter((e) => e.featured);
  const rest = experience.filter((e) => !e.featured);

  return (
    <section
      id="experience"
      className="max-w-[1200px] mx-auto px-8 lg:px-16 py-24"
    >
      <div className="flex items-center gap-3 mb-6 font-mono text-[11px] text-text-muted tracking-[3px] uppercase">
        <span className="w-6 h-[1px] bg-gradient-to-r from-gradient-start to-gradient-end" />
        Experience
      </div>
      <h2 className="text-[44px] font-light leading-[1.15] tracking-[-1.5px] mb-14">
        Where I've{" "}
        <strong className="font-bold bg-gradient-to-br from-gradient-start to-gradient-end bg-clip-text text-transparent">
          built things
        </strong>
        .
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {featured.map((item, i) => (
          <ExperienceCard key={item.company} item={item} index={i} />
        ))}
        {rest.map((item, i) => (
          <ExperienceCard key={item.company} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
