import React from "react";
import "./Latestwork.css";

const Latestwork = () => {
  return (
    <div className="bg-gray-100">
      {/* Shape Divider */}
      <div className="custom-shape-divider-top-1736490416">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M649.97 0L599.91 54.12 550.03 0 0 0 0 120 1200 120 1200 0 649.97 0z"
            className="shape-fill"
          ></path>
        </svg>
      </div>

      {/* Title Section */}
      <div className="w-full flex items-center justify-center my-8 ">
        <div className="bg-red-800 h-[2px] w-1/3"></div>
        <h1 className="text-center text-3xl font-mono py-2 px-4">
          Some of my latest work
        </h1>
        <div className="bg-red-800 h-[2px] w-1/3"></div>
      </div>

      {/* Card Grid */}
      <div className=" max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 pb-20">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transform transition duration-300 hover:scale-105">
          <img
            src="https://images.pexels.com/photos/28907975/pexels-photo-28907975/free-photo-of-young-woman-reading-outdoors-in-sunlight.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Image 1"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">Card Title 1</h2>
            <p className="text-gray-600 mt-2 text-sm">
              This is a short description of the first card. Add relevant content
              here.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transform transition duration-300 hover:scale-105">
          <img
            src="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Image 2"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">Card Title 2</h2>
            <p className="text-gray-600 mt-2 text-sm">
              This is a short description of the second card. Add relevant content
              here.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transform transition duration-300 hover:scale-105">
          <img
            src="https://images.pexels.com/photos/1236701/pexels-photo-1236701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Image 3"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">Card Title 3</h2>
            <p className="text-gray-600 mt-2 text-sm">
              This is a short description of the third card. Add relevant content
              here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latestwork;
