import React from 'react';
import Homepage from "./components/pages/Homepage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Aboutme from './components/pages/Aboutme';
import Navbar from "./components/Navbar/index";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/about" component={Aboutme} />
      </div>
    </Router>
  )
}

export default App;
