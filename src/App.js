import React from 'react';
// import { BrowserRouter, Route, Switch } from "react-router-dom"
import Navbar from './components/Navbar/Nav';
import About from './components/About';
import './App.css';
import Footer from './components/Footer';
import Resume from './components/Resume';
import ContactForm from './components/Contact';

function App() {
  return (
  
    <div className="app">
      <Navbar></Navbar>
      <main>
        <About></About>
        <Resume></Resume>
      </main>
      <>
      <ContactForm></ContactForm>
      </>
      <Footer></Footer>
    </div>

  );
}

export default App;
