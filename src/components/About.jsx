import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const educationTimeline = [
  {
    icon: "🏫",
    year: "2005-2010",
    degree: "Secondary Education",
    institution: "Megha Siara High School",
  },
  {
    icon: "🏫",
    year: "2010-2012",
    degree: "Higher Secondary",
    institution: "Sagardighi SN High School",
  },
  {
    icon: "🏫",
    year: "2012-2016",
    degree: "Btech In EE",
    institution: "Aliah University",
  },
  {
    icon: "🏫",
    year: "2021-2022",
    degree: "Continuous Learning",
    institution: "Online Platforms & Bootcamps",
  },
  {
    icon: "🏫",
    year: "2022-Present",
    degree: "Full Stack Developer",
    institution: "ITW",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-[#e0e0e0] py-12 px-6 md:px-24 pt-36 text-black">
      {/* Heading */}
      <div className="text-center mb-12">
        <motion.h1
          className="text-3xl font-semibold "
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h1>
        <motion.p
          className=" mt-4  text-gray-600 dark:text-gray-300 text-base font-medium "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Learn more about who I am, what I do, and my journey.
        </motion.p>
      </div>

      {/* Main Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Image Section */}
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-[#e0e0e0] rounded-2xl shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] p-4">
            <img
              src="https://img.freepik.com/free-photo/close-up-image-programer-working-his-desk-office_1098-18707.jpg"
              alt="Profile"
              className="rounded-xl w-full shadow-inner"
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="flex flex-col justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-[#e0e0e0] p-6 rounded-xl shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff]">
            <h2 className="text-2xl font-semibold mb-4 ">
              Hello, I'm Siraz
            </h2>
            <p className="text-base mb-4">
              I am a passionate web developer with a love for creating beautiful and functional
              websites. My expertise includes front-end and back-end technologies, including React,
              Node.js, and everything in between. I enjoy problem-solving and continuously learning
              new skills to stay ahead of the curve in this ever-evolving tech world.
            </p>
            <p className="text-base">
              Over the years, I have worked on various projects, collaborating with talented teams to
              build innovative solutions. I believe in the power of technology to change the world,
              and I am excited to be part of that transformation.
            </p>
            <Link
              to="/contact"
              className="inline-block mt-4  bg-[#e0e0e0] text-black text-lg px-6 py-3 rounded-md shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff] transition duration-300"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Education Timeline */}
      <div className="my-20">
        <motion.h2
          className="text-3xl font-semibold text-center mb-12 "
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Education Journey
        </motion.h2>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-sky-900"></div>

          <div className="space-y-10">
            {educationTimeline.map((edu, index) => (
              <motion.div
                key={index}
                className={`px-6 md:px-24 relative flex items-center w-full ${
                  index % 2 === 0 ? "justify-end" : "justify-start"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-cyan-500 shadow-md border-4 border-white"></div>

                {/* Timeline Content */}
                <div
                  className={`bg-[#e0e0e0] w-full md:w-2/5 p-6 rounded-xl shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] ${
                    index % 2 === 0 ? "ml-6 text-right" : "mr-6 text-left"
                  }`}
                >
                  <h3 className="text-xl  font-semibold">
                    {/* <span className="mr-2 text-xl">{edu.icon}</span> */}
                    {edu.degree}
                  </h3>
                  <p>{edu.institution}</p>
                  <p className="text-slate-500 font-bold mt-2">{edu.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
