import React from 'react';
import axios from 'axios';
import useToken from './useToken';

const useUser = (userId) => {
  const nuserId = userId;
  // const token = useToken((state) => state.token); // Get the token from the Zustand store
  const token = localStorage.getItem('token');
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  console.log("useUser token: ", token)
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`http://10.10.88.205:8000/users/${nuserId}`, {
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
    };

    if (token) {
      fetchData();
    }
  }, [nuserId, token]);

  return {
    data,
    error,
    isLoading,
  };
};

export default useUser;