import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800 text-white py-4">
      <nav className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        {/* Left Side Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-white hover:text-gray-300">
            Our Menu
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Reservation
          </a>
        </div>

        {/* Center Logo (also acts as a Home button) */}
        <div className="relative flex justify-center items-center">
          <a href="/" className="block w-12 h-12 bg-white rounded-full shadow-lg"></a>
        </div>

        {/* Right Side Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-white hover:text-gray-300">
            About Us
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Contact Us
          </a>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          onClick={toggleMenu}
          className="block md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:hidden mt-4 space-y-2`}
        >
          <a href="#" className="block text-white hover:text-gray-300">
            Our Menu
          </a>
          <a href="#" className="block text-white hover:text-gray-300">
            Reservation
          </a>
          <a href="#" className="block text-white hover:text-gray-300">
            About Us
          </a>
          <a href="#" className="block text-white hover:text-gray-300">
            Contact Us
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
