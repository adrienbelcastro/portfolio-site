import { useEffect, useState } from "react";
import { apiUrl } from "../../utils";
import { motion } from "motion/react";
import { fadeUp } from "../transitions/GlobalVariants";
import { stagger } from "../transitions/GlobalVariants";
import CurrentCard from "./CurrentCard";
import CompletedCard from "./CompletedCard";
import SectionLabel from "../section/SectionLabel";
import "./Projects.scss";

export default function Projects() {
  const [currentProjects, setCurrentProjects] = useState([]);
  const [completedProjects, setCompletedProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${apiUrl}/projects`);
        if (!response.ok) {
          throw new Error(`Server error! status: ${response.status}`);
        }
        const result = await response.json();

        const completed = result.filter(
          (project) => project.progress === "Completed",
        );

        const current = result.filter(
          (project) =>
            project.progress === "In Progress" || project.progress === "To-Do",
        );

        setCompletedProjects(completed);
        setCurrentProjects(current);
      } catch (requestError) {
        console.error("Unable to load projects:", requestError);
      }
    };
    fetchProjects();
  }, []);

  return (
    <section id="projects" className="projects">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel num="03" label="Projects" color="#f472b6" />
            </motion.div>

            <motion.div variants={fadeUp} className="projects__status-row">
              <div className="projects__status-dot" />
              <span className="projects__status-label font-display">
                Currently Building
              </span>
              <span className="projects__status-count font-mono">
                — {currentProjects.length} active
              </span>
            </motion.div>
            <div className="projects__grid projects__grid--current">
              {currentProjects.map((proj) => (
                <motion.div key={proj.id ?? proj.name} variants={fadeUp}>
                  <CurrentCard proj={proj} />
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp} className="projects__status-row">
              <div className="projects__status-dot projects__status-dot--muted" />
              <span className="projects__status-label font-display">
                Completed
              </span>
              <span className="projects__status-count font-mono">
                — {completedProjects.length} shipped
              </span>
            </motion.div>
            <div className="projects__grid projects__grid--completed">
              {completedProjects.map((proj) => (
                <motion.div key={proj.id ?? proj.name} variants={fadeUp}>
                  <CompletedCard proj={proj} />
                </motion.div>
              ))}
            </div>
          </motion.div>
    </section>
  );
}
