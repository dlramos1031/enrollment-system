import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const useSession = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await axios.get('http://localhost/enrollmentAPI/check_session.php');
        console.log(response.data);
        if (response.data.error) {
          navigate('/login');
        }
      } catch (error) {
        console.error("Session check error:", error);
        navigate('/login');
      }
    };

    checkSession();
  }, [navigate]);
};

export default useSession;
