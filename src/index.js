import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Particles from 'react-tsparticles';

const root = ReactDOM.createRoot(document.getElementById("root"));
window.onload = function() {
  Particles.init({
    selector: '.background'
  });
}
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
