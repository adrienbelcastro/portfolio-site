import video from "../../assets/videos/project-vid.mp4";
import { useState, useEffect } from "react";
import "../projects/Projects.scss";
import { Link } from "react-router-dom";

export default function Projects() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1279);
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="projects">
      <div className="projects__video-container">
        <video className="projects__video" autoPlay="autoplay" muted loop>
          <source src={video} type="video/mp4" />
        </video>
        <div className={`projects__overlay ${isDesktop ? "" : "active"}`}>
          <h2 className="projects__title">Momentum</h2>
          <p className="projects__description">
            Momentum is a recipe app designed to empower users to track their
            macro-nutrients while enjoying a diverse range of delicious meals.
            Whether you're striving for a healthier lifestyle or have specific
            dietary goals, this app provides a comprehensive platform to manage
            your nutritional intake. The site also features a unique article
            section into the app. Here, users can contribute their own recipes,
            share their culinary experiences, and engage in meaningful
            discussions with like-minded individuals. The tech stack I used to
            create this application was react for the front-end, node.js and
            express.js for the backend and mySql for the database.
          </p>
          <div className="projects__stack-container">
            <h2 className="projects__stack-title">Tech Stack:</h2>
            <img src="https://img.shields.io/badge/SASS-hotpink.svg?style=flat-square&logo=SASS&logoColor=white" />
            <img src="https://img.shields.io/badge/vercel-%23000000.svg?style=flat-square&logo=vercel&logoColor=white" />
            <img src="https://img.shields.io/badge/-Nodejs-black?style=flat-square&logo=Node.js" />
            <img src="https://img.shields.io/badge/-React-black?style=flat-square&logo=react" />
            <img src="https://img.shields.io/badge/-MySQL-black?style=flat-square&logo=mysql" />
          </div>
          <Link to="https://momentum-sigma.vercel.app/">
            <button className="projects__button-link">Go To Momentum</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
