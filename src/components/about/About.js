import React from "react";
import photo from "../../assets/images/profile.jpg";
import "../about/About.scss";

export default function About() {
  return (
    <div className="about">
      <h1 className="about__intro">Hello My Name Is Adrien...</h1>
      <div className="about__content">
        <img className="about__photo" src={photo} alt="Adrien" />
        <p className="about__blurb">
          I'm a business student and tech entrepreneur transitioning into the
          software development industry 📱 I started my journey at the end of
          2022 and I just finished a software engineering boot camp at
          BrainStation 🏛. I love learning and am passionate about developing my
          skills as a developer💡. I am fascinated by new technologies and
          leveraging them to solve real-life problems and build scalable
          applications 🧐. I hope to soon return to the tech space to build and
          scale another startup👨🏻‍💻.
        </p>
      </div>
    </div>
  );
}
