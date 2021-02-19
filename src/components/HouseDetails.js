/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import axios from 'axios';
import { Link, Redirect, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import { detailsFetchStart, detailsFetchSuccess, detailsFetchFailure } from '../actions/index';
import { API_MAIN, API_HOUSES } from '../constants/api';
import Footer from '../layouts/Footer';
import Navbar from '../layouts/Navbar';
import '../styles/HouseDetails.css';

const HouseDetails = (
  {
    fetchStart,
    fetchSuccess,
    fetchFailure,
    isLoading,
    isError,
    houses,
  },
) => {
  if (!sessionStorage.getItem('auth_token')) {
    return <Redirect to="/" />;
  }

  const { id } = useParams();

  useEffect(() => {
    const fetchDetail = async () => {
      fetchStart();
      try {
        const result = await axios(
          `${API_MAIN}${API_HOUSES}${id}`,
          { headers: { Authorization: `${sessionStorage.getItem('auth_token')}` } },
          { withCredentials: true },
        );
        fetchSuccess(result.data);
      } catch (error) {
        fetchFailure();
      }
    };
    fetchDetail();
  }, []);

  return (
    <>
      <Navbar />
      <div className="details-container">
        {isError && <div>Something went wrong. Please try again...</div>}
        {isLoading ? (<div><Loader type="ThreeDots" color="#6F1D1D" height={80} width={80} /></div>) : (
          <div>
            {[houses].map((house, index) => (
              <div key={index} className="details-show">
                <div className="details-image">
                  <img className="details-img" src={`${house.image}`} alt={house.house_type} />
                </div>
                <div className="details-info">
                  <h3 className="house-type house-details-info-bg">{house.house_type}</h3>
                  <div className="house-details-info-bg">
                    Location:
                    {' '}
                    {house.location}
                  </div>
                  <div className="house-details-info-bg">
                    Number of rooms:
                    {' '}
                    {house.number_of_rooms}
                  </div>
                  <div className="house-details-info-bg">
                    Built on:
                    {' '}
                    {house.built_date}
                  </div>
                  <div className="house-details-info-bg">
                    Price:
                    {' '}
                    {house.price}
                  </div>
                  <div className="house-details-description">
                    {house.description}
                  </div>
                  <div className="appointment-prompt">Interested? Make an appointment to visit personally.</div>
                  <div className="appointment-button"><Link to={`${house.id}/make-appointment`}>Make an Appointment</Link></div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

HouseDetails.propTypes = {
  fetchStart: PropTypes.func.isRequired,
  fetchSuccess: PropTypes.func.isRequired,
  fetchFailure: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  houses: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

HouseDetails.defaultProps = {
  isLoading: false,
  isError: false,
};

const mapStateToProps = state => ({
  isLoading: state.details.isLoading,
  isError: state.details.isError,
  houses: state.details.houses,
});

const mapDispatchToProps = dispatch => ({
  fetchStart: () => dispatch(detailsFetchStart()),
  fetchSuccess: data => dispatch(detailsFetchSuccess(data)),
  fetchFailure: () => dispatch(detailsFetchFailure()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HouseDetails);
/* eslint-enable react/no-array-index-key */
