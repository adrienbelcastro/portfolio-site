import React from "react";
import { motion } from "framer-motion";
import "./SplashScreen.scss";

export default function Splash() {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };
  return (
    <div className="splash-screen">
      <motion.h1
        className="splash-screen__title"
        animate={{ y: [50, 10], opacity: 1, scale: 1 }}
        transition={{
          type: "tween",
          ease: "easeOut",
          duration: 2,
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        whileHover={{ scale: 1.2 }}
      >
        Adrien Belcastro
      </motion.h1>
      <motion.svg
        width="1650"
        height="600"
        viewBox="0 0 600 600"
        initial="hidden"
        animate="visible"
      >
        <motion.rect
          width="260"
          height="50"
          x="100"
          y="200"
          rx="5"
          stroke="#ffffff"
          variants={draw}
          custom={3}
        />
      </motion.svg>
    </div>
  );
}
