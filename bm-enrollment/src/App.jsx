import React, { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="min-h-screen min-w-max flex items-center justify-center bg-blue-950">
      <div className="bg-white p-10 rounded-lg shadow-md w-96">
        {isLoggedIn ? (
          <Dashboard />
        ) : (
          isLogin ? (
            <Login onLogin={handleLogin} />
          ) : (
            <Register />
          )
        )}
        {isLogin && !isLoggedIn && (
          <div className="mt-4 text-center">
            <button
              className="text-blue-500 hover:underline"
              onClick={() => setIsLogin(!isLogin)}
            >
              Don't have an account? Register
            </button>
          </div>
        )}
        {!isLogin && !isLoggedIn && (
          <div className="mt-4 text-center">
            <button
              className="text-blue-500 hover:underline"
              onClick={() => setIsLogin(!isLogin)}
            >
              Already have an account? Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;