import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Social = () => {
  return (
    <div className="bg-gray-800 rounded-xl w-12 h-auto flex flex-col items-center py-4 space-y-6 z-50  shadow-[0_0_15px_stone, 0_0_30px_#0ff1]">
      <a
        href="https://github.com/your-profile"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform duration-200 hover:scale-110"
      >
        <FontAwesomeIcon
          icon={faGithub}
          className="text-white text-3xl hover:drop-shadow-[0_0_6px_#00ffff]"
        />
      </a>
      <a
        href="https://wa.me/7872635590"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform duration-200 hover:scale-110"
      >
        <FontAwesomeIcon
          icon={faWhatsapp}
          className="text-[#25D366] text-3xl hover:drop-shadow-[0_0_6px_#25D366]"
        />
      </a>
      <a
        href="https://instagram.com/your-profile"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform duration-200 hover:scale-110"
      >
        <FontAwesomeIcon
          icon={faInstagram}
          className="text-red-500 text-3xl hover:drop-shadow-[0_0_6px_#ff00ff]"
        />
      </a>
      <a
        href="https://facebook.com/your-profile"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform duration-200 hover:scale-110"
      >
        <FontAwesomeIcon
          icon={faFacebook}
          className="text-sky-500 text-3xl hover:drop-shadow-[0_0_6px_#1877f2]"
        />
      </a>
    </div>
  );
};

export default Social;
