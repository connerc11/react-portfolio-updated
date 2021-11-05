import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import About from "./components/About";

import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import "./App.css";


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        {/* <Switch> */}
          <header>
            <Navbar />

            <div className="portfolio-content">
              <Route component={About} path="/" exact />
              <Route path="/About" component={About} />
              <Route path="/Contact" component={Contact} />
              <Route path="/Resume" component={Resume} />
              <Route path="/Portfolio" component={Portfolio} />
            </div>
          </header>
        {/* </Switch> */}
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
