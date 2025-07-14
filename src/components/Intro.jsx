import React from "react";
import { Typewriter } from 'react-simple-typewriter';

const Intro = () => {
  return (
    <div className="w-full flex items-center justify-center pt-16 md:pt-24 bg-black">
      {/* Left Section with Typing Effect */}
      <div className="relative z-10 px-5 md:py-20 text-center">
        {/* Typing Effect for "Hi, I am Siraz" */}
        <p className="text-[#06B6D4] text-lg md:text-2xl font-semibold tracking-wide drop-shadow-lg">
          <Typewriter
            words={['Hi, I am Juhi']}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p>

        {/* Typing Effect for "Full Stack Developer" */}
        <p className="text-green-500 text-xl md:text-4xl font-bold md:pl-20 pt-5 tracking-wide drop-shadow-lg">
          <Typewriter
            words={['Full Stack Developer']}
            loop={2}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </p>

        {/* Typing Effect for Additional Info */}
        <p className="text-white text-xs md:text-xl font-light md:pl-20 md:pt-10 drop-shadow-lg">
          <Typewriter
          words={[
    "<> Building full-stack responsive apps with clean code, scalable logic, and modern UI. </>"
  ]}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={90}
            deleteSpeed={50}
            delaySpeed={3000}
          />
        </p>
        <p className="text-orange-400 text-xs  md:text-base font-normal font-mono md:pl-20 md:pt-5 drop-shadow-lg">
          <Typewriter
          words={[
    "3+ Years of Experience"
  ]}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={90}
            deleteSpeed={50}
            delaySpeed={3000}
          />
        </p>
      </div>
    </div>
  );
};

export default Intro;
