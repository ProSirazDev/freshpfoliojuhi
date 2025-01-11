import React from "react";
import {  Link } from "react-router-dom";
import Logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav className="bg-[#969493]">
      <div className="container mx-auto  flex justify-between items-center h-24">
        {/* Logo Section */}
        <Link to="/" >  <div className="flex items-center space-x-2">
          <img
            src={Logo}
            alt="Logo"
            className="w-16 h-16 rounded-full bg-white"
          />
          <h1 className="text-white text-4xl font-bold font-mono">Juhi Sabnam Sarkar</h1>
        </div></Link>
      

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
        
          <Link to="/about" className="text-white hover:text-gray-200 transition duration-200 font-mono text-2xl font-medium">About</Link>
          <Link to="/contact" className="text-white hover:text-gray-200 transition duration-200 font-mono text-2xl font-medium">Contact</Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
