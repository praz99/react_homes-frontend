/* eslint-disable camelcase */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import { signupCall } from '../utils/apiCalls';
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
    password_confirmation: '',
  });

  const baseState = state;

  const handleChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  };

  const resetForm = () => {
    setState({ ...baseState });
    history.push('/');
  };

  const handleErrors = errs => (
    <ul>
      {errs.map(err => <li key={err} className="error">{err.split(':')[1]}</li>)}
    </ul>
  );

  const {
    username, password, password_confirmation,
  } = state;

  const handleSubmit = event => {
    const pwCheck = document.getElementById('password-match-check');
    if (password !== password_confirmation) {
      const showPwErr = document.createElement('div');
      showPwErr.classList.add('error');
      showPwErr.innerHTML = 'Passwords not matching!';
      pwCheck.appendChild(showPwErr);
    } else {
      const user = {
        username,
        password,
        password_confirmation,
      };
      signupinit();
      signupCall(user)
        .then(response => {
          if (response.data.auth_token) {
            signupsuccess();
            localStorage.setItem('auth_token', response.data.auth_token);
            history.push('/houses');
          }
        })
        .catch(error => {
          signupfailure(error.response.data.message);
        });
    }
    event.preventDefault();
  };

  return (
    <div className="signup-container">
      <div className="signup-form-container">
        <h1>Create your account</h1>
        <form onSubmit={handleSubmit} className="signup-form">
          <input
            placeholder="username"
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
            required
          />
          <input
            placeholder="password"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
          <input
            placeholder="password confirmation"
            type="password"
            name="password_confirmation"
            value={password_confirmation}
            onChange={handleChange}
            required
          />

          <div className="signup-buttons">
            <button placeholder="submit" type="submit" className="signup-submit-button">
              Sign Up
            </button>
            <button placeholder="submit" type="button" className="signup-cancel-button" onClick={resetForm}>
              Cancel
            </button>
          </div>
        </form>
        {isLoading && <div><Loader type="ThreeDots" color="#6F1D1D" height={80} width={80} /></div>}
        <div className="password-match-check" id="password-match-check" />
        <div>{errors ? handleErrors(errors) : null }</div>
      </div>
    </div>
  );
};

Signup.propTypes = {
  signupinit: PropTypes.func.isRequired,
  signupsuccess: PropTypes.func.isRequired,
  signupfailure: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  errors: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

Signup.defaultProps = {
  isLoading: false,
  errors: [],
};

const mapStateToProps = state => ({
  isLoading: state.signup.isLoading,
  errors: state.signup.errors,
});

const mapDispatchToProps = dispatch => ({
  signupinit: () => dispatch(signupInit()),
  signupsuccess: () => dispatch(signupSuccess()),
  signupfailure: err => dispatch(signupFailure(err)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
/* eslint-enable camelcase */
