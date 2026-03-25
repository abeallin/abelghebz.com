import React from "react";
import { social } from "../../data/content";

export default function Footer() {
  return (
    <footer className="max-w-[1200px] mx-auto px-8 lg:px-16 py-12 border-t border-border-subtle">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
        <p className="text-xs text-text-muted">
          © {new Date().getFullYear()} Abel Ghebrezadik
        </p>
        <div className="flex gap-6">
          {social.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium tracking-[1px] uppercase text-text-muted hover:text-white/70 transition-colors duration-300"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
