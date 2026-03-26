import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";
import { personal, social } from "../../data/content";

const iconMap = {
  github: FiGithub,
  linkedin: FiLinkedin,
  email: FiMail,
  phone: FiPhone,
};

const reveal = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.15, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const fade = (delay) => ({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay, duration: 0.8 } },
});

export default function Hero() {
  return (
    <section id="hero" className="relative z-[1] min-h-screen flex flex-col justify-end px-6 lg:px-12 pb-12 pt-32 max-w-[1600px] mx-auto">
      {/* Top rule */}
      <motion.div
        className="absolute top-28 left-6 right-6 lg:left-12 lg:right-12 h-[1px] bg-border"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ transformOrigin: "left" }}
      />

      <div className="flex-1 flex flex-col justify-center">
        {/* Label */}
        <motion.div
          className="flex items-center gap-4 mb-6"
          variants={fade(0.2)}
          initial="hidden"
          animate="visible"
        >
          <span className="w-2 h-2 rounded-full bg-accent" />
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-dim">
            {personal.title}
          </span>
        </motion.div>

        {/* Title — oversized mixed typography */}
        <h1 className="mb-8">
          <motion.span
            className="block font-body text-[clamp(36px,9vw,140px)] font-800 leading-[0.9] tracking-[-0.04em] text-text"
            custom={0}
            initial="hidden"
            animate="visible"
            variants={reveal}
          >
            {personal.tagline}
          </motion.span>
          <motion.span
            className="block font-display italic text-[clamp(36px,9vw,140px)] leading-[0.95] tracking-[-0.02em] text-accent"
            custom={1}
            initial="hidden"
            animate="visible"
            variants={reveal}
          >
            {personal.taglineHighlight}
          </motion.span>
          <motion.span
            className="block font-body text-[clamp(36px,9vw,140px)] font-800 leading-[0.9] tracking-[-0.04em] text-text"
            custom={2}
            initial="hidden"
            animate="visible"
            variants={reveal}
          >
            that matter.
          </motion.span>
        </h1>

        {/* Description */}
        <motion.p
          className="text-[15px] text-text-dim leading-[1.8] w-full max-w-[520px] mb-10 font-body font-normal"
          variants={fade(1.0)}
          initial="hidden"
          animate="visible"
        >
          {personal.description}
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center"
          variants={fade(1.2)}
          initial="hidden"
          animate="visible"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-accent text-bg text-[13px] font-mono uppercase tracking-[0.1em] font-bold hover:bg-text hover:text-bg transition-all duration-300"
          >
            View Projects
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href={personal.cvPath}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] font-mono uppercase tracking-[0.1em] text-text-dim hover:text-accent transition-colors border-b border-text-dim hover:border-accent pb-1"
          >
            Download CV
          </a>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <motion.div
        className="flex justify-between items-end pt-8 mt-8 sm:pt-12 sm:mt-12 border-t border-border"
        variants={fade(1.5)}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-wrap gap-4 sm:gap-8">
          {social.map((s) => {
            const Icon = iconMap[s.icon];
            return (
              <a
                key={s.label}
                href={s.url}
                target={s.url.startsWith("tel:") ? undefined : "_blank"}
                rel={s.url.startsWith("tel:") ? undefined : "noopener noreferrer"}
                className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-text-dim hover:text-accent transition-colors duration-300"
              >
                {Icon && <Icon size={13} />}
                {s.label}
              </a>
            );
          })}
        </div>
        <div className="hidden lg:flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.15em] text-text-dim">
          <span>Scroll</span>
          <span className="w-[1px] h-8 bg-accent/40 animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
}
