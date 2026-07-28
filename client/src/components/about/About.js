import { FaBook, FaCode, FaDatabase, FaWrench } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";
import { IoLayers } from "react-icons/io5";
import { motion } from "motion/react";
import SectionLabel from "../section/SectionLabel";
import { stagger, fadeUp } from "../transitions/GlobalVariants";
import "./About.scss";

export default function About() {
  const skillGroups = [
    {
      icon: FaCode,
      label: "Languages",
      color: "#a78bfa",
      items: [
        "Java",
        "C++",
        "Python",
        "JavaScript",
        "TypeScript",
        "SQL",
        "Golang/Go",
        "HTML5",
        "CSS",
      ],
    },
    {
      icon: IoLayers,
      label: "Frameworks",
      color: "#22d3ee",
      items: [
        "React",
        "Next.js",
        "Node.js",
        "Express",
        "Tailwind CSS",
        "Flask",
        "Spring Boot",
        "Redis",
        "Bootstrap",
      ],
    },
    {
      icon: FaDatabase,
      label: "Databases",
      color: "#f472b6",
      items: ["PostgreSQL", "Supabase", "Firebase", "MongoDB", "MySQL"],
    },
    {
      icon: FaWrench,
      label: "Tools",
      color: "#fb923c",
      items: [
        "Git",
        "Docker",
        "AWS",
        "Vercel",
        "Figma",
        "Kubernetes",
        "Google Cloud Platform",
        "CLoudflare Web Services",
        "Jira",
      ],
    },
    {
      icon: FaBook,
      label: "Libraries",
      color: "#8b1538",
      items: ["Pandas", "NumPy", "Matplotlib", "JUnit", "Jest", "Supertest"],
    },
  ];

  return (
    <section id="about" className="about">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
      >
        <motion.div variants={fadeUp}>
          <SectionLabel num="01" label="About" color="#a78bfa" />
        </motion.div>

        <div className="about__grid">
          <motion.div
            variants={fadeUp}
            className="about__card about__card--wide glass gradient-border glass-hover"
          >
            <h2 className="about__heading font-display">
              Hi, I&apos;m <span className="gradient-text">Adrien</span> —<br />
              software developer and systems engineer.
            </h2>
            <p className="about__copy">
              Currently studying Computer Science &amp; Business at Brock
              University. My journey into tech began in 2020 after spinning a
              startup idea that sparked my passion for software engineering.
              I&apos;ve shipped full production-ready applications and
              co-authored an academic paper measuring representation bias in
              embedded AI models under limited human supervision.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="about__card about__card--info glass gradient-border glass-hover"
          >
            <div
              className="about__badge"
              style={{
                background: "linear-gradient(135deg,#7c3aed40,#0891b240)",
              }}
            >
              <FiMapPin size={18} className="about__icon" />
            </div>
            <div>
              <p className="about__badge-label font-mono">Based in</p>
              <p className="about__badge-title font-display">Toronto, ON</p>
              <p className="about__badge-subtitle font-mono">Brock University</p>
              <p className="about__badge-meta">CS + Business</p>
            </div>
          </motion.div>

          {skillGroups.map((group) => (
            <motion.div
              key={group.label}
              variants={fadeUp}
              className="about__card about__card--skill glass gradient-border glass-hover"
            >
              <div className="about__skill-header">
                <div
                  className="about__skill-icon"
                  style={{ background: `${group.color}20` }}
                >
                  <group.icon size={16} style={{ color: group.color }} />
                </div>
                <span className="about__skill-label font-display">
                  {group.label}
                </span>
              </div>
              <div className="about__skill-list">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="about__skill-tag font-mono"
                    style={{
                      background: `${group.color}15`,
                      color: group.color,
                      border: `1px solid ${group.color}30`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
