/* eslint-disable camelcase */

import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import { API_MAIN, API_APPOINTMENT, API_HOUSES } from '../constants/api';
import '../styles/Appointment.css';

const Appointment = () => {
  const { house_id } = useParams();
  const history = useHistory();
  const [state, setState] = useState({
    date: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  };

  const { date } = state;

  const handleSubmit = event => {
    event.preventDefault();
    axios.post(
      `${API_MAIN}${API_HOUSES}${house_id}${API_APPOINTMENT}`,
      { date },
      { headers: { Authorization: `${sessionStorage.getItem('auth_token')}` } },
      { withCredentials: true },
    ).then(response => {
      console.log(response);
      setTimeout(() => history.push(`/houses/${house_id}`), 5000);
    }).catch(error => error);
  };

  return (
    <>
      <div>Please choose a date and time for the appointment.</div>
      <form onSubmit={handleSubmit} className="appointment-form">
        <input type="datetime-local" name="date" placeholder="date" value={state.date} onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Appointment;
