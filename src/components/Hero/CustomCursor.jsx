import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const visibleRef = useRef(false);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const [enabled] = useState(() => {
    if (typeof window === "undefined") return false;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    return !isTouch && !reducedMotion;
  });

  useEffect(() => {
    if (!enabled) return;

    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX - 3}px`;
        dotRef.current.style.top = `${e.clientY - 3}px`;
      }
      if (!visibleRef.current) {
        visibleRef.current = true;
        setVisible(true);
      }
    };

    const onEnter = () => setHovering(true);
    const onLeave = () => setHovering(false);

    const onMouseOver = (e) => {
      if (e.target.closest("a, button, [data-hover]")) onEnter();
    };
    const onMouseOut = (e) => {
      if (e.target.closest("a, button, [data-hover]")) onLeave();
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);

    let raf;
    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.1;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.1;
      if (cursorRef.current) {
        cursorRef.current.style.left = `${pos.current.x - 16}px`;
        cursorRef.current.style.top = `${pos.current.y - 16}px`;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className={`fixed w-8 h-8 rounded-full border border-accent/40 pointer-events-none z-[9999] transition-transform duration-200 ease-out ${
          hovering ? "scale-[2] border-accent/80 bg-accent/5" : ""
        } ${visible ? "opacity-100" : "opacity-0"}`}
      />
      <div
        ref={dotRef}
        className={`fixed w-1.5 h-1.5 rounded-full bg-accent pointer-events-none z-[9999] ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      />
    </>
  );
}
