import React from "react";
import photo from "../../assets/images/profile.jpg";
import { motion } from "framer-motion";
import ScrollAnimation from "../transitions/ScrollAnimation";
import "../about/About.scss";

export default function About() {
  return (
    <ScrollAnimation>
      <div className="about">
        <div className="about__content">
          <img className="about__photo" src={photo} alt="Adrien" />
          <div>
            <h1 className="about__title"> My Name Is Adrien...</h1>
            <p className="about__blurb">
              I'm a business student and tech entrepreneur transitioning into
              the software development industry 📱 I started my journey at the
              end of 2022 and I just finished a software engineering boot camp
              at BrainStation 🏛. I love learning and am passionate about
              developing my skills as a developer💡. I am fascinated by new
              technologies and leveraging them to solve real-life problems and
              build scalable applications 🧐. I hope to soon return to the tech
              space to build and scale another startup👨🏻‍💻.
            </p>
            <div className="about__stack">
              <h2 className="about__title"> My Current Tech Stacks</h2>
              <img
                src="https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white"
                alt="Html badge"
              />
              <img
                src="https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3"
                alt="CSS badge"
              />
              <img
                src="https://img.shields.io/badge/SASS-hotpink.svg?style=flat-square&logo=SASS&logoColor=white"
                alt="SASS badge"
              />
              <img
                src="https://img.shields.io/badge/vercel-%23000000.svg?style=flat-square&logo=vercel&logoColor=white"
                alt="Vercel badge"
              />
              <img
                src="https://img.shields.io/badge/-JavaScript-black?style=flat-square&logo=javascript"
                alt="JS badge"
              />
              <img
                src="https://img.shields.io/badge/-Nodejs-black?style=flat-square&logo=Node.js"
                alt="Node.js badge"
              />
              <img
                src="https://img.shields.io/badge/-React-black?style=flat-square&logo=react"
                alt="React badge"
              />
              <img
                src="https://img.shields.io/badge/-MySQL-black?style=flat-square&logo=mysql"
                alt="MYSQL badge"
              />
              <img
                src="https://img.shields.io/badge/-Git-black?style=flat-square&logo=git"
                alt="Git badge"
              />
              <img
                src="https://img.shields.io/badge/-GitHub-black?style=flat-square&logo=github"
                alt="Github badge"
              />
              <img
                src="https://img.shields.io/badge/-Nextjs-black?style=flat-square&logo=Next.js"
                alt="NextJs badge"
              />
              <img
                src="https://img.shields.io/badge/-TypeScript-black?style=flat-square&logo=typescript"
                alt="TS badge"
              />
              <img
                src="https://img.shields.io/badge/-tailwindcss-black?style=flat-square&logo=tailwindcss"
                alt="Tailwind badge"
              />
              <img
                src="https://img.shields.io/badge/-PostgreSQL-black?style=flat-square&logo=postgresql"
                alt="PostgreSql badge"
              />
              <img
                src="https://img.shields.io/badge/-Supabase-black?style=flat-square&logo=supabase"
                alt="Supabase badge"
              />
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "tween",
            ease: "linear",
            duration: 2,
            repeat: Infinity,
          }}
        >
          <p className="hero__cta">Click Me For A Surprise</p>
        </motion.div>
      </div>
    </ScrollAnimation>
  );
}
