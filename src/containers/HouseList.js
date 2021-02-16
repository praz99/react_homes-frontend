import React, { useEffect } from 'react';
import axios from 'axios';
// import House from '../components/House';

const HouseList = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(
          'http://localhost:3001/houses',
          { headers: { Authorization: `${sessionStorage.getItem('auth_token')}` } },
          { withCredentials: true },
        );
        console.log(result.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  });

  return (
    <p>Houses</p>
  );
};

export default HouseList;
