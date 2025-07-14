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

const Tech = () => {
 const technologies = [
  { icon: faHtml5, name: "HTML5", color: "#e34c26" },
  { icon: faCss3Alt, name: "CSS3", color: "#264de4" },
  { icon: faJs, name: "JavaScript", color: "#eab308" },
  { icon: faReact, name: "React", color: "#61dafb" },
  { icon: faNodeJs, name: "Node.js", color: "#3c873a" },
  { icon: faGitAlt, name: "Git", color: "#f1502f" },
  { icon: faBootstrap, name: "Bootstrap", color: "#7952b3" },
  { icon: faBootstrap, name: "Tailwind CSS", color: "#38bdf8" },
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
        className="grid grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto px-6"
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
