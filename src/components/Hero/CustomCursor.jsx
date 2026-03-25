import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const visibleRef = useRef(false);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setEnabled(!isTouch && !reducedMotion);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
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
        cursorRef.current.style.left = `${pos.current.x}px`;
        cursorRef.current.style.top = `${pos.current.y}px`;
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
    <svg
      ref={cursorRef}
      className={`fixed pointer-events-none z-[9999] transition-transform duration-150 ease-out ${
        hovering ? "scale-150" : ""
      } ${visible ? "opacity-100" : "opacity-0"}`}
      width="24"
      height="28"
      viewBox="0 0 24 28"
      fill="none"
      style={{ marginLeft: "-2px", marginTop: "-2px" }}
    >
      <path
        d="M2 2L2 24L8.5 17.5L14 26L18 24L12.5 15.5L22 14L2 2Z"
        fill="#e8491d"
        stroke="#0a0a0a"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
