import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../layouts/Login';
import '../styles/Landing.css';
import logo from '../images/logo.png';

const LandingPage = () => (
  <div className="landing-container">
    <div className="landing-info">
      <div className="landing-logo-container">
        <img className="landing-logo" src={logo} alt="logo" />
      </div>
    </div>
    <div className="landing-login">
      <h3>Lets get started</h3>
      <Login />
      <div className="landing-signup-info">
        <p>Don&#39;t have an account?</p>
        <Link to="/signup">Signup</Link>
      </div>
    </div>
  </div>
);

export default LandingPage;
