import Sidebar from "./Sidebar";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header">
        <ul className="header__desktop-navbar">
          <a href="/" className="header__desktop-about-me">
            About Me
          </a>
          <a href="/" className="header__desktop-projects">
            Projects
          </a>
          <a href="/" className="header__desktop-contact">
            Contact
          </a>
        </ul>
      </div>
      <div className="header__sidebar">
        <Sidebar
          pageWrapId={"page-wrap"}
          outerContainerID={"outer-container"}
        />
      </div>
    </>
  );
};

export default Header;
