import React from "react";
import Homepage from "./pages/Homepage/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Portfolio from "./pages/Portfoliopage";
import Navbar from "./components/Navbar/index";
import Contact from "./pages/Contact/index";
import { Particle } from "./components/Particle";

const App = () => {
  return (
    <Router>
      <div className="parent-container">
        <Navbar />
        <Particle />
        <Routes>
          {/* changed from exact path */}
          <Route path="/" element={<Homepage />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
