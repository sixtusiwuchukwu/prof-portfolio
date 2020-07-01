import React from "react";
import { Link } from "react-router-dom";

import "../../styles/home.css";
const Home = () => {
  return (
    <>
      <nav className="header-container">
        <div className="background-shade">
          <div className="space" />
        </div>
      </nav>
      <div className="description">
        <h1 className="description-intro">HEY, AM PROF KEYS</h1>
        <h2>A GRAPHICS AND ANIMATION CREATOR</h2>
        <Link to="/contact" className="description-explore">
          HIRE ME
        </Link>
      </div>
    </>
  );
};
export default Home;
