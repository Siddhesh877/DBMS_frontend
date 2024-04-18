import React from 'react';
import axios from 'axios';
import useToken from './useToken';

const useUser = () => {
  // const { token, isTokenLoading, isTokenLoaded } = useToken();

  // if (!isTokenLoaded) {
  //   // throw new Error('Token not loaded');
  //   setTimeout(() => {}, 1000);
  // }
  const token = localStorage.getItem('token');
  // const token = useToken((state) => state.token);
  console.log("useUsers token: ",token)
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const headers = token ? { Authorization: `Bearer ${token}` } : {};
        const response = await axios.get(`http://10.10.88.205:8000/users`, {
          headers,
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
  }, [token]);

  return {
    data,
    error,
    isLoading,
  };
};

export default useUser;