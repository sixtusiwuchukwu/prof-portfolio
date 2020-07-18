import React from "react";

import { NavLink } from "react-router-dom";

import { MdAddBox, MdQueue } from "react-icons/md";
import { RiLogoutCircleLine } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";

import "../../../styles/dashboardstyles/dashboardlayout.css";

const Dashboardlayout = (props) => {
  return (
    <div style={{ display: "flex" }}>
      <div className="sidepane small">
        {console}
        <li>
          <NavLink activeStyle={{ color: "yellow" }} to="/admin/dashboard">
            Admin Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink activeStyle={{ color: "yellow" }} to="/admin/additems">
            Additems
            <MdAddBox color="white" size="25px" />
          </NavLink>
        </li>

        <li>
          <NavLink
            activeStyle={{ color: "yellow" }}
            to="/admin/createcollection"
          >
            CreateCollection
            <MdQueue color="white" size="25px" />
          </NavLink>
        </li>

        <li>
          <NavLink
            activeStyle={{ color: "yellow" }}
            to="/admin/createcollection"
          >
            Settings
            <FiSettings color="white" size="25px" />
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={{ color: "yellow" }} to="/admin/login">
            Signout
            <RiLogoutCircleLine color="white" size="25px" />
          </NavLink>
        </li>
      </div>

      <div
        style={{
          width: "80%",
          // top: "-19px",
          height: "100vh",
          position: "relative",
        }}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Dashboardlayout;
