import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "motion/react";
import "./CurrentCard.scss";

const MotionLink = motion.a;

export default function CurrentCard({ proj }) {

  const accentColor = proj?.accentColor || proj?.color || "#ffffff";

  const todos = Array.isArray(proj?.todo) ? proj.todo : [];

  const parseTodoItem = (item) => {
    if (typeof item === "string") {
      try {
        const parsed = JSON.parse(item);

        return {
          label: parsed?.label ?? item,
          done: Boolean(parsed?.done),
        };
      } catch {
        return {
          label: item,
          done: false,
        };
      }
    }

    return (
      item ?? {
        label: "",
        done: false,
      }
    );
  };

  return (
    <MotionLink
      href={proj.link}
      target="_blank"
      rel="noopener noreferrer"
      className="current-project-card glass gradient-border"
      style={{
        "--accent": proj.color,
        "--accent-secondary": accentColor,
      }}
      whileHover={{
        y: -3,
        boxShadow: `0 20px 60px ${proj.color}25`,
        borderColor: `${proj.color}55`,
      }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
    >
      <div className="current-project-card__body">
        <div className="current-project-card__header">
          <div className="current-project-card__status-row">
            <div className="current-project-card__status-dot pulse-ring" />

            <span className="current-project-card__status-badge">
              {proj.progress === "In Progress" ? "In Progress" : "To Do"}
            </span>
          </div>

          <div className="current-project-card__icon">
            <FiArrowUpRight size={14} />
          </div>
        </div>

        <p className="current-project-card__tagline">{proj.tagline}</p>

        <h3 className="current-project-card__title">{proj.name}</h3>

        <p className="current-project-card__description">{proj.description}</p>

        <div className="current-project-card__tech-list">
          {proj.techstack.map((tech) => (
            <img
              key={tech}
              src={tech}
              alt=""
              className="current-project-card__tech-chip"
            />
          ))}
        </div>

        {proj.progress !== undefined && (
          <div className="current-project-card__progress">
            <div className="current-project-card__progress-header">
              <span className="current-project-card__progress-label">
                To Do List:
              </span>
            </div>

            <ul className="current-project-card__todo-list">
            {todos.map((item, key) => {
              const todoItem = parseTodoItem(item);

              return (
                <li key={key} className="current-project-card__todo-item">
                  <div
                    className={`current-project-card__todo-checkbox ${
                      todoItem.done
                        ? "current-project-card__todo-checkbox--done"
                        : ""
                    }`}
                  >
                    {todoItem.done && (
                      <span className="current-project-card__checkmark">✓</span>
                    )}
                  </div>

                  <span
                    className={`current-project-card__todo-label ${
                      todoItem.done
                        ? "current-project-card__todo-label--done"
                        : ""
                    }`}
                  >
                    {todoItem.label}
                  </span>
                </li>
              );
            })}
            </ul>
          </div>
        )}
      </div>
    </MotionLink>
  );
}
