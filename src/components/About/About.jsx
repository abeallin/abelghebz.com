import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { about, timeline } from "../../data/content";

export default function About() {
  return (
    <section id="about" className="max-w-[1600px] mx-auto px-6 lg:px-12 py-12 lg:py-20">
      <div className="border-t border-border pt-12">
        {/* Section number + label */}
        <div className="flex items-center gap-4 mb-8 lg:mb-12">
          <span className="font-mono text-[11px] text-accent tracking-[0.2em]">01</span>
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-dim">About</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8 lg:gap-16 items-start">
          {/* Left — Photo + Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Photo */}
            <div className="relative mb-6 w-fit">
              <div className="relative overflow-hidden group">
                <Image
                  src="/me.jpg"
                  alt="Abel Ghebrezadik"
                  width={220}
                  height={220}
                  className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  priority
                />
                {/* Accent corner frame */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-accent" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-accent" />
              </div>
              <span className="block mt-3 font-mono text-[10px] text-text-dim tracking-[0.2em] uppercase">
                Abel Ghebrezadik
              </span>
            </div>

            <h2 className="text-[clamp(36px,5vw,64px)] leading-[1.05] tracking-[-0.03em] mb-8">
              <span className="font-body font-800 text-text">{about.heading} </span>
              <span className="font-display italic text-accent">{about.headingHighlight}</span>
              <span className="font-body font-800 text-text">.</span>
            </h2>
            <p className="text-[15px] leading-[1.9] text-text-dim max-w-[440px]">
              {about.bio}
            </p>
          </motion.div>

          {/* Right — Timeline */}
          <div className="relative">
            {timeline.map((item, i) => (
              <motion.div
                key={item.company}
                className="group border-t border-border py-5 grid grid-cols-[140px_1fr] sm:grid-cols-[160px_1fr] gap-x-6 gap-y-0 items-baseline"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <span className="font-mono text-[11px] text-text-dim tracking-wider pt-[5px]">
                  {item.year}
                </span>
                <div>
                  <h4 className="text-[17px] font-body font-600 text-text mb-1 group-hover:text-accent transition-colors duration-300">
                    {item.company}
                  </h4>
                  <p className="text-[13px] text-text-dim leading-relaxed">
                    {item.title}
                  </p>
                  <p className="text-[13px] text-text-dim leading-relaxed italic">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
