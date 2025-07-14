import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO at TechCorp",
    image: "https://picsum.photos/id/238/200/300",
    feedback:
      "Working with you was an absolute pleasure. Your attention to detail and dedication to delivering quality work were exceptional!",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Product Manager at Startup Inc.",
    image: "https://picsum.photos/id/239/200/300",
    feedback:
      "Your web development skills are top-notch! You brought our vision to life with creativity and professionalism.",
  },
  {
    id: 3,
    name: "Alice Brown",
    role: "Freelance Designer",
    image: "https://picsum.photos/id/248/200/300",
    feedback:
      "Thank you for creating such a seamless and user-friendly website. I highly recommend your services to anyone!",
  },
  {
    id: 4,
    name: "Michael Scott",
    role: "Regional Manager at Dunder Mifflin",
    image: "https://picsum.photos/id/255/200/300",
    feedback:
      "Your creativity and technical expertise exceeded all expectations. Great job!",
  },
  {
    id: 5,
    name: "Pam Beesly",
    role: "Artist at ArtWorks",
    image: "https://via.placeholder.com/100",
    feedback:
      "Your professionalism and commitment to quality were evident in every step of the process. Thank you!",
  },
  {
    id: 6,
    name: "Jim Halpert",
    role: "Sales Rep at Dunder Mifflin",
    image: "https://via.placeholder.com/100",
    feedback:
      "You delivered an incredible website that perfectly aligns with our goals. Highly recommended!",
  },
];

const Testimonial = () => {
  return (
    <div className="py-16 px-6 sm:px-0 bg-black ">
      <h2 className="text-md sm:text-xl font-semibold text-center text-white drop-shadow-[0_0_6px_sky] mb-16">
      &#x2688; &#x2688; &#x2688; Testimonials &#x2688; &#x2688; &#x2688;
      </h2>
      <motion.div
        className="overflow-hidden "
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className="flex  gap-6 p-6"
          drag="x"
          dragConstraints={{ left: -600, right: 0 }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="min-w-[300px] rounded-xl overflow-hidden bg-[#e0e0e0] p-3
                       shadow-[4px_4px_8px_#06b6d4,-4px_-4px_8px_#0891b2]
                       hover:shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff]
                       transition duration-300 ease-in-out
                max-w-sm mx-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mb-4 mx-auto object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800 text-center">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-500 text-center mb-4">
                {testimonial.role}
              </p>
              <p className="text-gray-600 text-center">{testimonial.feedback}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Testimonial;
