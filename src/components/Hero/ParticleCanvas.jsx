import React, { useEffect, useRef } from "react";

const PARTICLE_COUNT = 40;
const PARTICLE_COUNT_MOBILE = 15;
const CONNECTION_DIST = 120;
const MOUSE_DIST = 180;

class Particle {
  constructor(w, h) {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.vx = (Math.random() - 0.5) * 0.3;
    this.vy = (Math.random() - 0.5) * 0.3;
    this.size = Math.random() * 1.5 + 0.3;
    this.baseSize = this.size;
    this.alpha = Math.random() * 0.15 + 0.05;
  }

  update(w, h) {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > w) this.vx *= -1;
    if (this.y < 0 || this.y > h) this.vy *= -1;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(232, 73, 29, ${this.alpha})`;
    ctx.fill();
  }
}

export default function ParticleCanvas() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;
    const count = isMobile ? PARTICLE_COUNT_MOBILE : PARTICLE_COUNT;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: count }, () => new Particle(canvas.width, canvas.height));

    const onMouse = (e) => { mouseRef.current = { x: e.clientX, y: e.clientY }; };
    document.addEventListener("mousemove", onMouse);

    if (reducedMotion) {
      particles.forEach((p) => p.draw(ctx));
      return () => {
        window.removeEventListener("resize", resize);
        document.removeEventListener("mousemove", onMouse);
      };
    }

    let raf;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      for (let i = 0; i < particles.length; i++) {
        particles[i].update(canvas.width, canvas.height);
        particles[i].draw(ctx);

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DIST) {
            const a = (1 - dist / CONNECTION_DIST) * 0.04;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(232, 73, 29, ${a})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }

        const dx = particles[i].x - mx;
        const dy = particles[i].y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_DIST) {
          const a = (1 - dist / MOUSE_DIST) * 0.12;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mx, my);
          ctx.strokeStyle = `rgba(240, 239, 233, ${a})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
          particles[i].size = Math.min(particles[i].size + 0.02, 2.5);
        } else {
          particles[i].size = Math.max(particles[i].size - 0.01, particles[i].baseSize);
        }
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />;
}
