import React from "react";
import "./Hero.scss";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero__title-container">
        <h1 className="hero__title">Tech Entrepreneur.</h1>
        <h1 className="hero__title">Software Developer.</h1>
        <h1 className="hero__title">From Toronto, Ontario.</h1>
      </div>
      <div className="hero__align-container">
        <ul className="hero__links-container">
          <a href="/" className="hero__links">
            About Me
          </a>
          <a href="/" className="hero__links">
            Projects
          </a>
          <a href="/" className="hero__links">
            Contact
          </a>
        </ul>
      </div>
    </div>
  );
}
