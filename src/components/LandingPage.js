import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../layouts/Login';
import '../styles/Landing.css';

const LandingPage = () => (
  <div className="landing-container">
    <div className="landing-info">
      <h1>Welcome to The Homes</h1>
      <p>Explore through the variety of houses.</p>
      <p>Find your dream house..</p>
      <p>Book an appointment and visit the house anytime you want...</p>
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
