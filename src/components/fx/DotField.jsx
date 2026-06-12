"use client";

import { useEffect, useRef } from "react";

// Cursor-reactive blueprint dot grid drawn on a canvas that fills its parent.
// Dots idle with a slow shimmer and glow cyan near the pointer. The rAF loop
// only runs while the parent is on screen.
export default function DotField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const ctx = canvas.getContext("2d");
    const parent = canvas.parentElement;
    const pointer = { x: -9999, y: -9999 };
    const GAP = 28;
    const RADIUS = 150;

    let width = 0;
    let height = 0;
    let dots = [];
    let raf = 0;
    let running = false;
    let t = 0;

    function build() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = parent.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.round(width * dpr));
      canvas.height = Math.max(1, Math.round(height * dpr));
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      dots = [];
      for (let dx = GAP / 2; dx < width; dx += GAP) {
        for (let dy = GAP / 2; dy < height; dy += GAP) {
          dots.push({ x: dx, y: dy, phase: Math.random() * Math.PI * 2 });
        }
      }
    }

    function frame() {
      t += 0.016;
      ctx.clearRect(0, 0, width, height);
      for (const d of dots) {
        const dist = Math.hypot(d.x - pointer.x, d.y - pointer.y);
        const k = Math.max(0, 1 - dist / RADIUS);
        const shimmer = 0.5 + 0.5 * Math.sin(t * 0.8 + d.phase);
        const alpha = 0.07 + shimmer * 0.05 + k * 0.55;
        const r = 1 + k * 1.7;
        ctx.beginPath();
        ctx.arc(d.x, d.y, r, 0, Math.PI * 2);
        ctx.fillStyle =
          k > 0.01 ? `rgba(69, 200, 255, ${alpha})` : `rgba(79, 147, 255, ${alpha})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(frame);
    }

    function start() {
      if (!running) {
        running = true;
        raf = requestAnimationFrame(frame);
      }
    }

    function stop() {
      running = false;
      cancelAnimationFrame(raf);
    }

    const onMove = (e) => {
      const rect = parent.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
    };

    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) start();
      else stop();
    });

    build();
    io.observe(parent);
    parent.addEventListener("mousemove", onMove, { passive: true });
    parent.addEventListener("mouseleave", onLeave);
    window.addEventListener("resize", build);

    return () => {
      stop();
      io.disconnect();
      parent.removeEventListener("mousemove", onMove);
      parent.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", build);
    };
  }, []);

  return <canvas ref={canvasRef} className="dotfield" aria-hidden />;
}
