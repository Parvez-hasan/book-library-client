
import {motion, AnimatePresence } from "framer-motion";
//import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Banner = () => {

  const slides = [
    {
      id: 1,
      title: "Find Trusted Electricians Near You",
      description:
        "Book professional electricians for your home and office repairs easily.",
      img: "https://i.ibb.co/5Q9G41d/man-electrical-technician-working-switchboard-with-fuses.jpg",
    },
    {
      id: 2,
      title: "Need a Reliable Plumber?",
      description: "Fix your pipes and leaks fast with trusted local plumbers.",
      img: "https://i.ibb.co/zVtFb7Fc/Plumbing-Maintenance-Tips-1.jpg",
    },
    {
      id: 3,
      title: "Home Cleaning Services You Can Trust",
      description: "Hire professional cleaners for your home today.",
      img: "https://i.ibb.co/QjDCR1cx/shutterstock-395889715.jpg",
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
     <div className="relative overflow-hidden h-[90vh]">
      <AnimatePresence>
        <motion.div
          key={slides[current].id}
          className="absolute inset-0 flex flex-col justify-center items-center text-center text-white"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8 }}
          style={{
            backgroundImage: `url(${slides[current].img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-black/50 absolute inset-0"></div>
          <div className="relative z-10 max-w-2xl px-4">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              {slides[current].title}
            </h2>
            <p className="text-lg mb-6">{slides[current].description}</p>
            <Link
              to="/service"
              className="bg-green-600 px-6 py-3 font-semibold rounded-xl text-white hover:bg-green-700 transition"
            >
              Explore Services
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Optional Dots indicator */}
      <div className="absolute bottom-6 flex gap-3 justify-center w-full z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-3 w-3 rounded-full transition-all ${
              i === current ? "bg-blue-500 scale-110" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Banner;
