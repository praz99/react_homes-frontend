import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const userStatus = sessionStorage.getItem('auth_token');
  const history = useHistory();

  const handleLogout = () => {
    sessionStorage.clear();
    history.push('/');
  };

  return (
    <div className="nav-container">
      <div className="nav-left">
        The Homes
      </div>
      <div className="nav-right">
        {
          userStatus && userStatus.length ? (
            <>
              <Link to="/profile">My Profile</Link>
              <button type="button" className="logout-button" onClick={handleLogout}>Logout</button>
            </>
          ) : null
        }
      </div>
    </div>
  );
};

export default Navbar;
