import React from 'react';
import Card from "./components/Card";
import "./components/Card/index.css";
import Websites from "./websites.json";
import Navbar from "./components/Navbar";
import "./components/Navbar/index.css";
import Footer from "./components/Footer";
import "./components/Footer/index.css"


function App() {
  return (
    <div className="container">
      <Navbar />
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

export default App;
