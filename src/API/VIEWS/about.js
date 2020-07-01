import React from "react";

import "../../styles/about.css";
import profkeys from "../../images/proffkeys.png";
const About = () => {
  return (
    <>
      <center>
        <div className="container">
          <div className="about-container">
            <div className="about-container-image">
              <img className="prof-image" src={profkeys} alt="profkeys" />
            </div>
            <div className="about-container-description">
              <h1 className="about-title">BIBILOGRAPHY OF PROF KEYZ</h1>
              <p>
                Prof Keyz, a graphic designer, animination creator, business
                advert video maker, and cartoon pics creator and Logo designer.
              </p>
              <p>
                As of the time of this publication, Prof keyz is an ND graduate
                of Federal Polytechnic Nekede while he studied Public
                Administration.
              </p>
              <p>
                As of the time of this publication, Prof keyz is an ND graduate
                of Federal Polytechnic Nekede while he studied Public
                Administration.
              </p>
              <p>
                Prof keyz believes in bring imaginations to creativity, he loves
                to try and create new innovations and new designs.
              </p>
              <p>
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
