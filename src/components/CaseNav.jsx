"use client";
// "On this page" menu for wide screens, based on Linear's docs: plain anchor links (they work without JS),
// with the section in view marked aria-current once JS runs.
import { useEffect, useState } from "react";

export default function CaseNav({ items }) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    // The current section is the last one whose top has passed 35% of the viewport; at the very bottom of the page
    // the last section wins, because a short final section can never scroll that far up.
    let frame = 0;
    const update = () => {
      frame = 0;
      const els = items.map((it) => document.getElementById(it.id)).filter(Boolean);
      if (!els.length) return;
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      const line = window.innerHeight * 0.35;
      const passed = els.filter((el) => el.getBoundingClientRect().top <= line);
      setActive(atBottom ? els.at(-1).id : (passed.at(-1)?.id ?? null));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [items]);

  return (
    <nav aria-label="On this page" className="sticky top-28 hidden xl:block">
      <p className="font-mono text-[13px] text-muted">On this page</p>
      <ul className="mt-3 border-l border-rule">
        {items.map((it) => {
          const current = active === it.id;
          return (
            <li key={it.id}>
              <a
                href={`#${it.id}`}
                aria-current={current ? "true" : undefined}
                className={`-ml-px block border-l-2 py-1.5 pl-4 text-[15px] transition-colors ${current ? "border-accent font-medium text-ink" : "border-transparent text-body hover:text-ink"}`}
              >
                {it.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
