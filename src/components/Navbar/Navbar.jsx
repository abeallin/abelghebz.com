import React, { useState, useEffect } from "react";
import { navLinks } from "../../data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-12 py-5 transition-all duration-500 ${
        scrolled ? "bg-bg/90 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <a href="#" className="font-display italic text-xl text-text tracking-tight">
        Abel<span className="text-accent">.</span>
      </a>

      <ul className="hidden md:flex gap-8">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-[12px] font-mono uppercase tracking-[0.15em] text-text-dim hover:text-accent transition-colors duration-300"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <button
        className="md:hidden flex flex-col gap-[5px] p-2"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-[1px] bg-text transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
        <span className={`block w-6 h-[1px] bg-text transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
        <span className={`block w-6 h-[1px] bg-text transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
      </button>

      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-bg/98 backdrop-blur-sm border-t border-border md:hidden">
          <ul className="flex flex-col p-8 gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-mono uppercase tracking-[0.15em] text-text-dim hover:text-accent transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
