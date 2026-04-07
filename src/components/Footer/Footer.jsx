import React from "react";
import { FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";
import { SiGmail } from "react-icons/si";
import { social } from "../../data/content";

const iconMap = {
  github: FiGithub,
  linkedin: FiLinkedin,
  email: FiMail,
  gmail: SiGmail,
  outlook: FiMail,
  phone: FiPhone,
};

export default function Footer() {
  return (
    <footer className="max-w-[1600px] mx-auto px-6 lg:px-12 border-t border-border">
      {/* Contact CTA */}
      <div className="py-16 lg:py-24 text-center">
        <p className="font-mono text-[11px] text-accent uppercase tracking-[0.2em] mb-4">Get in touch</p>
        <h2 className="text-[clamp(28px,4vw,48px)] leading-[1.1] tracking-[-0.03em] mb-6">
          <span className="font-body font-800 text-text">Let's </span>
          <span className="font-display italic text-accent">build something</span>
          <span className="font-body font-800 text-text">.</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mt-2">
          {social.filter((s) => s.icon !== "github").map((s) => {
            const Icon = iconMap[s.icon];
            return (
              <a
                key={s.url}
                href={s.url}
                target={s.url.startsWith("tel:") ? undefined : "_blank"}
                rel={s.url.startsWith("tel:") ? undefined : "noopener noreferrer"}
                aria-label={s.label}
                className="inline-flex items-center gap-2 px-6 py-3 border border-border text-[12px] font-mono uppercase tracking-[0.1em] text-text-dim hover:text-accent hover:border-accent transition-all duration-300"
              >
                {Icon && <Icon size={14} aria-hidden="true" />}
                {s.label}
              </a>
            );
          })}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 py-8 border-t border-border">
        <div>
          <span className="font-display italic text-2xl text-text">Abel</span>
          <span className="font-display italic text-2xl text-accent">.</span>
          <p className="font-mono text-[11px] text-text-dim uppercase tracking-wider mt-2">
            © {new Date().getFullYear()} Abel Ghebrezadik
          </p>
        </div>
        <div className="flex flex-wrap gap-4 sm:gap-8">
          {social.map((s) => {
            const Icon = iconMap[s.icon];
            return (
              <a
                key={s.url}
                href={s.url}
                target={s.url.startsWith("tel:") ? undefined : "_blank"}
                rel={s.url.startsWith("tel:") ? undefined : "noopener noreferrer"}
                aria-label={s.label}
                className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-text-dim hover:text-accent transition-colors duration-300"
              >
                {Icon && <Icon size={13} aria-hidden="true" />}
                {s.label}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
