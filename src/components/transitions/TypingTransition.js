import React from "react";
import { motion } from "framer-motion";
import "./TypingTransition.scss";

const TypingAnimation = ({ text }) => {
  const letters = text.split("");

  return (
    <div className="typing-animation">
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
          className="typing-animation__letter"
        >
          {letter}&nbsp;
        </motion.span>
      ))}
    </div>
  );
};

export default TypingAnimation;
