import React from "react";

export default function TechPill({ label }) {
  return (
    <span className="font-mono text-[10px] uppercase tracking-wider px-3 py-1.5 border border-border text-text-dim bg-bg hover:border-accent/30 hover:text-accent transition-all duration-300">
      {label}
    </span>
  );
}
