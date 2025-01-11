import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Social = () => {
  return (
    <div className="bg-gray-100 rounded-md w-16 h-auto flex flex-col items-center py-4 space-y-4 z-50">
      <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} className="text-black text-3xl" />
      </a>
      <a href="https://web.whatsapp.com/7003271667" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faWhatsapp} className="text-green-500 text-3xl" />
      </a>
      <a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} className="text-red-500 text-3xl" />
      </a>
      <a href="https://facebook.com/your-profile" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} className="text-blue-500 text-3xl" />
      </a>
    </div>
  );
};

export default Social;
