import React from "react";
import { DragCards } from "./DragCodes";

const Blog = () => {
  return (
    <div className="min-h-screen pt-16 flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Image */}
      <img
        src="https://img.freepik.com/free-vector/realistic-coming-soon-background_23-2148877164.jpg?t=st=1736770707~exp=1736774307~hmac=b4bbcc21779c1ff646b275aaf1c0b65a24733a2b42561607f2d5a4e3e342488e&w=740" // Replace with your actual image URL
        alt="Coming Soon"
        className="mb-8 rounded-lg shadow-lg"
      />
      {/* Text */}
      <h1 className="text-4xl font-bold mb-4">Blog Coming Soon</h1>
      <p className="text-lg text-center">
        Stay tuned! Our blog is under construction and will be available soon.
      </p>
      <DragCards></DragCards>
    </div>
  );
};

export default Blog;



