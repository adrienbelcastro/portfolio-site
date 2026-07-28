import { motion } from "motion/react";
import "./ProjectPreview.scss";

export default function ProjectPreview({ image }) {
  return (
    <motion.div
      className="project-preview"
      variants={{
        initial: {
          opacity: 0,
          scale: 0.8,
          rotate: -8,
          x: 30,
        },
        hover: {
          opacity: 1,
          scale: 1,
          rotate: 5,
          x: 0,
        },
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 20,
      }}
    >
      <img src={image} alt="Project preview" />
    </motion.div>
  );
}
