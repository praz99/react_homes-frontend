import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/House.css';

const House = ({ house }) => (
  <div className="house-container">
    <div className="house-image-container">
      <img src={house.image} alt={house.house_type} className="house-image" />
    </div>
    <div className="house-button-container">
      <Link to={`/houses/${house.id}`} className="house-button" data-testid="house-link">See Details</Link>
    </div>
  </div>
);

House.propTypes = {
  image: PropTypes.string,
}.isRequired;

export default House;
