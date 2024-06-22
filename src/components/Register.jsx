import { useState } from "react";
import { registerUser, userEmailExists, usernameExists } from "../api";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    role: 0,
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setError(null);
    setSuccess(null);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (formData.email === "" || formData.username === "" || formData.password === "") {
      setError("Fill up the empty fields. ");
      return;
    }

    if (await userEmailExists(formData.email)) {
      setError("Email address already used. ");
      return;
    }

    if (await usernameExists(formData.username)) {
      setError("Username already exists. ");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match. ");
      return;
    }

    try {
      await registerUser(
        formData.email,
        formData.username,
        formData.password,
        formData.role
      );
      setSuccess("User account registered successfully. ");
    } catch (error) {
      setError("Error registering user");
    }
  };

  const backToLogin = () => {
    navigate('/login');
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="p-6 bg-gray-200 shadow-md rounded-md max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Register</h2>
      {error && (
        <div className="my-4 p-2 rounded-md text-red-800 bg-red-200">
          {error}
        </div>
      )}
      {success && (
        <div className="my-4 p-2 rounded-md text-green-800 bg-green-400">
          {success}
        </div>
      )}
      <form onSubmit={handleRegister} className="mb-4">
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            placeholder="Enter your email address"
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
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
        <div className="mb-4">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            placeholder="Confirm Password"
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mt-6 flex justify-between">
          <button
            type="submit"
            className="px-4 py-2 bg-green-500 text-white font-semibold rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Register
          </button>
          <button
            type="button"
            onClick={backToLogin}
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Back to Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
