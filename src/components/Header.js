import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          Car Management Application
        </Link>

        {/* Navigation Links and Login Button */}
        <div className="flex items-center space-x-6">
          <nav className="space-x-4">
            <Link to="/" className="hover:text-gray-400">
              Home
            </Link>
            <Link to="/products" className="hover:text-gray-400">
              Products
            </Link>
            <Link to="/portfolio" className="hover:text-gray-400">
              Portfolio Gallery
            </Link>
            <Link to="/contact-us" className="hover:text-gray-400">
              Contact Us
            </Link>
          </nav>
          <Link
            to="/login"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
