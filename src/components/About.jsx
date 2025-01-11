import React from "react";
import {Link} from "react-router-dom"
const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-indigo-200 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4 font-mono">About Me</h1>
          <p className="text-gray-700 text-lg mb-4 tracking-wider font-mono font-bold">
            Learn more about who I am, what I do, and my journey.
          </p>
        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="flex justify-center items-center">
            <img
              src="https://img.freepik.com/free-photo/close-up-image-programer-working-his-desk-office_1098-18707.jpg?t=st=1736581816~exp=1736585416~hmac=bb7942a44b5562d1991177d11d8fe17ff474683d4f8b4fc6631a202c86ca55a3&w=740"
              alt="Profile"
              className=" shadow-lg rounded-md"
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col justify-center ">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4 font-mono">Hello, I'm Juhi</h2>
            <p className="text-gray-700 text-lg mb-4 tracking-wider font-mono">
              I am a passionate web developer with a love for creating beautiful and functional
              websites. My expertise includes front-end and back-end technologies, including React,
              Node.js, and everything in between. I enjoy problem-solving and continuously learning
              new skills to stay ahead of the curve in this ever-evolving tech world.
            </p>
            <p className="text-gray-700 text-lg mb-4 tracking-wider font-mono">
              Over the years, I have worked on various projects, collaborating with talented teams to
              build innovative solutions. I believe in the power of technology to change the world,
              and I am excited to be part of that transformation.
            </p>
            <Link
             to="/contact"
              className="inline-block mt-4 text-center text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 font-semibold py-3 px-6 rounded-lg shadow-md transition-all"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
