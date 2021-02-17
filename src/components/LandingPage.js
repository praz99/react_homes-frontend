import React from 'react';
import { Link } from 'react-router-dom';
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
      <p>Lets get started</p>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
    </div>
  </div>
);

export default LandingPage;
