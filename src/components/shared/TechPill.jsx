import React from "react";

export default function TechPill({ label }) {
  return (
    <span className="text-[11px] font-mono px-3.5 py-1 bg-gradient-start/[0.08] border border-gradient-start/[0.15] rounded-full text-gradient-start/70">
      {label}
    </span>
  );
}
