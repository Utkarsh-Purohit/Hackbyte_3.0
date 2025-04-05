import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '', role: 'patient' });

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', formData);
      alert(res.data.message);
      if (res.status === 200 && formData.role === 'patient') {
        navigate('/patient');
      } else if (res.status === 200 && formData.role === 'doctor') {
        navigate('/doctor');
      }
    } catch (err) {
      alert(err.response?.data?.error || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Welcome Back</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
              name="email"
              type="email"
              placeholder="you@example.com"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
              name="password"
              type="password"
              placeholder="••••••••"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Role</label>
            <select
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
              name="role"
              onChange={handleChange}
              value={formData.role}
            >
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
            </select>
          </div>

          <button
            className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition duration-200"
            type="submit"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{' '}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign up here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
