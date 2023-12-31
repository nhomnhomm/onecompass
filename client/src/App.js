/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Navigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';

import userService from './services/users'
import { connect } from 'react-redux'
import { setUser } from './reducers/AuthReducer'

import Signup from './components/Signup';
import Login  from './components/Login';
import { ForgotPassword } from './components/ForgotPassword'
import NavBar from './components/NavBar'
import Profile from './components/Profile'
import { MajorMinor } from './components/MajorMinor';
import Exploratory from './components/Exploratory'
import Course from './components/Course';
import UpcomingTerm from './components/UpcomingTerm';
import RoadMap from './components/RoadMap'
import GPA from './components/GPA&Credits'

const App = (props) => {
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    console.log(loggedUserJSON)
    if (loggedUserJSON) {
        const user = JSON.parse(loggedUserJSON)
        props.setUser(user).then(userService.setToken(user.token))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (props.user === null) {
      return (
        <Router>
          <Routes>
            {/* Could improve by creating a page to announce the unauthenticated path */}
            {/* <Route path={"*"} element={ <Navigate replace to={ "/" }/> }/> */}
            <Route exact path="/" Component={Login} />
            <Route exact path="/forgotpassword" Component={ForgotPassword} />
            <Route exact path="/signup" Component={Signup} />
          </Routes>
      </Router>
      )
  }

  return (
    <div className="App">
      {/* <nav>
        <Link to="/signup">Sign Up</Link>
        <Link to="/">Login</Link>
      </nav> */}
      <Router>
          <NavBar/>
          <Routes>
            {/* <Route path={"*"} element={ <Navigate replace to={ "/" }/> }/> */}
            <Route path="/courses/:id" Component={Course}/>
            <Route exact path="/" Component={Profile} />
            <Route exact path="/profile" Component={Profile} />
            <Route exact path="/exploratory" Component={Exploratory} />
            <Route exact path="/majorminor" Component={MajorMinor} />
            <Route exact path="/upcomingterm" Component={UpcomingTerm} />
            <Route exact path="/roadmap" Component={RoadMap} />
            <Route exact path="/gpa" Component={GPA} />
          </Routes>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
      user: state.user
  }
}
const mapDispatchToProps = { setUser }

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)
export default ConnectedApp
