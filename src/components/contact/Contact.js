import React from "react";
import ScrollAnimation from "../transitions/ScrollAnimation";
import "./Contact.scss";

export default function Contact() {
  return (
    <ScrollAnimation>
      <div className="contact">
        <ul className="contact__links-container">
          <h4 className="contact__name">Adrien Belcastro</h4>
          <p className="contact__break"> | </p>
          <a
            href="https://www.linkedin.com/in/adrienbelcastro/"
            className="contact__links"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/adrienbelcastro"
            className="contact__links"
          >
            Github
          </a>
          <a href="mailto:adrienbelcastro@gmail.com" className="contact__links">
            Contact
          </a>
        </ul>
      </div>
    </ScrollAnimation>
  );
}
