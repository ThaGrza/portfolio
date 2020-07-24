import React from 'react';
import Homepage from "./components/pages/Homepage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Aboutme from './components/pages/Aboutme';
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";
import Contact from "./components/pages/Contact/index";
import "./components/Footer/index.css"
import "./components/Navbar/index.css";



function App() {
  return (
    <Router>
      <div className="parent-container">
        <Navbar />
        <Route exact path="/" component={Homepage} />
        <Route exact path="/about" component={Aboutme} />
        <Route exact path="/contact" component={Contact} />
        <Footer/>
      </div>
    </Router>
  )
}

export default App;
