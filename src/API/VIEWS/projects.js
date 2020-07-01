import React from "react";
import { Link } from "react-router-dom";
import "../../styles/projects.css";
const Projects = () => {
  return (
    <div>
      {/* <h2></h2>   */}
      <center>
        <div className="sample-container">
          <div className="animation-container">
            <div className="sample-description">
              <h2>ANIMATIONS</h2>
              <Link to="/projects/animation">
                <button>view</button>
              </Link>
            </div>
          </div>
          <div className="graphics-container">
            <div className="sample-description">
              <h2>LOGO DESIGNS</h2>
              <Link to="/projects/logo">
                <button>view</button>
              </Link>
            </div>
          </div>{" "}
          <div className="cartoones-container">
            <div className="sample-description">
              <h2>CARTOONS</h2>
              <Link to="/projects/cartoons">
                <button>view</button>
              </Link>
            </div>
          </div>
        </div>
        <Link to="/projects/otherprojects">
          <button className="other-projects-btn">view other projects</button>
        </Link>
      </center>
    </div>
  );
};

export default Projects;
