import React from 'react';
import navBarLogo from '../logo/surreal-estate-logo.png';
import '../styles/navbar.css';

const NavBar = () => (
  <div className="navbar-container">
    <img className="navbar-logo" src={navBarLogo} alt="navigation bar logo" />
    <ul className="navbar-links">
      <li className="navbar-links-item" href="#" alt="view properties link">View Properties</li>
      <li className="navbar-links-item" href="#" alt="add a property link">Add a Property</li>
    </ul>
  </div>
);

export default NavBar;
