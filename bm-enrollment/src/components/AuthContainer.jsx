import { useState } from 'react';
import Login from './Login';
import Register from './Register';

const AuthContainer = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="container mt-4">
      {isLogin ? <Login /> : <Register />}
      <div className="mt-3">
        {isLogin ? (
          <p>
            Do not have an account? <button className="btn btn-link" onClick={() => setIsLogin(false)}>Register</button>
          </p>
        ) : (
          <p>
            Already have an account? <button className="btn btn-link" onClick={() => setIsLogin(true)}>Login</button>
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthContainer;
