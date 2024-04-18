import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const useNotification = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const token = localStorage.getItem('token');

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      const url =  "http://10.10.88.205:8000/getrequests";
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, [ token]);

  useEffect(() => {
    if (token) {
      fetchData();
    }
  }, [token, fetchData]);
  // console.log("data",data);

  return { data, error, isLoading };
};

export default useNotification;