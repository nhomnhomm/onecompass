/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';

import { Signup } from './components/Signup';
import { Login } from './components/Login';
import { ForgotPassword } from './components/ForgotPassword'
import { Profile } from './components/Profile'
import { MajorMinor } from './components/MajorMinor';

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
          <Route exact path="/profile" Component={Profile} />
          <Route exact path="/forgotpassword" Component={ForgotPassword} />
          <Route exact path="/signup" Component={Signup} />
          <Route exact path="/majorminor" Component={MajorMinor} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;