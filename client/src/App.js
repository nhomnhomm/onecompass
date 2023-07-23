import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.scss';

import { Signup } from './components/Signup';
import { Login } from './components/Login';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <nav>
          <Link to="/signup">Sign Up</Link>
          <Link to="/">Login</Link>
        </nav> */}

        <Routes>
          <Route exact path="/" Component={Login} />
          <Route exact path="/signup" Component={Signup} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;