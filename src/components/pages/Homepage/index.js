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
    </div>
    <div className="aboutMe">
      <h1 className="aboutHeader">About Me</h1>
      <img src={profilePic} alt="Profile" className="headshot" />
      <p className="aboutText">I am a fullstack web developer based in Boston, Massachusetts.
I love coding and turning great ideas into a reality. I am passionate about learning new technologies
to help myself grow as a developer.
I learned the basics of programming from Austin Community College and went on to learn full stack web development
through a bootcamp at The University of Texas at Austin. I continued learning fullstack development on my own while building 
various websites and apps.
I am currently freelancing and contributing to open source as I look for more perminent opportunities.
      </p>
    </div>
    <div className="edu">
      <h1 className="eduHeader">Education</h1>
      <div className="eduInfo">
        <h2 className="eduItem">University of Texas at Austin</h2>
        <h4 className="eduSubtext">Fullstack Web Developer certificate • 2019-2020</h4>
        <h2 className="eduItem">Austin Community College</h2>
        <h4 className="eduSubtext">Associates of Computer Science • 2018-2020</h4>
      </div>
    </div>
    <div className="skills">
      <h1 className="skillsHeader">Skills & Experience</h1>
      <div className="skillBars">
        {SkillsList.map(SkillsList => (
          <Skill
          title={SkillsList.title}
          value={SkillsList.value}
          />
        ))}
      </div>
    </div>
    {/* <Footer /> */}
  </div>
  );
};

export default Homepage;