import Sidebar from "./Sidebar";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header">
        <ul className="header__desktop-navbar">
          <a href="/" className="header__desktop-ingredients">
            About Me
          </a>
          <a href="/" className="header__desktop-countries">
            Projects
          </a>
          <a href="/" className="header__desktop-random-recipe">
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
