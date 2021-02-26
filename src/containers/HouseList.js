import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import House from '../components/House';
import { dataFetchStart, dataFetchSuccess, dataFetchFailure } from '../actions/index';
import { houseListCall } from '../utils/apiCalls';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
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
  if (!localStorage.getItem('auth_token')) {
    return <Redirect to="/" />;
  }

  useEffect(() => {
    const fetchData = async () => {
      fetchStart();
      try {
        const result = await houseListCall();
        fetchSuccess(result.data);
      } catch (error) {
        fetchFailure();
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      {isError && <div>Something went wrong. Please try again...</div>}
      {isLoading ? (<div><Loader type="ThreeDots" color="#6F1D1D" height={80} width={80} /></div>) : (
        <div>
          {houses && houses.length ? (
            <div className="houseList-container">
              <Carousel showThumbs={false}>
                {houses.map(house => (<House key={house.id} house={house} />))}
              </Carousel>
            </div>
          ) : <div>No data</div>}
        </div>
      )}
      <Footer />
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
