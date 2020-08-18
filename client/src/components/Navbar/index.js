import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Navbar = props => (
  <div className="nav-container">
    <div className="page-title-container">
      <Link to="/" className="page-title"><h1>Andrew Griswold</h1></Link>
    </div>
    <div className="nav-links-container">
      <Link to="/about" className="nav-links"><h3>About Me</h3></Link>
      <Link to="/contact" className="nav-links"><h3>Contact</h3></Link>
    </div>
  </div>
);

export default Navbar;