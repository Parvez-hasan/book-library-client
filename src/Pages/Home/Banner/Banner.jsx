
import {motion, AnimatePresence } from "framer-motion";
//import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Banner = () => {

  const slides = [
    {
      id: 1,
      title: "Automatic Data for Book, Game & Video",
      description:
        "Our library management service caters to libraries, schools, and home catalogs",
      img: "https://i.ibb.co.com/b5S8TDNM/vladimir-mokry-G-4w-X5t-ZNu-E-unsplash.jpg",
    },
    {
      id: 2,
      title: "Create up to 100 mixed media collections?",
      description: "Our library management service caters to libraries, schools, organizations, and home catalogs",
      img: "https://i.ibb.co.com/Nn2QXF92/pexels-pixabay-256455.jpg",
    },
    {
      id: 3,
      title: "Libib Pro Users Can Access Even More Power",
      description: "Libib Pro brings an abundance of additional enhancements to the table.",
      img: "https://i.ibb.co.com/WvR8RNJk/teenagers-with-gadgets-library.jpg",
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
              Show All Books
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
