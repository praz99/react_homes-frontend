import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const userStatus = sessionStorage.getItem('user_token');
  return (
    <div className="nav-container">
      <div className="nav-left">
        The Homes
      </div>
      <div className="nav-right">
        {userStatus && <div>Logout</div>}
      </div>
    </div>
  )
};

export default Navbar;