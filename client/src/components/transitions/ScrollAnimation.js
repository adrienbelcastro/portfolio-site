import { motion, useAnimation } from "motion/react";
import { useEffect, useRef } from "react";
import { useInView } from "motion/react";
import "./ScrollAnimation.scss";

export default function ScrollAnimation({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <div className="scroll" ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{ hidden: { left: 0 }, visible: { left: "100%" } }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="scroll__slidebar"
      />
    </div>
  );
}
