import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { API_MAIN, API_SIGNUP } from '../constants/api';
import { signupInit, signupSuccess, signupFailure } from '../actions/index';
import '../styles/Signup.css';

const Signup = (
  {
    signupinit,
    signupsuccess,
    signupfailure,
    isLoading,
    errors,
  },
) => {
  const history = useHistory();
  const [state, setState] = useState({
    username: '',
    password: '',
    passwordConfirmation: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  };

  const {
    username, password, passwordConfirmation,
  } = state;

  const handleSubmit = event => {
    event.preventDefault();
    const user = {
      username,
      password,
      passwordConfirmation,
    };
    signupinit();
    axios.post(`${API_MAIN}${API_SIGNUP}`, { user }, { withCredentials: true })
      .then(response => {
        if (response.data.auth_token) {
          signupsuccess();
          sessionStorage.setItem('auth_token', response.data.auth_token);
          history.push('/houses');
        }
      })
      .catch(error => signupfailure(error));
  };

  const handleErrors = errors => (
    <div>
      <ul>
        {errors.map(error => <li key={error}>{error}</li>)}
      </ul>
    </div>
  );

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit} className="signup-form">
        <input
          placeholder="username"
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
        />
        <input
          placeholder="password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <input
          placeholder="password confirmation"
          type="password"
          name="passwordConfirmation"
          value={passwordConfirmation}
          onChange={handleChange}
        />

        <button placeholder="submit" type="submit">
          Sign Up
        </button>
      </form>
      {isLoading && <div>Please wait...</div>}
      <div>{errors ? handleErrors(errors) : null }</div>
    </div>
  );
};

Signup.propTypes = {
  signupinit: PropTypes.func.isRequired,
  signupsuccess: PropTypes.func.isRequired,
  signupfailure: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  errors: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

Signup.defaultProps = {
  isLoading: false,
};

const mapStateToProps = state => ({
  isLoading: state.signup.isLoading,
});

const mapDispatchToProps = dispatch => ({
  signupinit: () => dispatch(signupInit()),
  signupsuccess: () => dispatch(signupSuccess()),
  signupfailure: () => dispatch(signupFailure()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
