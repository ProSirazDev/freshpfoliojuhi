import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneAlt, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4 font-mono">Get in Touch</h1>
          <p className="text-gray-600 text-lg font-medium">
            We’d love to hear from you! Whether you have a question or just want to say hello.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info Section */}
          <div className="bg-white shadow-lg rounded-lg p-8 bg-cover bg-center">
            {/* <h2 className="text-2xl  text-gray-800 mb-6 font-mono font-bold">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <FontAwesomeIcon icon={faEnvelope} className="text-blue-500 text-2xl" />
                <span className="text-gray-700 text-lg">email@example.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <FontAwesomeIcon icon={faPhoneAlt} className="text-green-500 text-2xl" />
                <span className="text-gray-700 text-lg">+1 234 567 890</span>
              </div>
              <div className="flex items-center space-x-4">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-red-500 text-2xl" />
                <span className="text-gray-700 text-lg">123 Main Street, City, Country</span>
              </div>
            </div> */}
            <img
            src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?t=st=1736573757~exp=1736577357~hmac=79274f99cea2c8e7b38642d084fb6bbb031b36a37cd993e233aa86e9db655f50&w=740"
            alt=""
            className=""
          />
          </div>

          {/* Contact Form */}
          <form className="bg-white shadow-lg rounded-lg p-8 space-y-6">
            <h2 className="text-2xl text-gray-800 font-bold font-mono">Send Us a Message</h2>
            <div>
              <label htmlFor="name" className="block text-gray-600 font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-600 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-600 font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                placeholder="Your Message"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 rounded-lg shadow-md hover:from-purple-500 hover:to-blue-500 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
