import ScrollAnimation from "../transitions/ScrollAnimation";
import "./Card.scss";
import { Link } from "react-router-dom";

export default function ProjectCard(projectData) {
  return (
    <div className="card">
      <ScrollAnimation>
        <h2 className="card__title">{projectData.name}</h2>
        <p className="card__description">{projectData.description}</p>
        <div className="card__stack-container">
          <h2 className="card__stack-title">Tech Stack:</h2>
          {projectData.techstack.map((techstack) => (
            <img src={techstack} />
          ))}
        </div>

        <Link to={projectData.url} target="_blank">
          <button className="card__button-link">
            Go To {projectData.name}
          </button>
        </Link>
      </ScrollAnimation>
    </div>
  );
}
