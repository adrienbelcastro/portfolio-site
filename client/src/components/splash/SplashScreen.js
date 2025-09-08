import React from "react";
import { easeInOut, motion } from "framer-motion";
import "./SplashScreen.scss";

export default function Splash({ isLoading }) {
  return (
    <div className="splash-screen">
      <motion.div
        className={`splash-screen__title ${
          isLoading ? "" : "splash-screen__loaded"
        }`}
      >
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: isLoading ? 1 : 0 }}
          transition={{ duration: 1.5 }}
        >
          Adrien Belcastro
        </motion.h1>
      </motion.div>
    </div>
  );
}
