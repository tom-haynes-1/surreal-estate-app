import React from 'react';
import NavBar from './NavBar';
import '../styles/app.css';

const App = () => (
  <div className="app">
    <header className="app-header">
      <NavBar />
    </header>
    <div className="header-container">
      <h1 className="app-title">Surreal Estate</h1>
    </div>
  </div>
);

export default App;
