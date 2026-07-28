import { motion, useMotionValue, useSpring } from "motion/react";
import ScrollAnimation from "../transitions/ScrollAnimation";
import SectionLabel from "../section/SectionLabel";
import "./Contact.scss";

const DURATION = 0.35;
const STAGGER = 0.03;

export default function Contact() {
  const isMobile = window.matchMedia("(max-width: 767px)").matches;
  return (
    <ScrollAnimation>
      <div className="contact">
        <SectionLabel num="04" label="Contact" color="#fb923c" />
        <div className="contact__racing">
          <FlipLink
            href="https://www.brockuformularacing.ca"
            external
            variant="team"
          >
            {isMobile ? "BrockU Racing" : "BrockU Formula Racing"}
          </FlipLink>

          <div className="contact__socials">
            <FlipLink
              href="https://www.linkedin.com/in/adrienbelcastro/"
              external
            >
              LinkedIn
            </FlipLink>

            <FlipLink href="https://github.com/adrienbelcastro" external>
              Github
            </FlipLink>

            <FlipLink href="mailto:adrienbelcastro@gmail.com">Contact</FlipLink>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
}

function FlipLink({ children, href, external = false, variant = "default" }) {
  const letters = String(children)
    .split("")
    .map((letter) => (letter === " " ? "\u00A0" : letter));

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 150,
    damping: 15,
  });

  const springY = useSpring(y, {
    stiffness: 150,
    damping: 15,
  });

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();

    const offsetX = e.clientX - rect.left - rect.width / 2;

    const offsetY = e.clientY - rect.top - rect.height / 2;

    x.set(offsetX * 0.08);
    y.set(offsetY * 0.08);
  }

  function resetPosition() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`contact__links contact__links--${variant}`}
      style={{
        x: springX,
        y: springY,
      }}
      initial="initial"
      whileHover="hovered"
      onMouseMove={handleMouseMove}
      onMouseLeave={resetPosition}
    >
      <div className="contact__front">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            className="contact__letter"
            variants={{
              initial: {
                rotateX: 0,
                opacity: 1,
              },

              hovered: {
                rotateX: -90,
                opacity: 0,
              },
            }}
            transition={{
              duration: DURATION,
              delay: index * STAGGER,
              ease: "easeInOut",
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>

      <div className="contact__hovered">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            className="contact__letter"
            variants={{
              initial: {
                rotateX: 90,
                opacity: 0,
              },

              hovered: {
                rotateX: 0,
                opacity: 1,
              },
            }}
            transition={{
              duration: DURATION,
              delay: index * STAGGER,
              ease: "easeInOut",
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
}
