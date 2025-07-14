import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const educationTimeline = [
  { icon: "🏫", year: "2013-2016", degree: "B.Sc In CSE", institution: "Aliah University" },
  { icon: "🏫", year: "2016-2018", degree: "M.Sc In CSE", institution: "Aliah University" },
  { icon: "🏫", year: "2018-2020", degree: "M.Tech In CSE", institution: "Aliah University" },
  { icon: "🏫", year: "2021-2022", degree: "Process Executive", institution: "NVIDIA Graphics" },
  { icon: "🏫", year: "2022-2025", degree: "Full Stack Developer", institution: "V Sigma Softech Solutions Pvt. Ltd." },
];

const About = () => {
  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 md:px-24 pt-28 text-black">
      {/* Heading */}
      <div className="text-center mb-12">
        <motion.h1
          className="text-2xl sm:text-3xl font-semibold text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h1>
        <motion.p
          className="mt-4 text-white dark:text-gray-300 text-xl sm:text-3xl font-medium"
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
          className="flex justify-center items-center order-2 md:order-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-[#e0e0e0] h-[350px] sm:h-[500px] rounded-2xl shadow-[4px_4px_8px_#06b6d4,-4px_-4px_8px_#0891b2] p-2 sm:p-4 w-full max-w-md mx-auto">
            <img
              src="https://img.freepik.com/free-photo/close-up-image-programer-working-his-desk-office_1098-18707.jpg"
              alt="Profile"
              className="rounded-xl w-full h-full object-cover bg-center shadow-inner"
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="flex flex-col justify-center order-1 md:order-2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-[#e0e0e0] px-5 py-10 sm:px-6 sm:py-24 rounded-xl shadow-[4px_4px_8px_#06b6d4,-4px_-4px_8px_#0891b2] h-auto">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              Hello, I'm Juhi Sabnam Sarkar
            </h2>
            <p className="text-sm sm:text-base mb-4">
              I am a passionate web developer with a love for creating beautiful and functional
              websites. My expertise includes front-end and back-end technologies like React,
              Node.js, and everything in between.
            </p>
            <p className="text-sm sm:text-base">
              I enjoy problem-solving and continuously learning new skills. I believe in the power
              of technology to change the world and love collaborating on innovative projects.
            </p>
            <Link
              to="/contact"
              className="inline-block mt-10 bg-[#e0e0e0] text-black text-sm sm:text-lg px-6 py-3 rounded-md shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff] transition duration-300"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Education Timeline */}
      <div className="my-20">
        <motion.h2
          className="text-2xl sm:text-3xl font-semibold text-center text-white mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Education Journey
        </motion.h2>

        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-sky-900"></div>

          <div className="space-y-10">
            {educationTimeline.map((edu, index) => (
              <motion.div
                key={index}
                className={`relative w-full px-2 sm:px-6 md:px-24 flex flex-col sm:flex-row items-center ${
                  index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {/* Timeline Dot */}
                <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-cyan-500 shadow-md border-4 border-white"></div>

                {/* Timeline Content */}
                <div
                  className={`bg-[#e0e0e0] w-full sm:w-4/5 md:w-2/5 p-5 rounded-xl shadow-[4px_4px_8px_#06b6d4,-4px_-4px_8px_#0891b2] ${
                    index % 2 === 0 ? "sm:ml-6 text-left sm:text-right" : "sm:mr-6 text-left"
                  }`}
                >
                  <h3 className="text-lg sm:text-xl font-semibold">{edu.degree}</h3>
                  <p className="text-sm sm:text-base">{edu.institution}</p>
                  <p className="text-slate-500 font-bold text-sm sm:text-base mt-2">{edu.year}</p>
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
