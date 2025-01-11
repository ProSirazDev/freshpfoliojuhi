import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNodeJs,
  faGitAlt,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import "./Latestwork.css";

const Tech = () => {
  const technologies = [
    { icon: faHtml5, color: "text-orange-500", name: "HTML5" },
    { icon: faCss3Alt, color: "text-blue-500", name: "CSS3" },
    { icon: faJs, color: "text-yellow-500", name: "JavaScript" },
    { icon: faReact, color: "text-blue-400", name: "React" },
    { icon: faNodeJs, color: "text-green-500", name: "Node.js" },
    { icon: faGitAlt, color: "text-red-500", name: "Git" },
    { icon: faBootstrap, color: "text-violet-500", name: "Bootstrap" },
  ];

  return (
    <div className="relative bg-gray-100 z-10">
      {/* Shape Divider */}
      <div className="custom-shape-divider-top-1736490416">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M649.97 0L599.91 54.12 550.03 0 0 0 0 120 1200 120 1200 0 649.97 0z"
            className="shape-fill"
          ></path>
        </svg>
      </div>

      {/* Title Section */}
      <div className="w-full flex items-center justify-center my-8">
        <div className="bg-red-800 h-[2px] w-1/3"></div>
        <h1 className="text-center text-3xl font-mono py-2 px-4">
          Technology I am in love with ❤
        </h1>
        <div className="bg-red-800 h-[2px] w-1/3"></div>
      </div>

      {/* Icons Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto p-6 pb-20">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-2 group"
          >
            <div className="rounded-full shadow-lg p-5 bg-white transform transition-transform duration-300 group-hover:scale-110">
              <FontAwesomeIcon
                icon={tech.icon}
                className={`${tech.color} text-4xl`}
              />
            </div>
            <p className="text-lg font-semibold">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
