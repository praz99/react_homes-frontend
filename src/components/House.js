import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/House.css';

const House = ({ house }) => (
  <div className="house-container" style={{ backgroundImage: 'url(https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg)' }}>
    <Link to={`/house/${house.id}`} className="house-button">See Details</Link>
  </div>
);

House.propTypes = {
  image: PropTypes.string,
}.isRequired;

export default House;
