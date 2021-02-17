import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import House from '../components/House';
import { API_MAIN, API_HOUSES } from '../constants/api';
import { dataFetchStart, dataFetchSuccess, dataFetchFailure } from '../actions/index';
import '../styles/HouseList.css';

const HouseList = (
  {
    fetchStart,
    fetchSuccess,
    fetchFailure,
    isLoading,
    isError,
    houses,
  },
) => {
  useEffect(() => {
    const fetchData = async () => {
      fetchStart();
      try {
        const result = await axios(
          `${API_MAIN}${API_HOUSES}`,
          { headers: { Authorization: `${sessionStorage.getItem('auth_token')}` } },
          { withCredentials: true },
        );
        fetchSuccess(result.data);
      } catch (error) {
        fetchFailure();
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {isError && <div>Something went wrong. Please try again...</div>}
      {isLoading ? (<div>Loading data. Please wait...</div>) : (
        <div>
          {houses && houses.length ? (
            <div className="houseList-container">
              {houses.map(house => (<House key={house.id} house={house} />))}
            </div>
          ) : <div>No data</div>}
        </div>
      )}
    </>
  );
};

HouseList.propTypes = {
  fetchStart: PropTypes.func.isRequired,
  fetchSuccess: PropTypes.func.isRequired,
  fetchFailure: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  houses: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

HouseList.defaultProps = {
  isLoading: false,
  isError: false,
};

const mapStateToProps = state => ({
  isLoading: state.data.isLoading,
  isError: state.data.isError,
  houses: state.data.houses,
});

const mapDispatchToProps = dispatch => ({
  fetchStart: () => dispatch(dataFetchStart()),
  fetchSuccess: data => dispatch(dataFetchSuccess(data)),
  fetchFailure: () => dispatch(dataFetchFailure()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HouseList);
