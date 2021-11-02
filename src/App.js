import React from 'react';
// import logo from './logo.svg';
import Navbar from './components/Navbar/Navbar';
import About from './components/About';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
