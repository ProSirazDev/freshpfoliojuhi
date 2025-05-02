import React from "react";
import "./Latestwork.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3, faHtml5, faReact,faAngular } from "@fortawesome/free-brands-svg-icons";
import video1 from "../assets/Emporium.mp4";
import video2 from "../assets/school.mp4";
import video3 from "../assets/video3.mp4";

// Projects array
const projects = [
  {
    id: 1,
    title: "Emporium.ae",
    description: "A stylish e-commerce solution for modern users.",
    video: video1,
    tech: ["html5", "css3", "angular"],
    link: "https://www.emporium.ae/pages/default",
  },
  {
    id: 2,
    title: "School or College Website",
    description: "A responsive school or college website with admin ,faculty and student panel ",
    video: video2,
    tech: ["html5", "css3", "react"],
    link: "http://192.168.1.6:5173/inprogress",
  },
  {
    id: 3,
    title: "Portfolio Showcase",
    description: "Personal portfolio with neumorphic design and animations.",
    video: video3,
    tech: ["html5", "css3", "react"],
    link: "https://your-portfolio-demo.com",
  },
];

const Latestwork = () => {
  return (
    <div className="w-full bg-[#e0e0e0] text-gray-800 py-16">
      {/* Title */}
      <h1 className="text-xl font-semibold text-center text-sky-800 drop-shadow-[0_0_6px_sky] mb-16">
        &#x2688; &#x2688; &#x2688; Some of my latest work &#x2688; &#x2688; &#x2688;
      </h1>

      {/* Cards */}
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl px-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="rounded-xl overflow-hidden bg-[#e0e0e0] 
                       shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff]
                       hover:shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff]
                       transition duration-300 ease-in-out"
          >
            <div className="rounded-xl overflow-hidden">
              {/* Video */}
              <video
                autoPlay
                loop
                muted
                className="w-full object-center rounded-md"
              >
                <source src={project.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Info */}
              <div className="p-4 mt-4 text-center">
                <h2 className="text-xl font-bold text-gray-700">{project.title}</h2>
                <p className="text-sm text-gray-600 mt-2">{project.description}</p>
                <p className="text-sm text-gray-600 mt-3 font-medium">
                  <strong>Tech Stack:</strong>{" "}
                  {project.tech.includes("html5") && (
                    <FontAwesomeIcon icon={faHtml5} className="text-red-500 mx-1" />
                  )}
                  {project.tech.includes("css3") && (
                    <FontAwesomeIcon icon={faCss3} className="text-blue-500 mx-1" />
                  )}
                  {project.tech.includes("react") && (
                    <FontAwesomeIcon icon={faReact} className="text-cyan-500 mx-1" />
                  )}
                  {project.tech.includes("angular") && (
                    <FontAwesomeIcon icon={faAngular} className="text-cyan-500 mx-1" />
                  )}
                </p>
                <a
                  href={project.link}
                  
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-4 py-2 text-sm font-semibold bg-[#e0e0e0] rounded
                             shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff]
                             hover:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff]
                             transition duration-200"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Latestwork;
