import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Frontend Development",
    description:
      "Crafting beautiful and responsive user interfaces with React, Tailwind, and modern web technologies.",
    icon: "🖌️",
  },
  {
    title: "Backend Development",
    description:
      "Building robust APIs and scalable server-side solutions using Node.js, Express, and MongoDB.",
    icon: "🛠️",
  },
  {
    title: "Full Stack Solutions",
    description:
      "Providing end-to-end solutions by seamlessly integrating front-end and back-end systems.",
    icon: "🌐",
  },
  {
    title: "Performance Optimization",
    description:
      "Enhancing application performance to ensure a smooth and fast user experience.",
    icon: "⚡",
  },
];

const Services = () => {
  return (
    <div className="h-full bg-black py-24 px-6 sm:px-12 lg:px-24 pt-36 dark:text-white">
      <div className="text-center">
        <motion.h1
          className="text-3xl font-semibold text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Services
        </motion.h1>
        <motion.p
          className="mt-4 text-white text-base font-medium"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Comprehensive solutions for all your web development needs.
        </motion.p>
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-[#e0e0e0] text-gray-800 p-6 rounded-xl  shadow-[4px_4px_8px_#06b6d4,-4px_-4px_8px_#0891b2] transition duration-300 ease-in-out"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            <div className="text-5xl mb-4 text-center">{service.icon}</div>
            <h3 className="text-xl font-semibold text-center">{service.title}</h3>
            <p className="mt-2 text-center">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
