import  { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const usePost = (userId) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [updatedData, setUpdatedData] = useState(null);

  const token = localStorage.getItem('token');

  const updateData = (newPost) => {
    console.log("in update data")
    setUpdatedData((prevData) => [...(prevData || []), newPost]);
    console.log("updated data",newPost);
  };

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      const url = userId ? `http://10.10.88.205:8000/posts/${userId}` : "http://10.10.88.205:8000/posts";
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(response.data);
      // setUpdatedData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, [userId, token]);

  useEffect(() => {
    if (token) {
      fetchData();
    }
    if (updatedData) {
      setData((prevData) => {
        const mergedData = prevData ? [...prevData, ...updatedData] : [...updatedData];
        console.log("merged data",mergedData);
        return mergedData;
      });
      setUpdatedData(null);
    }
  }, [token, userId, fetchData, updatedData]);

  return { data, error, isLoading ,updateData};
};

export default usePost;