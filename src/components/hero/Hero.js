import React from "react";
import { RiArrowDownLine } from "react-icons/ri";
import { motion } from "framer-motion";
import TypingAnimation from "../transitions/TypingTransition";
import "./Hero.scss";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero__title-container">
        <motion.h1 className="hero__title">
          <TypingAnimation text="Tech Entrepreneur." />
        </motion.h1>
        <motion.h1 className="hero__title">
          <TypingAnimation text="Problem Solver." />
        </motion.h1>
        <motion.h1 className="hero__title">
          <TypingAnimation text="Software Developer." />
        </motion.h1>
        <motion.h1 className="hero__title">
          <TypingAnimation text="Based Out Of Toronto." />
        </motion.h1>
      </div>
      <div className="hero__cta-container">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          transition={{
            delay: 5,
          }}
        >
          <p className="hero__cta">Scroll Down</p>
        </motion.div>
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: 15 }}
          transition={{
            type: "tween",
            ease: "linear",
            duration: 0.75,
            repeat: Infinity,
          }}
        >
          <RiArrowDownLine />
        </motion.div>
      </div>
    </div>
  );
}
