import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"; 
import Content from "./components/Content";
import "./App.css"; // or "./Content.css"

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <MainContent /> */}
      <Content/>
    </div>
  );
}

export default App;
