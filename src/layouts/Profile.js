import React, { useEffect } from 'react';
import axios from 'axios';
import { API_MAIN, API_PROFILE } from '../constants/api';

const Profile = () => {
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const result = await axios(
          `${API_MAIN}${API_PROFILE}`,
          { headers: { Authorization: `${sessionStorage.getItem('auth_token')}` } },
          { withCredentials: true },
        );
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, []);

  return (
    <p>You see my profile</p>
  );
};

export default Profile;
