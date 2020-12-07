import React from "react";
import "./home.styles.css";
import About from "../About";
import Projects from "../Projects";
import Contact from "../Contact";
import Header from "../../components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className={"main"}>
        <nav className="header-container">
          <div className="background-shade">
            <div className="space" />
          </div>
        </nav>
        <div className="description">
          <h1 className="description-intro">HEY, AM PROF KEYS</h1>
          <h2>A GRAPHICS AND ANIMATION CREATOR</h2>
          <a href="#about" className="description-explore">
            KNOW MORE
          </a>
        </div>
        <center>
          <div className="explore-container">
            <div className="about-backdrop" id="about">
              <About />
            </div>
            <div id="projects">
              <Projects />
            </div>
            <div id={"contact"}>
              <Contact />
            </div>
          </div>
        </center>
        <footer className="footer">
          <div className="top-button">
            <a href="#top">top</a>
          </div>

          <center>
            <hr />
            <h6>@{new Date().getFullYear()} - All rights reserved</h6>
          </center>
        </footer>
      </div>
    </>
  );
};
export default Home;
