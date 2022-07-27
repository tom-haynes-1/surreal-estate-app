import '../styles/app.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Properties from './Properties';
import AddProperty from './AddProperty';

const App = () => (
  <Router>
    <div className="app">
      <header className="app-header">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Properties} />
          <Route exact path="/add-property" component={AddProperty} />
        </Switch>
      </header>
      <div className="header-container">
        <h1 className="app-title">Surreal Estate</h1>
      </div>
    </div>
  </Router>
);

export default App;
