import axios from 'axios';
import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginInit, loginSuccess, loginFailure } from '../actions/index';
import { API_MAIN, API_LOGIN } from '../constants/api';
import '../styles/Login.css';

const Login = ({ loginInit, loginSuccess, loginFailure, isLoading, errors }) => {
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

  const { username, password, errors } = state;

  const handleSubmit = event => {
    event.preventDefault();
    const user = {
      username,
      password,
    };
    loginInit();
    axios.post(`${API_MAIN}${API_LOGIN}`, { user }, { withCredentials: true })
      .then(response => {
        if (response.data.auth_token) {
          loginSuccess();
          sessionStorage.setItem('auth_token', response.data.auth_token);
          history.push('/houses');
        }
      })
      .catch(error => loginFailure(error));
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
        <input type="password" name="password" placeholder="password" value={state.password} onChange={handleChange} />
        <button type="submit" className="form-btn">Login</button>
      </form>
      {isLoading && <div>Loading...</div>}
      <div>{errors ? handleErrors(errors) : null }</div>
    </>
  );
};

const mapStateToProps = state => ({
  isLoading: state.login.isLoading,
  errors: state.login.errors,
});

const mapDispatchToProps = dispatch => ({
  loginInit: () => dispatch(loginInit),
  loginSuccess: () => dispatch(loginSuccess),
  loginFailure: () => dispatch(loginFailure),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
