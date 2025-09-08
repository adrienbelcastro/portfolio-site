import React from "react";
import photo from "../../assets/images/profile.jpg";
import ScrollAnimation from "../transitions/ScrollAnimation";
import "./About.scss";

export default function About() {
  return (
    <ScrollAnimation>
      <div className="about">
        <div className="about__content">
          <img className="about__photo" src={photo} alt="Adrien" />
          <div>
            <h1 className="about__title"> My Name Is Adrien...</h1>
            <p className="about__blurb">
              💻 I’m currently studying Computer Science & Business at Brock
              University. My journey into tech began in late 2022 after pursuing
              a startup idea, which sparked my passion for software engineering.
              Since then, I’ve completed a Software Engineering Bootcamp and
              have been building production-ready applications with modern
              stacks such as React and Next.js.
            </p>
            <p className="about__blurb">
              📖 I also had the opportunity to contribute to academic research,
              co-authoring a published paper that measured representational bias
              in embedded AI models under limited human supervision. These
              experiences have strengthened both my technical expertise and my
              curiosity for how emerging technologies can be applied to
              real-world problems.
            </p>
            <p className="about__blurb">
              🚀 With a foundation in business strategy and software
              engineering, I bring a unique perspective to problem-solving. I’m
              passionate about continuous learning, developing scalable
              applications, and ultimately leveraging my skills to launch and
              grow technology ventures that drive meaningful impact.
            </p>
            <h1 className="about__title"> My Technical Skills</h1>
            <div className="about__stack">
              <h3 className="about__title">Languages:</h3>
              <img
                src="https://img.shields.io/badge/-HTML5-black?style=flat-square&logo=html5&logoColor=white"
                alt="Html badge"
              />
              <img
                src="https://img.shields.io/badge/-CSS3-black?style=flat-square&logo=css3"
                alt="CSS badge"
              />

              <img
                src="https://img.shields.io/badge/java-black.svg?style=flat-square&logo=openjdk&logoColor=white"
                alt="Java badge"
              />

              <img
                src="https://img.shields.io/badge/python-black?style=flat-square&logo=python&logoColor=ffdd54"
                alt="Python badge"
              />

              <img
                src="https://img.shields.io/badge/-JavaScript-black?style=flat-square&logo=javascript"
                alt="JS badge"
              />

              <img
                src="https://img.shields.io/badge/-TypeScript-black?style=flat-square&logo=typescript"
                alt="TS badge"
              />
              <img
                src="https://img.shields.io/badge/go-black?style=flat-square&logo=go&logoColor=white"
                alt="TS badge"
              />
            </div>
            <div className="about__stack">
              <h3 className="about__title">Frameworks/Libraries:</h3>
              <img
                src="https://img.shields.io/badge/SASS-black.svg?style=flat-square&logo=SASS&logoColor=white"
                alt="SASS badge"
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
                src="https://img.shields.io/badge/-Nextjs-black?style=flat-square&logo=Next.js"
                alt="NextJs badge"
              />
              <img
                src="https://img.shields.io/badge/-tailwindcss-black?style=flat-square&logo=tailwindcss"
                alt="Tailwind badge"
              />
            </div>
            <div className="about__stack">
              <h3 className="about__title">Database Services:</h3>
              <img
                src="https://img.shields.io/badge/-PostgreSQL-black?style=flat-square&logo=postgresql"
                alt="PostgreSql badge"
              />
              <img
                src="https://img.shields.io/badge/-Supabase-black?style=flat-square&logo=supabase"
                alt="Supabase badge"
              />
            </div>
            <div className="about__stack">
              <h3 className="about__title">Tools/Platforms:</h3>
              <img
                src="https://img.shields.io/badge/-Git-black?style=flat-square&logo=git"
                alt="Git badge"
              />
              <img
                src="https://img.shields.io/badge/-MySQL-black?style=flat-square&logo=mysql"
                alt="MYSQL badge"
              />
              <img
                src="https://img.shields.io/badge/-GitHub-black?style=flat-square&logo=github"
                alt="Github badge"
              />
              <img
                src="https://img.shields.io/badge/vercel-%23000000.svg?style=flat-square&logo=vercel&logoColor=white"
                alt="Vercel badge"
              />
            </div>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
}
