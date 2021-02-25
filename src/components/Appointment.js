/* eslint-disable camelcase */

import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
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
      { headers: { Authorization: `${localStorage.getItem('auth_token')}` } },
      { withCredentials: true },
    ).then(response => {
      console.log(response);
      setTimeout(() => history.push(`/houses/${house_id}`), 5000);
    }).catch(error => error);
  };

  return (
    <>
      <Navbar />
      <div className="create-appointment-container">
        <div className="create-appointment-heading">Please choose a date and time for the appointment.</div>
        <form onSubmit={handleSubmit} className="appointment-form">
          <input type="datetime-local" name="date" placeholder="date" value={state.date} onChange={handleChange} required />
          <div className="create-appointment-buttons">
            <button type="submit" className="create-appointment-button">Submit</button>
            <button type="button" className="cancel-appointment-button" onClick={() => history.push(`/houses/${house_id}`)}>Cancel</button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Appointment;
