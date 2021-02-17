import axios from 'axios';
import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { API_MAIN, API_LOGIN } from '../constants/api';
import '../styles/Login.css';

const Login = () => {
  const history = useHistory();
  const [state, setState] = useState({
    username: '',
    password: '',
    errors: '',
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
    axios.post(`${API_MAIN}${API_LOGIN}`, { user }, { withCredentials: true })
      .then(response => {
        if (response.data.auth_token) {
          sessionStorage.setItem('auth_token', response.data.auth_token);
          history.push('/houses');
        } else {
          setState({
            errors: response.errors,
          });
        }
      })
      .catch(error => error);
  };

  const handleErrors = () => (
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

      <div>{errors ? handleErrors() : null }</div>
    </>
  );
};

export default Login;
