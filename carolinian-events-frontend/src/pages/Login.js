import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Send login request to backend here
    // If successful, redirect user
    console.log('Logging in with:', email, password);
    navigate('/'); // Redirect to home page on successful login
  };

  return (
    <section className="max-w-lg mx-auto p-6 bg-white shadow-lg mt-8">
      <h2 className="text-3xl text-center">Welcome back</h2>
      <p className="text-center mt-4">
        Don't have an account?{' '}
        <button
          onClick={() => navigate('/signup')}
          className="text-blue-500 hover:underline"
        >
          Sign up
        </button>
      </p>
      <div className="mt-6">
        <label className="block">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mt-4">
        <label className="block">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <button
        onClick={handleLogin}
        className="w-full mt-6 py-2 bg-blue-500 text-white rounded-lg"
      >
        Login
      </button>
    </section>
  );
};

export default Login;