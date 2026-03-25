import React from "react";
import { FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";
import { social } from "../../data/content";

const iconMap = {
  github: FiGithub,
  linkedin: FiLinkedin,
  email: FiMail,
  phone: FiPhone,
};

export default function Footer() {
  return (
    <footer className="max-w-[1600px] mx-auto px-6 lg:px-12 py-16 border-t border-border">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8">
        <div>
          <span className="font-display italic text-2xl text-text">Abel</span>
          <span className="font-display italic text-2xl text-accent">.</span>
          <p className="font-mono text-[11px] text-text-dim uppercase tracking-wider mt-2">
            © {new Date().getFullYear()} Abel Ghebrezadik
          </p>
        </div>
        <div className="flex gap-8">
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
      </div>
    </footer>
  );
}
