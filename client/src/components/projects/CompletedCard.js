import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "motion/react";
import ProjectPreview from "./ProjectPreview";
import "./CompletedCard.scss";

const MotionLink = motion.a;

export default function CompletedCard({ proj }) {
  return (
    <MotionLink
      href={proj.url}
      target="_blank"
      rel="noopener noreferrer"
      className="completed-project-card glass gradient-border"
      style={{
        "--accent": proj.color,
      }}
      whileHover="hover"
      initial="initial"
    >
      <div className="completed-project-card__accent" />

      <ProjectPreview image={proj.preview} />

      <div className="completed-project-card__body">
        <div className="completed-project-card__header">
          <div>
            <p className="completed-project-card__tagline">{proj.tagline}</p>

            <h3 className="completed-project-card__title">{proj.name}</h3>
          </div>

          <div className="completed-project-card__icon">
            <FiArrowUpRight size={13} />
          </div>
        </div>

        <p className="completed-project-card__description">
          {proj.description}
        </p>

        <div className="completed-project-card__stack">
          {proj.techstack.map((tech) => (
            <img
              key={tech}
              src={tech}
              alt=""
              className="completed-project-card__chip"
            />
          ))}
        </div>
      </div>
    </MotionLink>
  );
}
