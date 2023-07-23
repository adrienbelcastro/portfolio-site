import video from "../../assets/videos/project-vid.mp4";
import { useState } from "react";

import "../projects/Projects.scss";

export default function Projects() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="projects">
      <div
        className="projects__video-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <video className="projects__video" autoPlay="autoplay" muted loop>
          <source src={video} type="video/mp4" />
        </video>
        {isHovered && (
          <div className="projects__overlay">
            <h2 className="projects__title">Momentum</h2>

            <p className="projects__description">
              Momentum is a recipe app designed to empower users to track their
              macro-nutrients while enjoying a diverse range of delicious meals.
              Whether you're striving for a healthier lifestyle or have specific
              dietary goals, this app provides a comprehensive platform to
              manage your nutritional intake. The site also features a unique
              article section into the app. Here, users can contribute their own
              recipes, share their culinary experiences, and engage in
              meaningful discussions with like-minded individuals.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
