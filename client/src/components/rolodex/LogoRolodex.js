import { AnimatePresence } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import "./LogoRolodex.scss";

const DELAY_IN_MS = 2500;
const TRANSITION_DURATION_IN_SECS = 1.5;

export const LogoRolodex = ({ items = [] }) => {
  const intervalRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!items.length) {
      return undefined;
    }

    intervalRef.current = window.setInterval(() => {
      setIndex((prevIndex) => prevIndex + 1);
    }, DELAY_IN_MS);

    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, [items.length]);

  if (!items.length) {
    return (
      <div
        className="rolodex rolodex--empty"
        aria-label="Loading technology stack"
      >
        <div className="rolodex__glow" />
        <div className="rolodex__shell">
          <div className="rolodex__pulse" />
          <div className="rolodex__pulse rolodex__pulse--secondary" />
        </div>
      </div>
    );
  }

  return (
    <div className="rolodex">
      <div className="rolodex__glow" />
      <div className="rolodex__halo" />
      <div className="rolodex__frame">
        <AnimatePresence mode="sync">
          <motion.div
            key={index}
            className="rolodex__top"
            style={{
              y: "-50%",
              x: "-50%",
              clipPath: "polygon(0 0,100% 0,100% 50%,0 50%)",
              zIndex: -index,
              backfaceVisibility: "hidden",
            }}
            transition={{
              duration: TRANSITION_DURATION_IN_SECS,
              ease: "easeInOut",
            }}
            initial={{ rotateX: 0 }}
            animate={{ rotateX: 0 }}
            exit={{ rotateX: -180 }}
          >
            {items[index % items.length]}
          </motion.div>

          <motion.div
            key={(index + 1) * 2}
            className="rolodex__bottom"
            style={{
              y: "-50%",
              x: "-50%",
              clipPath: "polygon(0 50%,100% 50%,100% 100%,0 100%)",
              zIndex: index,
              backfaceVisibility: "hidden",
            }}
            initial={{ rotateX: 180 }}
            animate={{ rotateX: 0 }}
            exit={{ rotateX: 0 }}
            transition={{
              duration: TRANSITION_DURATION_IN_SECS,
              ease: "easeInOut",
            }}
          >
            {items[index % items.length]}
          </motion.div>
        </AnimatePresence>

        <div className="rolodex__divider" />
        <div className="rolodex__badge">
          <motion.span
            className="rolodex__status"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <span className="rolodex__badge-text">Live Stack</span>
        </div>
      </div>
    </div>
  );
};
