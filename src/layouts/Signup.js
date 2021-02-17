import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const history = useHistory();
  const [state, setState] = useState({
    username: '',
    password: '',
    passwordConfirmation: '',
    errors: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  };

  const {
    username, password, passwordConfirmation, errors,
  } = state;

  const handleSubmit = event => {
    event.preventDefault();
    const user = {
      username,
      password,
      passwordConfirmation,
    };
    axios.post('http://localhost:3001/users', { user }, { withCredentials: true })
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
        {errors.map(error => <li key={error}>{error}</li>)}
      </ul>
    </div>
  );

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
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
      <div>
        {
          errors ? handleErrors() : null
        }
      </div>
    </div>
  );
};

// redirect = () => {
//   this.props.history.push('/');
// }

export default Signup;
