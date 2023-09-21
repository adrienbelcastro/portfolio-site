import React from "react";
import { motion, useScroll } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ScrollAnimation({ children }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
