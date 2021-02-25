import axios from 'axios';
import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import { loginInit, loginSuccess, loginFailure } from '../actions/index';
import { API_MAIN, API_LOGIN } from '../constants/api';
import '../styles/Login.css';

const Login = (
  {
    logininit,
    loginsuccess,
    loginfailure,
    isLoading,
    errors,
  },
) => {
  const history = useHistory();
  const [state, setState] = useState({
    username: '',
    password: '',
  });

  if (sessionStorage.getItem('auth_token')) {
    return <Redirect to="/houses" />;
  }

  const handleChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  };

  const { username, password } = state;

  const handleSubmit = event => {
    event.preventDefault();
    const user = {
      username,
      password,
    };
    logininit();
    axios.post(`${API_MAIN}${API_LOGIN}`, { user }, { withCredentials: true })
      .then(response => {
        if (response.data.auth_token) {
          loginsuccess();
          sessionStorage.setItem('auth_token', response.data.auth_token);
          history.push('/houses');
        }
      })
      .catch(error => loginfailure(error.response.data.message));
  };

  const handleErrors = errors => (
    <div>
      <ul>
        {errors.map(error => (
          <li key={error}>{error}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <form onSubmit={handleSubmit} className="login-form">
        <input type="text" name="username" placeholder="username" value={state.username} onChange={handleChange} required />
        <input type="password" name="password" placeholder="password" value={state.password} onChange={handleChange} required />
        <button type="submit" className="form-btn">Login</button>
      </form>
      {isLoading && <div><Loader type="ThreeDots" color="#6F1D1D" height={80} width={80} /></div>}
      <div>{errors ? handleErrors(errors) : null }</div>
    </>
  );
};

Login.propTypes = {
  logininit: PropTypes.func.isRequired,
  loginsuccess: PropTypes.func.isRequired,
  loginfailure: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  errors: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

Login.defaultProps = {
  isLoading: false,
  errors: [],
};

const mapStateToProps = state => ({
  isLoading: state.login.isLoading,
  errors: state.login.errors,
});

const mapDispatchToProps = dispatch => ({
  logininit: () => dispatch(loginInit()),
  loginsuccess: () => dispatch(loginSuccess()),
  loginfailure: err => dispatch(loginFailure(err)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
