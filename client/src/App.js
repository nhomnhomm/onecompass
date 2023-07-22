import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import { Signup } from './Signup';
import { Login } from './Login';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/signup">Sign Up</Link>
          <Link to="/">Login</Link>
        </nav>

        <Routes>
          <Route exact path="/" Component={Login} />
          <Route exact path="/signup" Component={Signup} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;