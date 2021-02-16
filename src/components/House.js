import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const House = ({ house }) => (
  <div style={{ backgroundImage: `url(${house.image})` }}>
    <Link to={`/house/${house.id}`}>See Details</Link>
  </div>
);

House.propTypes = {
  image: PropTypes.string,
}.isRequired;

export default House;
