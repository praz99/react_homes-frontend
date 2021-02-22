/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import Navbar from './Navbar';
import Footer from './Footer';
import { API_MAIN, API_PROFILE } from '../constants/api';
import { profileFetchStart, profileFetchSuccess, profileFetchFailure } from '../actions/index';
import '../styles/Profile.css';

const Profile = (
  {
    fetchStart,
    fetchSuccess,
    fetchFailure,
    user,
    appointments,
    isLoading,
    isError,
  },
) => {
  useEffect(() => {
    const fetchUser = async () => {
      fetchStart();
      try {
        const result = await axios(
          `${API_MAIN}${API_PROFILE}`,
          { headers: { Authorization: `${sessionStorage.getItem('auth_token')}` } },
          { withCredentials: true },
        );
        fetchSuccess(result.data);
      } catch (error) {
        fetchFailure();
      }
    };
    fetchUser();
  }, []);

  const username = [user].map(usr => (
    usr.username
  ));

  const date = appointments.map(app => (
    [app].map(ap => (
      ap.date.split('T')
    ))
  ));

  return (
    <>
      <Navbar />
      <div className="profile-wrapper">
        {isError && <div>Something went wrong. Please try again...</div>}
        {isLoading ? (<div><Loader type="ThreeDots" color="#6F1D1D" height={80} width={80} /></div>) : (
          <>
            <h2 className="profile-username">{username}</h2>
            <div className="profile-container">
              <div className="table-heading" data-testid="appointments-heading">My Appointments</div>
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  {date.map((dt, index) => (
                    <tr key={index}>
                      <td>{dt.toString().substr(0, 10)}</td>
                      <td>{dt.toString().substr(11, 5)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

Profile.propTypes = {
  fetchStart: PropTypes.func.isRequired,
  fetchSuccess: PropTypes.func.isRequired,
  fetchFailure: PropTypes.func.isRequired,
  user: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  appointments: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
};

Profile.defaultProps = {
  isLoading: false,
  isError: false,
};

const mapStateToProps = state => ({
  user: state.current_user.user,
  appointments: state.current_user.appointments,
  isLoading: state.current_user.isLoading,
  isError: state.current_user.isError,
});

const mapDispatchToProps = dispatch => ({
  fetchStart: () => dispatch(profileFetchStart()),
  fetchSuccess: data => dispatch(profileFetchSuccess(data)),
  fetchFailure: () => dispatch(profileFetchFailure()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
/* eslint-enable react/no-array-index-key */
