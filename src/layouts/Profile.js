/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { API_MAIN, API_PROFILE } from '../constants/api';
import { profileFetchStart, profileFetchSuccess, profileFetchFailure } from '../actions/index';

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

  // console.log(user);
  // console.log(appointments);
  // console.log(typeof (appointments));
  console.log(appointments.map(app => (
    [app].map(ap => (
      ap.date
    ))
  )));

  return (
    <>
      {isError && <div>Something went wrong. Please try again...</div>}
      {isLoading ? (<div>Fetching data...Please wait.</div>) : (
        <>
          {[user].map((usr, index) => (
            <h2 key={index}>{usr.username}</h2>
          ))}
          {appointments.map(app => (
            [app].map((ap, index) => (
              <p key={index}>{ap.date}</p>
            ))
          ))}
        </>
      )}
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
