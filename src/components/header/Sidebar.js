import React from "react";
import { elastic as Menu } from "react-burger-menu";
import "./Sidebar.scss";

function Sidebar() {
  return (
    <Menu
      burgerButtonClassName={"sidebar__burger-btn"}
      burgerBarClassName={"sidebar__burger-bars"}
      crossButtonClassName={"sidebar__cross-btn"}
      crossClassName={"sidebar__cross"}
      menuClassName={"sidebar__menu"}
      morphShapeClassName={"sidebar__morph-shape"}
      itemListClassName={"sidebar__item-list"}
      itemClassName={"sidebar__item"}
      overlayClassName={"sidebar__overlay"}
    >
      <a href="/" className="sidebar__links">
        About Me
      </a>

      <a href="/planner" className="sidebar__links">
        Projects
      </a>

      <a href="/country" className="sidebar__links">
        Contact
      </a>
    </Menu>
  );
}

export default Sidebar;
