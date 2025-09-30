import { useEffect, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import "./Hero.scss";

const HERO_WORDS = [
  "Software Developer",
  "Systems Engineer",
  "Technical Lead",
  "Product Builder",
];

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIdx((i) => (i + 1) % HERO_WORDS.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };
  return (
    <section className="hero">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="hero__content"
      >
        <motion.h1 variants={fadeUp} className="hero__title font-display">
          Adrien Belcastro
          <br />
          <span className="hero__word-wrapper">
            <AnimatePresence initial={false} mode="sync">
              <motion.em
                key={wordIdx}
                className="hero__word gradient-text"
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {HERO_WORDS[wordIdx]}.
              </motion.em>
            </AnimatePresence>
          </span>
        </motion.h1>

        <motion.p variants={fadeUp} className="hero__description font-body">
          CS + Business student at Brock University, building production-ready
          applications and shipping meaningful software. Based in Toronto, ON.
        </motion.p>
        <motion.div variants={fadeUp} className="hero__actions">
          <a
            href="#projects"
            className="hero__button hero__button--primary font-display"
            style={{
              background: "linear-gradient(135deg,#7c3aed,#0891b2)",
              boxShadow: "0 0 40px rgba(124,58,237,0.3)",
            }}
          >
            View Projects <FiArrowUpRight size={16} />
          </a>
          <a
            href="#contact"
            className="hero__button hero__button--secondary glass glass-hover gradient-border font-display"
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="hero__scroll"
      ></motion.div>
    </section>
  );
}
