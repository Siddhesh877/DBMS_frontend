import { useState, useCallback } from 'react';
import axios from 'axios';

const useFollowRequest = (userId) => {
  const token = localStorage.getItem('token');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  console.log("in followRequest",userId);
  const user_id = parseInt(userId)
  const followRequest = useCallback(async () => {
    try {
      const response = await axios.post(`http://10.10.88.205:8000/request/${user_id}`,{}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(response.data);
      return response.data;
    } catch (err) {
      setError(err);
      console.log(err);
      return null;
    }
  }, []);

  return { followRequest, data, error };
};

export default useFollowRequest;