"use client";

import { motion } from "framer-motion";

// Scroll-into-view reveal used for content sections. Animates once, with a
// gentle viewport margin so content is never hidden from crawlers or users
// who land mid-page.
export default function Reveal({ children, delay = 0, y = 26, className, ...rest }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
