import React from "react";
import { Link } from "react-router-dom";

const Navbar = props => (
  <div className="nav-container">
    <h1 className="page-title">AGRISWOLD.COM</h1>
    <li className="navbar-link">
      <Link to="/about">About Me</Link>
    </li>
    <li className="navbar-link">
      <Link to="/contact">Contact</Link>
    </li>
  </div>
);

export default Navbar;