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
import { motion } from "framer-motion";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const Tech = () => {
const technologies = [
  { icon: faHtml5, name: "HTML5", color: "#c14424" },         // deeper orange-red
  { icon: faCss3Alt, name: "CSS3", color: "#1d4ed8" },         // Tailwind blue-600
  { icon: faJs, name: "JavaScript", color: "#ca8a04" },        // Tailwind yellow-600
  { icon: faReact, name: "React", color: "#0284c7" },          // Tailwind cyan-600
  { icon: faNodeJs, name: "Node.js", color: "#2f5d2f" },       // darker green
  { icon: faGitAlt, name: "Git", color: "#c2410c" },           // deep orange
  { icon: faBootstrap, name: "Bootstrap", color: "#5b2b82" },  // deep purple
  { icon: faBootstrap, name: "Tailwind CSS", color: "#0e7490" }, // Tailwind cyan-700
  { icon: faDatabase, name: "PostgreSQL", color: "#1d4ed8" },  // Tailwind blue-600
  { icon: faDatabase, name: "MongoDB", color: "#065f46" },     // Tailwind emerald-700
];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-black  text-gray-800 py-16">
      <h1 className="text-xl font-semibold text-center text-white drop-shadow-[0_0_6px_sky] mb-16">
      &#x2688; &#x2688; &#x2688; Technologies I am in love with &#x2688; &#x2688; &#x2688;
      </h1>

      <motion.div
        className="grid grid-cols-3 md:grid-cols-5 gap-6 max-w-5xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
      {technologies.map((tech, index) => (
  <motion.div
    key={index}
    className="flex flex-col items-center space-y-3 group"
    variants={itemVariants}
  >
    <motion.div
      className="rounded-xl p-5 bg-[#e0e0e0]
                 shadow-[4px_4px_8px_#06b6d4,-4px_-4px_8px_#0891b2]
                 hover:shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff]
                 transition duration-300 ease-in-out"
      whileHover={{ scale: 1.2, rotate: 10 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <FontAwesomeIcon
        icon={tech.icon}
        className="text-3xl md:text-4xl"
        style={{ color: tech.color }}
      />
    </motion.div>
    <p className="text-base text-white md:text-lg font-medium">{tech.name}</p>
  </motion.div>
))}

      </motion.div>
    </div>
  );
};

export default Tech;
