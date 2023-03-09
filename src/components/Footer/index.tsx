import React from "react";
import "./style.css";

const Footer = () => (
  <footer className="footer-container">
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/ThaGrza"
    >
      <img
        className="social-icon"
        alt="https://github.com/ThaGrza"
        src="https://img.icons8.com/fluent/48/000000/github.png"
      />
    </a>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.linkedin.com/in/agriswold7/"
    >
      <img
        className="social-icon"
        alt="https://www.linkedin.com/in/agriswold7/"
        src="https://img.icons8.com/office/40/000000/linkedin.png"
      />
    </a>
    <p className="date">©{new Date().getFullYear()} Andrew Griswold</p>
  </footer>
);

export default Footer;
