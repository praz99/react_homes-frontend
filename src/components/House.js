import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/House.css';

const House = ({ house }) => (
  <div className="house-container">
    <Link to={`/house/${house.id}`}>See Details</Link>
  </div>
);

House.propTypes = {
  image: PropTypes.string,
}.isRequired;

export default House;
