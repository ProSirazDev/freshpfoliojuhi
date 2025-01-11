import React from "react";
import { motion } from "framer-motion";

const Intro = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full grid grid-cols-2 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute top-24 left-0 w-full h-[550px] object-cover"
      >
        <source
          src="https://cdn.pixabay.com/video/2020/09/04/49050-459186396_large.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Left Div */}
      <motion.div
        className="relative left bg-cover bg-center grid grid-cols-2"
        style={{
          backgroundImage: `url('https://img.freepik.com/free-vector/digital-binary-code-futuristic-background-coding-programming_1017-45493.jpg?t=st=1736499738~exp=1736503338~hmac=fb88bff7af96a95182792c0d83548a8eb1e7d249f9bda26b60fd7d5d2a1325aa&w=740')`,
          height: "550px",
        }}
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "tween", duration: 1 }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-90 "></div>

        <div className="relative z-10 px-5 py-20">
          <motion.p
            className="text-orange-500 text-4xl font-bold font-mono pl-16"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Frontend Developer
          </motion.p>
          <motion.p
            className="text-white text-xl font-medium font-mono pl-20 pt-10"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ delay: 1, duration: 1 }}
          >
            <span className="text-red-400 font-bold text-4xl">&lt;&gt;</span>
            Passionate about building responsive, user-friendly interfaces with
            HTML, CSS, JavaScript, and React.
            <span className="text-red-400 font-bold text-4xl">&lt;/&gt;</span>
          </motion.p>
        </div>
        <div className="relative z-10 flex items-center justify-center rounded-l-full overflow-hidden">
          <img
            src="https://i.postimg.cc/sxtL43YG/preview.png"
            alt=""
            className="object-left"
          />
        </div>
      </motion.div>

      {/* Right Div */}
      <motion.div
        className="relative right bg-cover bg-center grid grid-cols-2"
        style={{
          backgroundImage: `url('https://img.freepik.com/free-vector/digital-binary-code-futuristic-background-coding-programming_1017-45493.jpg?t=st=1736499738~exp=1736503338~hmac=fb88bff7af96a95182792c0d83548a8eb1e7d249f9bda26b60fd7d5d2a1325aa&w=740')`,
          height: "550px",
        }}
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "tween", duration: 1 }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-90"></div>

        <div className="relative z-10 flex items-center justify-center rounded-r-full overflow-hidden">
          <img
            src="https://i.postimg.cc/sxtL43YG/preview.png"
            alt=""
            className="object-left"
          />
        </div>
        <div className="relative z-10 px-5 py-20">
          <motion.p
            className="text-orange-600 text-4xl font-bold font-mono pl-10"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Backend Developer
          </motion.p>
          <motion.p
            className="text-white text-xl font-medium font-mono pt-10"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ delay: 1, duration: 1 }}
          >
            <span className="text-red-400 font-bold text-4xl">&lt;&gt;</span>
            Skilled in building robust, scalable systems with Node.js and
            databases like PostgreSQL and MongoDB
            <span className="text-red-400 font-bold text-4xl">&lt;/&gt;</span>
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default Intro;
