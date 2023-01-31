import React from "react";
import Websites from "../../websites.json";
import Card from "../../components/Card/index.js";
import "../../components/Card/index.css";
import "./index.css";

function Portfolio(props) {
  return (
    <div className="card-container">
      {Websites.map((Websites) => (
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
    </div>
  );
}

export default Portfolio;
