import axios from 'axios';
import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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
      .catch(error => loginfailure(error));
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
      {isLoading && <div>Please wait...</div>}
      <div>{errors ? handleErrors(errors) : null }</div>
    </>
  );
};

Login.propTypes = {
  logininit: PropTypes.func.isRequired,
  loginsuccess: PropTypes.func.isRequired,
  loginfailure: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  errors: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

Login.defaultProps = {
  isLoading: false,
};

const mapStateToProps = state => ({
  isLoading: state.login.isLoading,
  errors: state.login.errors,
});

const mapDispatchToProps = dispatch => ({
  logininit: () => dispatch(loginInit()),
  loginsuccess: () => dispatch(loginSuccess()),
  loginfailure: () => dispatch(loginFailure()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
