import { useState } from "react";
import { loginUser } from "../api";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (formData.username === "" || formData.password === "") {
      setError("Fill up the empty fields.");
      return;
    }
    try {
      await loginUser(formData.username, formData.password);
      navigate("/dashboard");
    } catch (error) {
      setError("Invalid username or password");
    }
  };

  const goToRegister = () => {
    navigate("/register");
  }

  const handleChange = (e) => {
    setError(null);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="p-6 bg-gray-200 shadow-md rounded-md max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Login</h2>
      {error && (
        <div className="mb-4 p-2 rounded-md text-red-800 bg-red-200">
          {error}
        </div>
      )}
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            placeholder="Enter your Username"
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              placeholder="Enter your Password"
              onChange={handleChange}
              className="mt-1 block w-full p-2 pr-10 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 px-3 flex items-center focus:outline-none"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>
        <div className="mt-6 flex justify-between">
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Login
          </button>
          <button
            type="button"
            onClick={goToRegister}
            className="px-4 py-2 bg-green-500 text-white font-semibold rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
