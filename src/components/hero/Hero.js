import React from "react";
import "./Hero.scss";

export default function Hero() {
  return (
    <div className="hero">
      <img
        className="hero__thumbnail"
        src="https://media.giphy.com/media/hugQmENCWTyPM3yG5D/giphy-downsized-large.gif"
      />
      <div className="hero__title-container">
        <h1 className="hero__title">Tech Entrepreneur.</h1>
        <h1 className="hero__title">Software Developer.</h1>
        <h1 className="hero__title">From Toronto, Ontario.</h1>
      </div>
      <div>
        <ul className="hero__links-container">
          <a href="/" className="header__links">
            About Me
          </a>
          <a href="/" className="header__links">
            Projects
          </a>
          <a href="/" className="header__links">
            Contact
          </a>
        </ul>
      </div>
    </div>
  );
}
