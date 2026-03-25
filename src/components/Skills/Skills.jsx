import React from "react";
import { motion } from "framer-motion";
import { skillRows } from "../../data/content";

function MarqueeRow({ row }) {
  const items = [...row.items, ...row.items];
  const animClass =
    row.direction === "left" ? "animate-marquee" : "animate-marquee-reverse";

  return (
    <div className="mb-12 last:mb-0">
      <div className="font-mono text-xs text-text-muted tracking-[2px] uppercase mb-5">
        {row.label}
      </div>
      <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className={`flex gap-4 w-max hover:[animation-play-state:paused] ${animClass}`}>
          {items.map((item, i) => (
            <div
              key={`${item.abbr}-${i}`}
              className="flex items-center gap-3 px-7 py-4 bg-surface border border-border-subtle rounded-2xl whitespace-nowrap hover:border-gradient-start/20 hover:bg-gradient-start/[0.04] transition-all duration-300 shrink-0"
            >
              <div className="w-8 h-8 bg-white/[0.04] rounded-lg flex items-center justify-center text-[10px] font-mono text-gradient-start/50">
                {item.abbr}
              </div>
              <span className="text-sm font-medium text-white/70">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="max-w-[1200px] mx-auto px-8 lg:px-16 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-6 font-mono text-[11px] text-text-muted tracking-[3px] uppercase">
          <span className="w-6 h-[1px] bg-gradient-to-r from-gradient-start to-gradient-end" />
          Skills
        </div>
        <h2 className="text-[44px] font-light leading-[1.15] tracking-[-1.5px] mb-14">
          My{" "}
          <strong className="font-bold bg-gradient-to-br from-gradient-start to-gradient-end bg-clip-text text-transparent">
            toolkit
          </strong>
          .
        </h2>

        {skillRows.map((row) => (
          <MarqueeRow key={row.label} row={row} />
        ))}
      </motion.div>
    </section>
  );
}
