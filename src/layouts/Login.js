import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import { loginCall } from '../utils/apiCalls';
import { authInit, authSuccess, authFailureLogin } from '../actions/index';
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

  if (localStorage.getItem('auth_token')) {
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
    loginCall(user)
      .then(response => {
        if (response.data.auth_token) {
          loginsuccess();
          localStorage.setItem('auth_token', response.data.auth_token);
          history.push('/houses');
        }
      })
      .catch(error => loginfailure(error.response.data.message));
  };

  const handleErrors = errors => (
    <div>
      <ul>
        {errors.map(error => (
          <li key={error} className="error">{error}</li>
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
  isLoading: state.auth.isLoading,
  errors: state.auth.errors.loginErrors,
});

const mapDispatchToProps = dispatch => ({
  logininit: () => dispatch(authInit()),
  loginsuccess: () => dispatch(authSuccess()),
  loginfailure: err => dispatch(authFailureLogin(err)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
