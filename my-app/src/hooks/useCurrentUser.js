import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';

const useCurrentUser = () => {
  const token = localStorage.getItem('token');
  // console.log('useCurrentUser token: ', token);

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        `http://10.10.88.205:8000/currentusers`,
        {
          token: `${token}`,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      fetchData();
    }
  }, [token, fetchData]);
  // console.log('useCurrentUser data: ', data);
  return {
    data,
    error,
    isLoading,
  };
};

export default useCurrentUser;