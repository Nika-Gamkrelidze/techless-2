"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

// Animated stat counter. Parses values like "98%", "300+", "4.8★", "<30s",
// "12-layer" and counts the numeric part up when scrolled into view.
// The static HTML carries the final value, so crawlers and no-JS users
// always see the real number.
export default function Counter({ value, duration = 1.6, className }) {
  const match = String(value).match(/^([^0-9]*)([0-9]+(?:\.[0-9]+)?)(.*)$/);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const [text, setText] = useState(String(value));

  useEffect(() => {
    if (!match || !inView) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const target = parseFloat(match[2]);
    const decimals = (match[2].split(".")[1] || "").length;
    const controls = animate(0, target, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setText(`${match[1]}${v.toFixed(decimals)}${match[3]}`),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <span ref={ref} className={className}>
      {text}
    </span>
  );
}
