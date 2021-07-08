import React from "react";
import "./index.css";
import { ProfilePic } from "./profilePic.png";

function Homepage () {
  return (
  <div className="homepage-container">
    <div className="headerContainer">
      <h1 className="nameHeader">I'm Andrew Griswold.</h1>
      <h3 className="headerSubtext">I am a fullstack software engineer based in Boston, Massachusetts</h3>
    </div>
    <div className="aboutMe">
      <h1 className="aboutHeader">About Me</h1>
      <img src={ProfilePic} alt="Profile" className="headshot" />
      <p className="aboutText">Hello im andrew griswold and this is my bio where i describe who i am and my passions</p>
    </div>
    <div className="edu">
      <h1 className="eduHeader">Education</h1>
      <p className="eduText">I went to college and highschool and UT bootcamp =)</p>
    </div>
    <div className="skills">
      <h1 className="skillsHeader">Skills & Experience</h1>
      <span className="skillsGraph"> SKILLS GRAPH </span>
    </div>
  </div>
  );
};

export default Homepage;
