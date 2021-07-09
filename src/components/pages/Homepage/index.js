import React from "react";
import "./index.css";
import profilePic from "./profilePic.png";
import SkillsList from "../../../skillList.json"; 
import Skill from "../../Skill/index.js";
// import Footer from "../../Footer/index.js";

function Homepage () {
  return (
  <div className="homepage-container">
    <div className="headerContainer">
      <h1 className="nameHeader">I'm Andrew Griswold.</h1>
      <h3 className="headerSubtext">A fullstack software engineer based in Boston, Massachusetts</h3>
    </div>
    <div className="aboutMe">
      <h1 className="aboutHeader">About Me</h1>
      <img src={profilePic} alt="Profile" className="headshot" />
      <p className="aboutText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>
    </div>
    <div className="edu">
      <h1 className="eduHeader">Education</h1>
      <ul className="eduInfo">
        <li className="listElement">Exeter High School</li>
        <li className="listElement">Austin Community College</li>
        <li className="listElement">UT Bootcamp</li>
      </ul>
    </div>
    <div className="skills">
      <h1 className="skillsHeader">Skills & Experience</h1>
      <div className="skillBars">
        {SkillsList.map(SkillsList => (
          <Skill
          title={SkillsList.title}
          value={SkillsList.vale}
          />
        ))}
      </div>
    </div>
    {/* <Footer /> */}
  </div>
  );
};

export default Homepage;