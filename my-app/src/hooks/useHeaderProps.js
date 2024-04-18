import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

const useHeaderProps = () => {
  const location = useLocation();
  const { userId } = useParams();
  const [headerProps, setHeaderProps] = useState({
    label: 'Home',
    showBackArrow: false,
  });

  useEffect(() => {
    const updateHeaderProps = () => {
      switch (true) {
        case location.pathname === '/':
          setHeaderProps({ label: 'Home', showBackArrow: false });
          break;
        case location.pathname === '/notifications':
          setHeaderProps({ label: 'Notifications', showBackArrow: true });
          break;
        case location.pathname.startsWith('/users/'):
          setHeaderProps({ label: 'Posts', showBackArrow: true });
          break;
        // Add more cases for other routes
        default:
          setHeaderProps({ label: 'Home', showBackArrow: false });
      }
    };

    updateHeaderProps();
  }, [location.pathname, userId]);

  return headerProps;
};

export default useHeaderProps;