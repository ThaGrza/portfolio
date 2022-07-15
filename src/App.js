import React from 'react';
import Homepage from "./components/pages/Homepage";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Portfolio from './components/pages/Portfoliopage';
import Navbar from "./components/Navbar/index";
import Contact from "./components/pages/Contact/index";




function App() {
  return (
    <Router>
      <div className="parent-container">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/Portfolio" element={<Portfolio />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
