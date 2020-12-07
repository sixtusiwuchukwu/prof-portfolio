import React from "react";
import "./contact.styles.css";

const Contact = () => {
  return (
    <>
      <div className="holder">
        <center>
          <h1 id="contactme">CONTACT ME </h1>
          <div className="media-contact-container">
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
        </center>
      </div>
    </>
  );
};
export default Contact;
