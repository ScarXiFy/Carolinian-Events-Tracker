import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    // Send registration request to backend
    console.log('Registering user:', { firstName, lastName, email, password });
    navigate('/login'); // Redirect to login page after successful registration
  };

  return (
    <section className="max-w-lg mx-auto p-6 bg-white shadow-lg mt-8">
      <h2 className="text-3xl text-center">Welcome to Carolinian Events</h2>
      <p className="text-center mt-4">
        Create an account or{' '}
        <button
          onClick={() => navigate('/login')}
          className="text-blue-500 hover:underline"
        >
          Log in
        </button>
      </p>
      <div className="mt-6">
        <label className="block">First Name</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mt-4">
        <label className="block">Last Name</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mt-4">
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
      <div className="mt-4">
        <label className="block">Confirm Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <button
        onClick={handleRegister}
        className="w-full mt-6 py-2 bg-blue-500 text-white rounded-lg"
      >
        Register
      </button>
      <p className="mt-4 text-center text-sm text-gray-500">
        By registering, you agree to our{' '}
        <a href="/terms" className="text-blue-500">Terms of Service</a> and{' '}
        <a href="/privacy" className="text-blue-500">Privacy Policy</a>.
      </p>
      <p className="mt-4 text-center text-sm">
        Powered by{' '}
        <Link to="/" className="text-blue-500">
            Carolinian Events
        </Link>
      </p>
    </section>
  );
};

export default SignUp;