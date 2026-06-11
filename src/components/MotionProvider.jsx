"use client";

import { MotionConfig } from "framer-motion";

// Respects the OS "reduce motion" setting for every animation on the site.
export default function MotionProvider({ children }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
