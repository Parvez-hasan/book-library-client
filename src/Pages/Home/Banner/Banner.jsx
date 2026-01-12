
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { FaAngleDown } from "react-icons/fa";

const Banner = () => {
  const slides = [
    {
      id: 1,
      title: "Library Books Delivered to Your Doorstep",
      description:
        "BookCourier connects libraries with readers for fast, safe, and reliable home delivery.",
      img: "https://i.ibb.co.com/b5S8TDNM/vladimir-mokry-G-4w-X5t-ZNu-E-unsplash.jpg",
    },
    {
      id: 2,
      title: "Borrow, Read & Return Without Visiting Libraries",
      description:
        "Perfect for students, researchers, and book lovers across the city.",
      img: "https://i.ibb.co.com/Nn2QXF92/pexels-pixabay-256455.jpg",
    },
    {
      id: 3,
      title: "Smart Library-to-Home Delivery System",
      description:
        "Track orders, manage books, and enjoy seamless reading experiences.",
      img: "https://i.ibb.co.com/WvR8RNJk/teenagers-with-gadgets-library.jpg",
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 4500);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-[70vh] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          className="absolute inset-0 flex items-center justify-center text-center text-white"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          style={{
            backgroundImage: `url(${slides[current].img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />

          {/* Content */}
          <div className="relative z-10 max-w-3xl px-4">
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-5 leading-tight"
            >
              {slides[current].title}
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="text-lg md:text-xl mb-8 text-gray-200"
            >
              {slides[current].description}
            </motion.p>

            <Link to="/all-books">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg font-semibold"
              >
                Explore All Books
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <div className="absolute  bottom-4 w-full flex justify-center gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition-all ${
              index === current
                ? "bg-blue-500 scale-125"
                : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator (Visual Flow) */}
      {/* <div className="absolute bottom-6 w-full flex justify-center z-20">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-white text-2xl opacity-80"
        >
          <FaAngleDown />
        </motion.div>
      </div> */}
    </section>
  );
};

export default Banner;