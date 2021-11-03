import React from 'react';
// import { BrowserRouter, Route, Switch } from "react-router-dom"
import Navbar from './components/Navbar/Nav';
import About from './components/About';
import './App.css';
import Footer from './components/Footer';
import Resume from './components/Resume';

function App() {
  return (
  
    <div className="app">
      <Navbar></Navbar>
      <main>
        <About></About>
        <Resume></Resume>
      </main>
      <Footer></Footer>
    </div>

  );
}

export default App;
