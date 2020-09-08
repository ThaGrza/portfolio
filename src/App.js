import React from 'react';
import Homepage from "./components/pages/Homepage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Portfolio from './components/pages/Portfoliopage';
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";
import Contact from "./components/pages/Contact/index";




function App() {
  return (
    <Router>
      <div className="parent-container">
        <Navbar />
        <Route exact path="/" component={Homepage} />
        <Route exact path="/Portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Footer/>
      </div>
    </Router>
  )
}

export default App;
