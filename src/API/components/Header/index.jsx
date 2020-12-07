import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./header.styles.css";

import { SampleContext } from "../../Context";

import image1 from "../../../images/proffkeys.jpg";

const Header = () => {
  const token = window.sessionStorage.getItem("token");

  const { storage } = useContext(SampleContext);

  const { username } = storage ? storage : "";
  return (
    <div id="top">
      <ul className="list-container">
        <li>
          <NavLink
            className="atag"
            to="/"
            exact
            activeStyle={{ color: "wheat", fontWeight: 500 }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <a
            href="#projects"
            activeStyle={{ color: "orange" }}
            className="atag"
          >
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" activeStyle={{ color: "orange" }} className="atag">
            Contact
          </a>
        </li>

        <li>
          <a href="#about" activeStyle={{ color: "orange" }} className="atag">
            About
          </a>
        </li>
        {token ? (
          <div className="header-dashboard-container">
            <li>
              <NavLink
                to="/admin/dashboard"
                activeStyle={{ color: "orange" }}
                className="atag"
              >
                Dashboard
              </NavLink>
            </li>
            <div className="header-dashboard-profile-container">
              <a href="/admin/profile">
                <img
                  src={image1}
                  alt="profile"
                  className="header-profile-image"
                />
              </a>

              <h4 className="dashboard-user-text">{username}</h4>
            </div>
          </div>
        ) : (
          ""
        )}
      </ul>
    </div>
  );
};

export default Header;
