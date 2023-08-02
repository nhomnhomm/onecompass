import React, { useState } from 'react';
import userService from '../services/users';
import "../App.scss";
import { redirect } from 'react-router-dom';

import { connect } from 'react-redux'
import { logout } from '../reducers/AuthReducer'


const Profile = (props) => {
  // Simulated user data
  const userData = {
    pictureUrl: 'path/to/picture.jpg',
    username: 'uyentulinhfuv',
    major: 'Computer Science',
    cohort: '2025',
  };

  // State for modals (logout, reset password, delete account)
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showResetPasswordModal, setShowResetPasswordModal] = useState(false);
  const [showDeleteAccountModal, setShowDeleteAccountModal] = useState(false);
  console.log(showDeleteAccountModal)

  const handleLogout = () => {
    redirect('/'); // Redirect to the main page
    props.logout(); // Dispatch the logout action (assuming this clears the authentication state)
    userService.destroyToken(); // Destroy the token
    window.localStorage.removeItem('loggedUser'); // Remove user from localStorage
  };

  const handleResetPassword = () => {
    // Logic for resetting password
    
  };

  const handleDeleteAccount = () => {
    // Logic for deleting account
    setShowDeleteAccountModal(true)
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <p className="webName text-center">ONECOMPASS</p>
          Once upon a time, there was a lovely web named OneCompass.
          It offered a personalized roadmap, tracking progress and efficient course planning.
          It empowered students to make informed decisions and stay on track for timely degree completion.
          Say goodbye to confusing course planning, join the adventure, and let OneCompass guide you to academic excellence!
        </div>
        <div className="col-4 profile-column">
          <div className="profile-container">
            <img src={userData.pictureUrl} alt="Profile" className="profile-picture" />
            <h2>{userData.username}</h2>
            <p>Major: {userData.major}</p>
            <p>Cohort: {userData.cohort}</p>
          </div>
          <div className="profile-actions">
            <button onClick={() => setShowLogoutModal(true)}>Log Out</button>
            <button onClick={() => setShowResetPasswordModal(true)}>Reset Password</button>
            <button onClick={() => setShowDeleteAccountModal(true)}>Delete Account</button>
          </div>
                {/* Modals for actions */}
          {showLogoutModal && (
            <div className="modal">
              <p>Are you sure you want to log out?</p>
              <button className='btn-primary' onClick={handleLogout}>Yes</button>
              <button className='btn-primary' onClick={() => setShowLogoutModal(false)}>Cancel</button>
            </div>
          )}
          {showResetPasswordModal && (
            <div className="modal">
              {/* Password reset form */}
              {/* Buttons for resetting password */}
            </div>
          )}
          {showDeleteAccountModal && (
          <div className="modal"  role="dialog">
            <p>Are you sure you want to delete your account?</p>
            <button className='btn-primary' onClick={handleDeleteAccount}>Yes</button>
            <button className='btn-primary' onClick={() => setShowDeleteAccountModal(false)}>Cancel</button>
          </div>
          )}
        </div>
      </div>
    </div>
  ); 
};

const mapStateToProps = (state) => {
  return {
      user: state.user,
  }
}

const mapDispatchToProps = { logout }

const ConnectedProfile = connect(mapStateToProps, mapDispatchToProps)(Profile)

export default ConnectedProfile;
