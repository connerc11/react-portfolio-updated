import React from 'react';
// import logo from './logo.svg';
import Navbar from './components/Navbar/Nav';
import About from './components/About';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <main>
        <About></About>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
