import "./Experience.scss";
import { useEffect, useState } from "react";
import { apiUrl } from "../../utils";
import { motion } from "motion/react";
import { fadeUp } from "../transitions/GlobalVariants";
import { stagger } from "../transitions/GlobalVariants";
import SectionLabel from "../section/SectionLabel";

export default function Experience() {
  const [experience, setExperience] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const response = await fetch(`${apiUrl}/experience`);
        if (!response.ok) {
          throw new Error(`Server error! status: ${response.status}`);
        }
        const result = await response.json();
        console.log(result);

        setExperience(result);
      } catch (err) {
        setError(err);
      }
    };
    fetchExperience();
  }, []);

  if (error) {
    return (
      <motion.div variants={fadeUp}>
        <section className="experience experience--loading" aria-live="polite">
          <SectionLabel num="02" label="Experience" color="#22d3ee" />
          <div className="experience__error glass gradient-border">
            <span className="experience__error-icon">!</span>
            <p className="experience__message font-mono">
              Unable to load experience: {error.message}
            </p>
          </div>
        </section>
      </motion.div>
    );
  }

  if (!experience) {
    return (
      <motion.div variants={fadeUp}>
        <section className="experience experience--loading" aria-live="polite">
          <SectionLabel num="02" label="Experience" color="#22d3ee" />
          <div className="experience__loading glass gradient-border">
            <span className="experience__spinner" />
            <p className="experience__message font-mono">Loading experience…</p>
          </div>
        </section>
      </motion.div>
    );
  }
  return (
    <section id="experience" className="experience">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
      >
        <motion.div variants={fadeUp}>
          <SectionLabel num="02" label="Experience" color="#22d3ee" />
        </motion.div>
        <div className="experience__timeline">
          <div
            className="experience__timeline-line"
            style={{
              background:
                "linear-gradient(to bottom,#7c3aed60,#0891b230,transparent)",
            }}
          />
          <div className="experience__list">
            {experience.map((exp) => (
              <motion.div
                key={exp.id ?? `${exp.company}-${exp.title}`}
                variants={fadeUp}
                className="experience__item"
              >
                <div
                  className="experience__marker"
                  style={{
                    background: `${exp.color}20`,
                    border: `1px solid ${exp.color}40`,
                  }}
                >
                  <div
                    className="experience__marker-dot"
                    style={{ background: exp.color }}
                  />
                </div>
                <div className="experience__card glass gradient-border glass-hover">
                  <div className="experience__card-header">
                    <div>
                      <h3 className="experience__title font-display">
                        {exp.title}
                      </h3>
                      <p
                        className="experience__company font-body"
                        style={{ color: exp.color }}
                      >
                        {exp.company}
                      </p>
                    </div>
                    <div className="experience__meta">
                      <p className="experience__period font-mono">
                        {exp.period}
                      </p>
                      <p className="experience__location font-mono">
                        {exp.location}
                      </p>
                    </div>
                  </div>
                  <ul className="experience__description-list">
                    {exp.description.map((description) => (
                      <li
                        key={description}
                        className="experience__description-item font-body"
                      >
                        <span
                          className="experience__bullet"
                          style={{ background: exp.color }}
                        />
                        {description}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
