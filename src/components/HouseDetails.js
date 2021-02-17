import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { detailsFetchStart, detailsFetchSuccess, detailsFetchFailure } from '../actions/index';
import { API_MAIN, API_HOUSES } from '../constants/api';

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

  console.log(houses);

  return (
    <>
      {isError && <div>Something went wrong. Please try again...</div>}
      {isLoading ? (<div>Loading data. Please wait...</div>) : (
        <div />
        // houses.map(house => (
        //   <div key={house.id}>{house.house_type}</div>
        // ))
      )}
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
