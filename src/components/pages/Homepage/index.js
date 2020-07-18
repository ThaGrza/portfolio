import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Card from "../../Card/index.js";
import "../../Card/index.css";
import Websites from "../../../websites.json";
import Navbar from "../../Navbar/index.js";
import "../../Navbar/index.css";
import Footer from "../../Footer/index.js";
import "../../Footer/index.css"
import Aboutme from "../Aboutme/index.js";
import Homepage from "../Homepage/index.js";



export default class Home extends Component {
  render() {
    return (
    <div className="container">
      <Router>
        <Navbar>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/about" component={Aboutme} />
          </Switch>
        </Navbar>
      </Router>
      {Websites.map(Websites => (
      <Card
      image={Websites.image}
      tech={Websites.tech}
      url={Websites.url}
      />
      ))}
      <Footer />
    </div>
  );
  }
}