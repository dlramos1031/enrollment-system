// withSessionCheck.jsx
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const withSessionCheck = (WrappedComponent) => {
  const WithSession = (props) => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
      const checkSession = async () => {
        try {
          const response = await axios.get('http://localhost/enrollmentAPI/check_session.php');
          console.log(response.data);
          if (response.data.error) {
            if (location.pathname !== '/login') {
              navigate('/login');
            }
          } else {
            if (location.pathname === '/login' || location.pathname === '/') {
              navigate('/dashboard');
            }
          }
        } catch (error) {
          console.error("Session check error:", error);
          navigate('/login');
        }
      };

      checkSession();
    }, [navigate, location.pathname]);

    return <WrappedComponent {...props} />;
  };

  return WithSession;
};

export default withSessionCheck;
