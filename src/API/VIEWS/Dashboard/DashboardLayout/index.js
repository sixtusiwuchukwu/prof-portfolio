import React, { useEffect } from "react";
import "./dashboardLayout.style.css";
import { useQuery } from "@apollo/client";

import { useHistory, NavLink } from "react-router-dom";

import { ReduceWidth, ExtendWidth } from "../../../../helper/dashboard.helper";

import { MdAddBox, MdQueue } from "react-icons/md";
import { RiLogoutCircleLine } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";

import { RiHome4Line } from "react-icons/ri";

import {
  AiOutlineMenuUnfold,
  AiOutlineMenuFold,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";

import { GETCURRENTUSER } from "../../../graphql/Query";

import image from "../../../../images/proffkeys.jpg";

const Dashboardlayout = (props) => {
  const history = useHistory();
  // const[username,Setusername] = useState("")
  let username = null;

  const Logout = () => {
    window.sessionStorage.removeItem("token");
    window.sessionStorage.removeItem("local");
    history.push("/adminlogin");
  };
  const { error, loading, data: { getCurrentUser } = {} } = useQuery(
    GETCURRENTUSER
  );

  if (error) {
    console.log("error", error.message);
  }

  if (!loading && getCurrentUser) {
    window.sessionStorage.setItem("local", JSON.stringify(getCurrentUser));
    username = getCurrentUser.username;
  }

  useEffect(() => {}, []);

  return (
    <div style={{ display: "flex" }}>
      <div className="sidepane ">
        <li className="sidepane-li">
          <div className="open-close-btn-div">
            <AiOutlineMenuUnfold
              color="white"
              size="20px"
              onClick={ExtendWidth}
              display="none"
              className="extend-btn"
            />
            <AiOutlineMenuFold
              color="white"
              size="20px"
              onClick={ReduceWidth}
              className="reduce-btn"
            />
          </div>
        </li>
        <li className="sidepane-li">
          <div className="li-inner-container">
            <RiHome4Line
              color="white"
              size="25px"
              onClick={() => history.push("/")}
            />
            <NavLink activeStyle={{ color: "yellow" }} exact={true} to="/">
              Home
            </NavLink>
          </div>
        </li>
        <li className="sidepane-li">
          <div className="li-inner-container">
            <AiOutlineFundProjectionScreen
              color="white"
              size="25px"
              onClick={() => history.push("/admin/dashboard")}
            />
            <NavLink activeStyle={{ color: "yellow" }} to="/admin/dashboard">
              OverView
            </NavLink>
          </div>
        </li>

        <li className="sidepane-li">
          <div className="li-inner-container">
            <MdAddBox
              color="white"
              size="25px"
              onClick={() => history.push("/admin/additems")}
            />
            <NavLink activeStyle={{ color: "yellow" }} to="/admin/additems">
              Additems
            </NavLink>
          </div>
        </li>

        <li className="sidepane-li">
          <div className="li-inner-container">
            <MdQueue
              color="white"
              size="25px"
              onClick={() => history.push("/admin/createcollection")}
            />
            <NavLink
              activeStyle={{ color: "yellow" }}
              to="/admin/createcollection"
            >
              CreateCollection
            </NavLink>
          </div>
        </li>
        <li className="sidepane-li">
          <div className="li-inner-container">
            <FiSettings
              color="white"
              size="25px"
              onClick={() => history.push("/admin/createcollection")}
            />
            <NavLink activeStyle={{ color: "yellow" }} to="/admin/profile">
              Settings
            </NavLink>
          </div>
        </li>
        <li className="sidepane-li">
          <div className="li-inner-container">
            <RiLogoutCircleLine color="white" size="25px" onClick={Logout} />
            <a href="/adminlogin" onClick={Logout}>
              Signout
            </a>
          </div>
        </li>
        <li className="sidepane-li">
          <div className="li-inner-container">
            <a href="/admin/profile" className="profile-image-atag">
              <img
                src={image}
                alt="profileimage"
                className="layout-profile-image"
              />
            </a>
            <a className="profile-image-text" href="/admin/profile">
              {username}
            </a>
          </div>
        </li>
      </div>

      <div className="body-content">{props.children}</div>
    </div>
  );
};

export default Dashboardlayout;
