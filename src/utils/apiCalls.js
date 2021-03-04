/* eslint-disable camelcase */
import axios from 'axios';
import {
  API_MAIN, API_SIGNUP, API_LOGIN, API_HOUSES, API_APPOINTMENT, API_PROFILE,
} from '../constants/api';

const authCall = (auth_type, user, init, success, failure, history) => {
  let API_END;
  if (auth_type === 'signup') {
    API_END = API_SIGNUP;
  } else {
    API_END = API_LOGIN;
  }

  init();
  axios.post(`${API_MAIN}${API_END}`, { user }, { withCredentials: true })
    .then(response => {
      if (response.data.auth_token) {
        success();
        localStorage.setItem('auth_token', response.data.auth_token);
        history.push('/houses');
      }
    })
    .catch(error => failure(error.response.data.message));
};

const houseListCall = () => axios.get(`${API_MAIN}${API_HOUSES}`, { headers: { Authorization: `${localStorage.getItem('auth_token')}` } }, { withCredentials: true });
const houseDetailsCall = id => axios.get(`${API_MAIN}${API_HOUSES}${id}`, { headers: { Authorization: `${localStorage.getItem('auth_token')}` } }, { withCredentials: true });
const appointmentCall = (house_id, date) => axios.post(`${API_MAIN}${API_HOUSES}${house_id}${API_APPOINTMENT}`, { date }, { headers: { Authorization: `${localStorage.getItem('auth_token')}` } }, { withCredentials: true });
const profileCall = user_id => axios.get(`${API_MAIN}${API_PROFILE}${user_id}`, { headers: { Authorization: `${localStorage.getItem('auth_token')}` } }, { withCredentials: true });

export {
  authCall, houseListCall, houseDetailsCall, appointmentCall, profileCall,
};
/* eslint-enable camelcase */
