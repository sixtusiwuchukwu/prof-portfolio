import React from "react";

import "./about.styles.css";

import profkeys from "../../../images/proffkeys.jpg";
const About = () => {
  return (
    <>
      <center>
        <div className="abt-container">
          <h2 id="about-head">ABOUT ME</h2>
          <div className="about-container">
            <div className="about-container-image">
              <img className="prof-image" src={profkeys} alt="profkeys" />
            </div>
            <div className="about-container-description">
              <p style={{ fontFamily: "sans-serif", textAlign: "left" }}>
                Prof Keyz, a graphic designer, animination creator, business
                advert video maker, and cartoon pics creator and Logo designer.
                As of the time of this publication, Prof keyz is an ND graduate
                of Federal Polytechnic Nekede while he studied Public
                Administration.
              </p>
              <p style={{ fontFamily: "sans-serif", textAlign: "left" }}>
                As of the time of this publication, Prof keyz is an ND graduate
                of Federal Polytechnic Nekede while he studied Public
                Administration.
                {/* </p>
            <p> */}
                Prof keyz believes in bring imaginations to creativity, he loves
                to try and create new innovations and new designs.
              </p>
              <p style={{ fontFamily: "sans-serif", textAlign: "left" }}>
                Prof Keyz has gotten wide range experience of designs and has
                coached many youths in mastering designs and animination
                creation.
              </p>
            </div>
          </div>
        </div>
      </center>
    </>
  );
};
export default About;
