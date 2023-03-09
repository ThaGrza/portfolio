import React from "react";
import Websites from "../../websites.json";
import Card from "../../components/Card/index";
import "../../components/Card/style.css";
import "./style.css";

interface Website {
  image?: string;
  tech?: string;
  tech2?: string;
  tech3?: string;
  githubUrl?: string;
  name?: string;
  url?: string;
  description?: string;
}
function Portfolio() {
  return (
    <div className="card-container">
      {Websites.map((Websites: Website) => (
        <Card
          image={Websites.image!}
          tech={Websites.tech!}
          tech2={Websites.tech2!}
          tech3={Websites.tech3!}
          githubUrl={Websites.githubUrl!}
          name={Websites.name!}
          url={Websites.url!}
          description={Websites.description!}
        />
      ))}
    </div>
  );
}

export default Portfolio;
