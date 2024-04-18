import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const useNavigateInit = () => {
  const [navigate, setNavigate] = useState(null);
  const navigateInstance = useNavigate();

  useEffect(() => {
    setNavigate(navigateInstance);
  }, [navigateInstance]);

  return navigate;
};

export default useNavigateInit;