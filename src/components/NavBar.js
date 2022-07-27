import React from 'react';
import { Link } from 'react-router-dom';
import navBarLogo from '../logo/surreal-estate-logo.png';
import '../styles/navbar.css';

const NavBar = () => (
  <div className="navbar-container">
    <img className="navbar-logo" src={navBarLogo} alt="navigation bar logo" />
    <ul className="navbar-links">
      <Link className="navbar-links-item" to="/">
        View Properties
      </Link>
      <Link className="navbar-links-item" to="/add-property">
        Add a Property
      </Link>
    </ul>
  </div>
);

export default NavBar;
