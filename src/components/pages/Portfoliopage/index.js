import React from "react";
import Websites from "../../../websites.json";
import Card from "../../Card/index.js";
import "../../Card/index.css";
import "./index.css";
import Footer from "../../Footer/index";


function Portfolio (props) {
  return (
  <div className="card-container">
    {Websites.map(Websites => (
    <Card
    image={Websites.image}
    tech={Websites.tech}
    tech2={Websites.tech2}
    tech3={Websites.tech3}
    tech4={Websites.tech4}
    githubUrl={Websites.githubUrl}
    name={Websites.name}
    url={Websites.url}
    description={Websites.description}
    />
    ))}
    <Footer />
  </div>
  );
  };

export default Portfolio;