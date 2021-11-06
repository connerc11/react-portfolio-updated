import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import About from "./components/About";

import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
// import "./App.css";


function App() {
  // const [contactSelected, setContactSelected] = useState(false);
  return (
    <div className="app">
      <BrowserRouter>
        {/* <Switch> */}
          <header>
            <Navbar />

            <div className="portfolio-content">
              <Route component={Home} path="/" exact />
              <Route path="/Home" component={Home}/>
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
