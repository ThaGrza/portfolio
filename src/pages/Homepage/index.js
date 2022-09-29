import React from "react";
import "./index.css";
import profilePic from "../../assets/images/profilePic.png";
import utimage from "../../assets/images/UT.png";
import accimage from "../../assets/images/acc.png";

function Homepage () {
  return (
  <div className="homepage-container">
    <div className="headerContainer">
      <h1 className="nameHeader">Hello, my name is Andrew.</h1>
      <p className="name-title-header"> Fullstack Web Developer</p>
    </div>
    <div className="aboutMe">
      <h1 className="edu-title section-header">About Me</h1>
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
      <h1 className="edu-title section-header">Education</h1>
      <div className="edu-item1">
        <img className="edu-item1-image" alt="UT" src={utimage}/>
        <h2 className="edu-school" >University of Texas at Austin</h2>
        <h4 className="edu-info">Fullstack Web Developer certificate • 2019-2020</h4>
      </div>
      <div className="edu-item2">
        <img className="edu-item2-image" alt="ACC" src={accimage}/>
        <h2 className="edu-school">Austin Community College</h2>
        <h4 className="edu-info">Computer Science • 2018-2020</h4>
      </div>
    </div>
    <div className="skills">
      <h1 className="section-header">Skills & Experience</h1>
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
