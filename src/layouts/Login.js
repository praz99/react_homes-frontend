import axios from 'axios';
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const Login = () => {
  const [state, setState] = useState({
    username: '',
    password: '',
    errors: '',
  });

  if (sessionStorage.getItem('auth_token')) {
    return <Redirect to="/mainPage" />;
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
    axios.post('http://localhost:3001/auth/login', { user }, { withCredentials: true })
      .then(response => {
        if (response.data.auth_token) {
          sessionStorage.setItem('auth_token', response.data.auth_token);
          console.log(response.data.auth_token);
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
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="username" value={state.username} onChange={handleChange} required />
        <input type="password" name="password" placeholder="pssword" value={state.password} onChange={handleChange} />
        <button type="submit" className="form-btn">Login</button>
      </form>

      <div>{errors ? handleErrors() : null }</div>
    </>
  );
};

export default Login;
