import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="min-h-screen py-12 px-4 md:px-24 pt-36 bg-[#e0e0e0] text-gray-800">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Heading */}
        <div className="text-center mb-12">
          <motion.h1
            className="text-3xl font-semibold mb-4 "
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Get in Touch
          </motion.h1>
          <motion.p
            className=" text-gray-600 dark:text-gray-300 text-base font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            We’d love to hear from you! Whether you have a question or just want to say hello.
          </motion.p>
        </div>

        {/* Main Content */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Contact Image */}
          <motion.div
            className="rounded-xl p-4 shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff]"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg"
              alt=""
              className="rounded-xl shadow-md"
            />
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="rounded-xl p-8 shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] space-y-6"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-2xl font-semibold  mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Send a message
            </motion.h2>

            {/* Name */}
            <div>
              <label htmlFor="name" className="block font-medium mb-1">
                Name
              </label>
              <motion.input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-[#e0e0e0] text-gray-800
                           shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff]
                           focus:outline-none focus:ring-2 focus:ring-blue-400"
                whileFocus={{ scale: 1.01 }}
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block font-medium mb-1">
                Email
              </label>
              <motion.input
                type="email"
                id="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-[#e0e0e0] text-gray-800
                           shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff]
                           focus:outline-none focus:ring-2 focus:ring-blue-400"
                whileFocus={{ scale: 1.01 }}
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block font-medium mb-1">
                Message
              </label>
              <motion.textarea
                id="message"
                rows="5"
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-lg bg-[#e0e0e0] text-gray-800
                           shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff]
                           focus:outline-none focus:ring-2 focus:ring-blue-400"
                whileFocus={{ scale: 1.01 }}
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full text-gray-800 font-semibold py-3 rounded-xl
                         bg-[#e0e0e0] shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff]
                         hover:shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff]
                         transition duration-300 ease-in-out"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
