import React from "react";
import Card from "../../Card/index.js";
import "../../Card/index.css";
import Websites from "../../../websites.json";
import "./index.css";

function Homepage (props) {
  return (
    <div className="card-container">
      {Websites.map(Websites => (
      <Card
      tech={Websites.tech}
      url={Websites.url}
      name={Websites.name}
      />
      ))}
    </div>
  )
}

export default Homepage;