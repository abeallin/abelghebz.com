import React from "react";
import { motion } from "framer-motion";
import { personal, social } from "../../data/content";

const lineVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.2, duration: 0.8, ease: "easeOut" },
  }),
};

const fadeIn = (delay) => ({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay, duration: 0.8 } },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative z-[1] min-h-screen flex flex-col justify-center px-8 lg:px-16 max-w-[1400px] mx-auto"
    >
      {/* Ambient glows */}
      <div className="fixed top-[-200px] right-[-100px] w-[600px] h-[600px] rounded-full bg-gradient-start opacity-[0.08] blur-[120px] pointer-events-none z-0" />
      <div className="fixed bottom-[-300px] left-[-200px] w-[600px] h-[600px] rounded-full bg-gradient-end opacity-[0.08] blur-[120px] pointer-events-none z-0" />

      {/* Label */}
      <div className="flex items-center gap-3 mb-8 font-mono text-xs text-text-muted tracking-[3px] uppercase">
        <span className="w-8 h-[1px] bg-gradient-to-r from-gradient-start to-gradient-end" />
        {personal.title}
      </div>

      {/* Title */}
      <h1 className="text-[clamp(56px,8vw,96px)] font-light leading-[1.05] tracking-[-3px] mb-10">
        <motion.span
          className="block"
          custom={0}
          initial="hidden"
          animate="visible"
          variants={lineVariants}
        >
          {personal.tagline}
        </motion.span>
        <motion.span
          className="block"
          custom={1}
          initial="hidden"
          animate="visible"
          variants={lineVariants}
        >
          <strong className="font-extrabold bg-gradient-to-br from-gradient-start to-gradient-end bg-clip-text text-transparent">
            {personal.taglineHighlight}
          </strong>{" "}
          that
        </motion.span>
        <motion.span
          className="block"
          custom={2}
          initial="hidden"
          animate="visible"
          variants={lineVariants}
        >
          people love.
        </motion.span>
      </h1>

      {/* Description */}
      <motion.p
        className="text-[17px] text-text-secondary leading-relaxed max-w-[480px] mb-12"
        variants={fadeIn(0.9)}
        initial="hidden"
        animate="visible"
      >
        {personal.description}
      </motion.p>

      {/* CTAs */}
      <motion.div
        className="flex gap-4 items-center mb-12"
        variants={fadeIn(1.1)}
        initial="hidden"
        animate="visible"
      >
        <a
          href="#projects"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-br from-gradient-start to-gradient-end text-white text-sm font-semibold rounded-xl hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(174,103,250,0.3)] transition-all duration-200"
        >
          View Projects <span>→</span>
        </a>
        <a
          href={personal.cvPath}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3.5 border border-border-subtle text-text-secondary text-sm font-medium rounded-xl bg-surface hover:border-white/25 hover:text-white hover:bg-white/5 transition-all duration-300"
        >
          Download CV
        </a>
      </motion.div>

      {/* Status */}
      <motion.div
        className="flex items-center gap-2 text-xs text-text-muted"
        variants={fadeIn(1.3)}
        initial="hidden"
        animate="visible"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-status-green animate-pulse shadow-[0_0_0_0_rgba(52,211,153,0.4)]" />
        {personal.status}
      </motion.div>

      {/* Hero footer */}
      <motion.div
        className="absolute bottom-10 left-8 right-8 lg:left-16 lg:right-16 flex justify-between items-center"
        variants={fadeIn(1.4)}
        initial="hidden"
        animate="visible"
      >
        <div className="flex gap-7">
          {social.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium tracking-[1.5px] uppercase text-text-muted hover:text-white/70 transition-colors duration-300"
            >
              {s.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2.5 text-[11px] tracking-[2px] uppercase text-white/20">
          <span>Scroll</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-gradient-start/50 to-transparent animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
}
