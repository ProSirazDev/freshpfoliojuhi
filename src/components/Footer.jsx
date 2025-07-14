import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMouse } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="relative bg-gray-800">
      {/* Bounce Mouse Icon */}
      <div className="absolute top-[-2] right-[49%] z-20">
        <a href="/">
          <FontAwesomeIcon
            icon={faMouse}
            size="lg"
            className="text-cyan-500 text-4xl animate-bounce drop-shadow-[0_0_16px_cyan]"
          />
        </a>
      </div>

      {/* Neon Footer Content */}
      <footer className="px-8 pt-8 pb-3  text-center bg-gray-800 text-white ">
        <h3 className="text-lg md:text-2xl font-semibold mb-2 font-mono text-cyan-500 ">
        Juhi Sabnam Sarkar
        </h3>

        <p className="text-sm md:text-base text-cyan-100  font-mono">
          © {new Date().getFullYear()} All Rights Reserved.
        </p>

        {/* <div className="flex justify-center space-x-6 mt-4">
      
          <a
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-cyan-300 transition-transform transform hover:scale-110 drop-shadow-[0_0_5px_cyan]"
          >
            <i className="fab fa-github text-2xl"></i>
          </a>
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-cyan-300 transition-transform transform hover:scale-110 drop-shadow-[0_0_5px_cyan]"
          >
            <i className="fab fa-linkedin text-2xl"></i>
          </a>
          <a
            href="https://twitter.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-cyan-300 transition-transform transform hover:scale-110 drop-shadow-[0_0_5px_cyan]"
          >
            <i className="fab fa-twitter text-2xl"></i>
          </a>
        </div> */}
      </footer>
    </div>
  );
};

export default Footer;
