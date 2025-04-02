import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login'); // Correct usage of navigate in React Router v6
  };

  return (
    <header className="bg-blue-500 text-white p-4 shadow-md">
      <nav className="flex justify-between items-center">
        <div className="text-xl font-bold">Carolinian Events Tracker</div>
        <div>
          <button
            onClick={handleLoginClick}
            className="bg-blue-700 text-white py-2 px-6 rounded-lg hover:bg-blue-800"
          >
            Login
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;