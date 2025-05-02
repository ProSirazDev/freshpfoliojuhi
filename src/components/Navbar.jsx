import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/myimg.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#0f0c29] fixed top-0 w-full z-50 shadow-md border-b border-cyan-500">
      <div className="container mx-auto p-3 md:px-0 flex justify-between items-center text-white">
        {/* Logo Section */}
        <Link to="/">
          <div className="flex items-center space-x-3">
            <img
              src={Logo}
              alt="Logo"
              className="md:w-14 md:h-14 w-10 h-10 rounded-full bg-white"
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6 font-mono text-base">
          {[ 
            { to: "/", label: "Home" },
            { to: "/about", label: "About" },
            { to: "/services", label: "Services" },
            { to: "/contact", label: "Contact" },
            { to: "/blog", label: "Blog" },
          ].map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="px-5 py-2 rounded-lg text-cyan-300 border border-cyan-500 hover:bg-cyan-500 hover:text-black transition duration-300 ease-in-out shadow-[0_0_10px_cyan] hover:shadow-[0_0_20px_cyan]"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none"
          >
            <span className="text-3xl font-bold text-cyan-400 drop-shadow-[0_0_6px_cyan]">
              &#x2632;
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Links */}
      <div
        className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-[#0f0c29] text-center py-4 space-y-4`}
      >
        {[ 
          { to: "/", label: "Home" },
          { to: "/about", label: "About" },
          { to: "/services", label: "Services" },
          { to: "/contact", label: "Contact" },
          { to: "/blog", label: "Blog" },
        ].map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            onClick={() => setIsMenuOpen(false)} // Close menu when an item is clicked
            className="block px-6 py-2 text-cyan-300 text-lg border-b border-cyan-500 hover:bg-cyan-500 hover:text-black transition duration-300 ease-in-out"
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
