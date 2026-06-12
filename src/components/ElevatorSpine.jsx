"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const TRACK = 300; // track height in px, must match .spine__rail in fx.css

// The elevator shaft: a fixed glass capsule with floor stops; the "car"
// rides the track as the page scrolls, echoing the 3D site's right rail.
// `stops` = [{ id, label }] where id is a section id on the page.
export default function ElevatorSpine({ stops }) {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const yRaw = useMotionValue(0);
  const carY = useSpring(yRaw, { stiffness: 90, damping: 20 });
  const topsRef = useRef([]);

  useEffect(() => {
    const measure = () => {
      topsRef.current = stops.map((s) => {
        const el = document.getElementById(s.id);
        return el ? el.getBoundingClientRect().top + window.scrollY : 0;
      });
    };

    const onScroll = () => {
      const tops = topsRef.current;
      if (!tops.length) return;
      const center = window.scrollY + window.innerHeight * 0.45;
      let i = 0;
      while (i < tops.length - 1 && center >= tops[i + 1]) i++;
      const a = tops[i];
      const b = i < tops.length - 1 ? tops[i + 1] : a + 1;
      const t = i + Math.min(1, Math.max(0, (center - a) / (b - a)));
      const clamped = Math.min(stops.length - 1, t);
      yRaw.set((clamped / (stops.length - 1)) * TRACK);
      setActive(Math.round(clamped));
    };

    const onResize = () => {
      measure();
      onScroll();
    };

    measure();
    onScroll();
    setVisible(true);
    // fonts/images settle layout late; re-measure once after load
    const settle = setTimeout(onResize, 1200);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    window.addEventListener("load", onResize);

    return () => {
      clearTimeout(settle);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("load", onResize);
    };
  }, [stops, yRaw]);

  return (
    <motion.nav
      className="spine"
      aria-label="Page floors"
      initial={{ opacity: 0, x: 18 }}
      animate={visible ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: 0.9, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="spine__rail">
        <motion.span className="spine__car" style={{ y: carY }} aria-hidden />
        {stops.map((s, i) => (
          <button
            key={s.id}
            type="button"
            className={`spine__stop${i === active ? " is-active" : ""}`}
            style={{ top: `${(i / (stops.length - 1)) * 100}%` }}
            aria-label={s.label}
            onClick={() =>
              document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <span className="spine__dot" aria-hidden />
            <span className="spine__label">{s.label}</span>
          </button>
        ))}
      </div>
    </motion.nav>
  );
}
