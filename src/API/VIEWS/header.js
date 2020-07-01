import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/home.css";

const Header = () => {
  return (
    <div>
      <ul className="list-container">
        <li>
          <NavLink to="/" exact activeStyle={{ color: "yellow" }}>
            Home
          </NavLink>
          <NavLink to="/Projects" activeStyle={{ color: "yellow" }}>
            projects
          </NavLink>
          <NavLink to="/contact" activeStyle={{ color: "yellow" }}>
            Contact
          </NavLink>
          <NavLink to="/About" activeStyle={{ color: "yellow" }}>
            About
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
