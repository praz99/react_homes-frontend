/* eslint-disable camelcase */
import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import { appointmentCall } from '../utils/apiCalls';
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
  const renderBox = document.getElementById('render-box');

  const handleSubmit = event => {
    event.preventDefault();
    appointmentCall(house_id, date)
      .then(response => {
        if (response.status === 201) {
          renderBox.innerText = 'Appointment created successfully';
        }
        setTimeout(() => history.push(`/houses/${house_id}`), 3000);
      }).catch(error => {
        renderBox.innerText = error.response.data.message;
      });
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
        <div id="render-box" />
      </div>
      <Footer />
    </>
  );
};

export default Appointment;
