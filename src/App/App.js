import React from 'react';
import logo from '../logo.svg';
import './App.css';
import Nav from '../Components/Nav/Nav'


function App() {
  return (
    <div className="App">
      <Nav />

      <header className="App-header">
        <p className="App-link">
          Harbour Hostel
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-link">
          Website Under Construction
        </p>
      </header>
    </div>
  );
}

export default App;
