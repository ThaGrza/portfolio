import React from "react";
import Profilepic from "./profile2.png";
import "./index.css";
import ContactForm from "../Contact";
import Footer from "../../Footer/index";

function Homepage (props) {
  return (
  <div className="homepage-container">
    <div className="homepage">
    <img className="profile-pic" alt="🧙‍♂️" src={Profilepic}></img>
      <p>My name is Andrew Griswold and I am a 25 year old programmer. I currently live in Austin, Texas where I studied Computer Science, cybersecurity, and programming to become a full
stack developer. My passion for computers and science grew from curiosity I got from modding video games like Grand Theft Auto and playing classic nintendo-64 games like Mario as a kid. 
I love learning new technologies and challenging myself to create new things. You can see some open source projects I have created and worked on in the Portfolio tab, if you see anything
that interests you or you want to get in contact for any reason, feel free to send an email via the contact page!</p>
    </div>
    <Footer />
  </div>
  );
};
export default Homepage;
