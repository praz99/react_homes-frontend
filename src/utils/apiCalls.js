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

const apiGetCalls = async (type, init, success, failure, id = '') => {
  let API_END;
  if (type === 'house') {
    API_END = API_HOUSES;
  } else {
    API_END = API_PROFILE;
  }

  init();
  try {
    const result = await axios.get(`${API_MAIN}${API_END}${id}`, { headers: { Authorization: `${localStorage.getItem('auth_token')}` } }, { withCredentials: true });
    success(result.data);
  } catch (error) {
    failure();
  }
};

const appointmentCall = (house_id, date) => axios.post(`${API_MAIN}${API_HOUSES}${house_id}${API_APPOINTMENT}`, { date }, { headers: { Authorization: `${localStorage.getItem('auth_token')}` } }, { withCredentials: true });

export {
  authCall, appointmentCall, apiGetCalls,
};
/* eslint-enable camelcase */
