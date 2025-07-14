import React, { useRef } from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3, faHtml5, faReact, faAngular } from "@fortawesome/free-brands-svg-icons";
import video1 from "../assets/Emporium.mp4";
import video2 from "../assets/school.mp4";
import video3 from "../assets/video3.mp4";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Latestwork.css"; // contains custom hover logic
import { faLink } from "@fortawesome/free-solid-svg-icons";


const projects = [
  {
    id: 1,
    title: "Emporium.ae",
    description: "A stylish e-commerce solution for modern users.",
    video: video1,
    tech: ["html5", "css3", "angular"],
    link: "https://www.emporium.ae/pages/default",
    status: "Completed"
  },
  {
    id: 2,
    title: "School or College Website",
    description: "A responsive school or college website with admin, faculty and student panel.",
    video: video2,
    tech: ["html5", "css3", "react"],
    link: "http://192.168.1.6:5173/inprogress",
    status: "Inprogress"
  },
  {
    id: 3,
    title: "Portfolio Showcase",
    description: "Personal portfolio with neumorphic design and animations.",
    video: video3,
    tech: ["html5", "css3", "react"],
    link: "https://your-portfolio-demo.com",
    status: "Completed"
  },
];

const Latestwork = () => {
  const sliderRef = useRef(null);

  const settings = {
    centerMode: true,
    centerPadding: "25%", // shows 50% on each side
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: "0px",
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full bg-black text-gray-800 py-16">
      <h1 className="text-xl font-semibold text-center text-white mb-16">
        &#x2688; &#x2688; &#x2688; Some of my latest work &#x2688; &#x2688; &#x2688;
      </h1>

      <div className=" max-w-screen-xl mx-auto">
        <Slider ref={sliderRef} {...settings}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              onMouseEnter={() => sliderRef.current?.slickGoTo(index)}
              className="transition-all duration-500 "
            >
              <Card {...project} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const Card = ({ title, description, video, tech, link,status }) => {
  return (
    <div className="bg-gray-800  overflow-hidden h-full border-r-8 border-slate-900">
      <video autoPlay loop muted className="w-full h-64 object-cover ">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="p-4 text-center">
        <h2 className="text-xl font-bold text-white">{title}</h2>
        <p className="text-sm text-white mt-2">{description}</p>
        <div className="text-sm text-white mt-3 font-medium">
          <strong>Tech Stack:</strong>{" "}
          {tech.includes("html5") && <FontAwesomeIcon icon={faHtml5} className="text-red-500 mx-1" />}
          {tech.includes("css3") && <FontAwesomeIcon icon={faCss3} className="text-blue-500 mx-1" />}
          {tech.includes("react") && <FontAwesomeIcon icon={faReact} className="text-cyan-500 mx-1" />}
          {tech.includes("angular") && <FontAwesomeIcon icon={faAngular} className="text-red-600 mx-1" />}
        </div>
<div className="flex items-center justify-between">
          <p
       
          className="inline-block mt-4 px-4 py-2 text-sm font-semibold bg-[#e0e0e0] rounded text-red-500
          "
        >
         {status}
        </p>
                <a
          href={link}
          rel="noopener noreferrer"
          className="inline-block mt-4 px-4 py-2 text-sm font-semibold bg-[#e0e0e0] rounded text-green-600
            
            hover:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff]
            transition duration-200"
        >
          Live
          <span className="rotate-0"> <FontAwesomeIcon icon={faLink} className="text-green-600 mx-1" /></span>
        </a>
</div>
      </div>
    </div>
  );
};

export default Latestwork;
