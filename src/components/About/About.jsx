import React from "react";
import { motion } from "framer-motion";
import { about, timeline } from "../../data/content";

export default function About() {
  return (
    <section id="about" className="max-w-[1200px] mx-auto px-8 lg:px-16 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-16 items-start">
        {/* Left — Bio */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6 font-mono text-[11px] text-text-muted tracking-[3px] uppercase">
            <span className="w-6 h-[1px] bg-gradient-to-r from-gradient-start to-gradient-end" />
            About
          </div>
          <h2 className="text-[44px] font-light leading-[1.2] tracking-[-1px] mb-6">
            {about.heading}{" "}
            <strong className="font-bold bg-gradient-to-br from-gradient-start to-gradient-end bg-clip-text text-transparent">
              {about.headingHighlight}
            </strong>
            .
          </h2>
          <p className="text-[15px] leading-[1.8] text-text-secondary">
            {about.bio}
          </p>
        </motion.div>

        {/* Right — Timeline */}
        <div className="relative pl-10">
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-gradient-start via-gradient-end to-transparent" />

          {timeline.map((item, i) => (
            <motion.div
              key={item.company}
              className="relative pb-10 last:pb-0 group"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="absolute left-[-44px] top-[6px] w-[9px] h-[9px] rounded-full bg-bg-primary border-2 border-gradient-start group-hover:bg-gradient-start group-hover:shadow-[0_0_12px_rgba(174,103,250,0.5)] transition-all duration-300" />

              <div className="font-mono text-xs text-gradient-start/60 mb-2 tracking-[1px]">
                {item.year}
              </div>
              <h4 className="text-base font-semibold text-white/85 mb-2">
                {item.company} — {item.title}
              </h4>
              <p className="text-sm leading-relaxed text-text-secondary">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
