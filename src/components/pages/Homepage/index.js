import React, {Component} from "react";
import { BrowserRouter as Route, Switch} from "react-router-dom";
import Card from "../../Card/index.js";
import "../../Card/index.css";
import Websites from "../../../websites.json";
import Navbar from "../../Navbar/index.js";
import "../../Navbar/index.css";
import Footer from "../../Footer/index.js";
import "../../Footer/index.css"

function Homepage (props) {
  return (
    <div className="container">
      {Websites.map(Websites => (
      <Card
      image={Websites.image}
      tech={Websites.tech}
      url={Websites.url}
      />
      ))}
    </div>
  )
}

export default Homepage;