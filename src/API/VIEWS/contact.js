import React from "react";

import "../../styles/contact.css";
const Contact = () => {
  return (
    <>
      <div className="holder">
        <div className="media-contact-container">
          <h1>Contact Me From Below</h1>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://facebook.com/goodluck.echeodo"
          >
            <button className="facebook">FACEBOOK</button>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/@ProffesorKeyz"
          >
            <button className="twitter">TWITTER</button>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.me/239034395667"
          >
            <button className="whatsapp">WHATSAPP</button>
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://gmail.com/youngestprof72@gmail.com"
          >
            {" "}
            <button className="gmail">GMAIL</button>
          </a>
        </div>
      </div>
    </>
  );
};
export default Contact;
