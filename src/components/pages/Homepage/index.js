import React from "react";
import "./index.css";
import profilePic from "./profilePic.png";
// import Footer from "../../Footer/index.js";

function Homepage () {
  return (
  <div className="homepage-container">
    <div className="headerContainer">
      <h1 className="nameHeader">Hello, my name is Andrew.</h1>
      <p className="name-title-header"> Fullstack Web Developer</p>
    </div>
    <div className="aboutMe">
      <h1 className="aboutHeader">About Me</h1>
      <img src={profilePic} alt="Profile" className="headshot" />
      <div className="about-text-container">
        <p className="aboutText">I am a fullstack web developer based in Bedford, New Hampshire.
  I love coding and turning great ideas into a reality. I am passionate about learning new technologies
  to help myself grow as a developer.
  I learned the basics of programming from Austin Community College and went on to learn full stack web development
  through a bootcamp at The University of Texas at Austin. I continued learning fullstack development on my own while building 
  various websites and apps.
  I am currently freelancing and contributing to open source as I look for more perminent opportunities.
        </p>
      </div>
    </div>
    <div className="edu">
      <h1 className="eduHeader">Education</h1>
      <div className="eduInfo">
        <h2 className="eduItem">University of Texas at Austin</h2>
        <h4 className="eduSubtext">Fullstack Web Developer certificate • 2019-2020</h4>
        <h2 className="eduItem">Austin Community College</h2>
        <h4 className="eduSubtext">2018-2020</h4>
      </div>
    </div>
    <div className="skills">
      <h1 className="skillsHeader">Skills & Experience</h1>
      <div className="experienceContainer">
        <p className="experienceStory">This is a story about some of the stuff ive done</p>
        <p className="experienceStory">Omg heres another one about this super cool thing</p>
        <p className="experienceStory">Wow everything im typing is relatively the same length</p>
        <p className="experienceStory">This is about I did something and Learned something</p>
        <p className="experienceStory">Ok this is the last thing ive learned im all out</p>
      </div>
    </div>
    {/* <Footer /> */}
  </div>
  );
};

export default Homepage;
