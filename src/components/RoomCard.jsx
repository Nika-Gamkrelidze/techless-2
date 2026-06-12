"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// One department card in the home "directory" grid, with pointer-tracking
// tilt and a hue glow that follows the cursor (mouse only).
export default function RoomCard({ service }) {
  const ref = useRef(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 160, damping: 18 });
  const sry = useSpring(ry, { stiffness: 160, damping: 18 });

  function onMove(e) {
    if (e.pointerType !== "mouse" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    ry.set((px - 0.5) * 7);
    rx.set((0.5 - py) * 5);
    ref.current.style.setProperty("--mx", `${px * 100}%`);
    ref.current.style.setProperty("--my", `${py * 100}%`);
  }

  function onLeave() {
    rx.set(0);
    ry.set(0);
  }

  return (
    <motion.div
      ref={ref}
      className="room-card__tilt"
      style={{ rotateX: srx, rotateY: sry, transformPerspective: 900, "--hue": service.hue }}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      <Link
        href={`/services/${service.slug}/`}
        className="room-card"
        style={{ "--hue": service.hue }}
      >
        <span className="room-card__num">Room {service.num}</span>
        <h3 className="display room-card__name">{service.name}</h3>
        <p className="room-card__tagline">{service.tagline}</p>
        <p className="room-card__body">{service.shortBody}</p>
        <ul className="chip-row room-card__list">
          {service.list.map((li) => (
            <li key={li} className="chip">
              {li}
            </li>
          ))}
        </ul>
        <span className="room-card__link">
          Visit the room{" "}
          <span className="room-card__arrow" aria-hidden>
            →
          </span>
        </span>
        <span className="room-card__bignum" aria-hidden>
          {service.num}
        </span>
        <span className="room-card__glow" aria-hidden />
      </Link>
    </motion.div>
  );
}
