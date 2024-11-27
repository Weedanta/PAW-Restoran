import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State untuk toggle menu

  return (
    <header className="bg-primary-1 text-white">
      <nav className="w-full flex items-center py-4 px-4 relative">

        <div className="absolute md:hidden left-1/2 transform -translate-x-1/2">
          <img
            src="/images/Logo.png"
            alt="Logo"
            className="h-14 w-14 -my-2"
          />
        </div>



        {/* Hamburger Icon (Mobile) */}
        <button
          className="block md:hidden py-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="space-y-1">
            <span className="block h-1 w-6 bg-white"></span>
            <span className="block h-1 w-6 bg-white"></span>
            <span className="block h-1 w-6 bg-white"></span>
          </div>
        </button>

        {/* Mobile Navigation Menu */}
        <div
          className={`fixed top-0 left-0 h-full w-4/5 max-w-sm bg-primary-1 transform ${isOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out md:hidden z-40`}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={() => setIsOpen(false)}
          >
            &times;
          </button>

          {/* Navigation Links */}
          <ul className="flex flex-col items-start p-8 space-y-6 text-xl">
            <li>
              <a
                href="#Menu"
                className="hover:text-orange-500"
                onClick={() => setIsOpen(false)}
              >
                Our Menu
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-orange-500"
                onClick={() => setIsOpen(false)}
              >
                Reservation
              </a>
            </li>
            <li>
              <a
                href="#article"
                className="hover:text-orange-500"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#outlet"
                className="hover:text-orange-500"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Desktop Navigation Links */}
        <ul
          className={`hidden md:flex justify-around w-full items-center text-2xl font-semibold px-24`}
        >
          <li className="hover:text-orange-500 cursor-pointer">
            <a href="#menu">Our Menu</a>
          </li>
          <li className="hover:text-orange-500 cursor-pointer">
            <a href="#reservation">Reservation</a>
          </li>
          <li className="hover:text-orange-500 cursor-pointer">
            <a href="/" className="text-2xl font-bold">
              <img
                src="/images/Logo.png"
                alt="Urban Feast Logo"
                className="h-24 w-24 -my-2 "
              />
            </a>
          </li>
          <li className="hover:text-orange-500 cursor-pointer">
            <a href="#about">About Us</a>
          </li>
          <li className="hover:text-orange-500 cursor-pointer">
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
