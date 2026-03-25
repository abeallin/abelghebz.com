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
        dotRef.current.style.left = `${e.clientX - 2}px`;
        dotRef.current.style.top = `${e.clientY - 2}px`;
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
      pos.current.x += (mouse.current.x - pos.current.x) * 0.12;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.12;
      if (cursorRef.current) {
        cursorRef.current.style.left = `${pos.current.x - 10}px`;
        cursorRef.current.style.top = `${pos.current.y - 10}px`;
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
        className={`fixed w-5 h-5 rounded-full border-[1.5px] border-gradient-start/60 pointer-events-none z-[9999] mix-blend-difference transition-transform duration-150 ease-out ${
          hovering ? "scale-[2.5] !border-gradient-end/80" : ""
        } ${visible ? "opacity-100" : "opacity-0"}`}
      />
      <div
        ref={dotRef}
        className={`fixed w-1 h-1 rounded-full bg-white pointer-events-none z-[9999] ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      />
    </>
  );
}
