import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

import { Signup } from './Signup';
import { Login } from './Login';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Sign Up</Link>
          <Link to="/login">Login</Link>
        </nav>

        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;