import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "../../styles/home.css";

import { SampleContext } from "../context/globalState";

const Header = () => {
  const { activeuser } = useContext(SampleContext);
  return (
    <div>
      <ul className="list-container">
        <li>
          <NavLink to="/" exact activeStyle={{ color: "yellow" }}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/Projects" activeStyle={{ color: "yellow" }}>
            projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeStyle={{ color: "yellow" }}>
            Contact
          </NavLink>
        </li>

        <li>
          <NavLink to="/About" activeStyle={{ color: "yellow" }}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/dashboard" activeStyle={{ color: "yellow" }}>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            className="currentuser"
            to="/admin/profile"
            activeStyle={{ color: "yellow" }}
          >
            {activeuser.email}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
