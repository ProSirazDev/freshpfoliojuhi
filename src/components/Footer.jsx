import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMouse } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="relative  text-white bg-gray-100 ">
    <div className=" absolute top-0 right-[49%]">
    <a href="/"><FontAwesomeIcon icon={faMouse} size="lg" className="text-red-500 text-4xl animate-bounce" /></a>
          
    </div>
      {/* Wave Shape Divider */}
      <div className="custom-shape-divider-bottom-1736492468">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M649.97 0L599.91 54.12 550.03 0 0 0 0 120 1200 120 1200 0 649.97 0z" className="shape-fill"></path>
    </svg>
</div>

      {/* Footer Content */}
      <footer className="px-8 bg-[#969493] py-6 md:py-5 text-center">
        <h3 className="text-lg md:text-2xl font-semibold mb-2 font-mono">
          Made with ❤️ by Siraz
        </h3>
        <p className="text-sm md:text-base text-black mb-4">
          © {new Date().getFullYear()} All Rights Reserved.
        </p>
        <div className="flex justify-center space-x-4">
          {/* Social Media Links */}
          <a
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <i className="fab fa-github text-xl"></i>
          </a>
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <i className="fab fa-linkedin text-xl"></i>
          </a>
          <a
            href="https://twitter.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <i className="fab fa-twitter text-xl"></i>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
