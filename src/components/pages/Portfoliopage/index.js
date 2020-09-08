import React from "react";
import Websites from "../../../websites.json";
import Card from "../../Card/index.js";
import "../../Card/index.css";
import "./index.css";


function Portfolio (props) {
  return (
  <div className="card-container">
    {Websites.map(Websites => (
    <Card
    image={Websites.image}
    tech={Websites.tech}
    githubUrl={Websites.githubUrl}
    name={Websites.name}
    url={Websites.url}
    />
    ))}
  </div>
  );
  };

export default Portfolio;