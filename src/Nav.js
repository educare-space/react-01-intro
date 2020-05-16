import React from 'react';
import logo from './logo-white.png';
import './Nav.css';

function Nav() {
  return (
    <div className="Nav">
      <img src={logo} className="App-logo" alt="logo" />
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
    </div>
  );
}

export default Nav;
