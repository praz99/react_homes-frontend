import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../images/logo.png';

const Navbar = () => {
  const userStatus = localStorage.getItem('auth_token');
  const history = useHistory();

  const handleLogout = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <div className="nav-container">
      <div className="nav-left">
        <Link to="/houses"><img src={logo} alt="logo" /></Link>
      </div>
      <div className="nav-right">
        {
          userStatus && userStatus.length ? (
            <>
              <a href="/profile" className="profile-button">My Profile</a>
              <button type="button" className="logout-button" onClick={handleLogout}>Logout</button>
            </>
          ) : null
        }
      </div>
    </div>
  );
};

export default Navbar;
