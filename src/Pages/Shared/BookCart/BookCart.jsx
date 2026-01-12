

import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const BookCart = ({ latest }) => {
  const { bookName, authorName, price, description, rating = 4.5,
location = "Bangladesh", status, image } = latest;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -6,
        scale: 1.00,
        boxShadow: "0px 20px 40px rgba(0,0,0,0.15)",
      }}
      transition={{ type: "spring", stiffness: 60, damping: 5 }}
      className="bg-blue-50 border card border-blue-200 rounded-xl p-4 flex flex-col overflow-hidden cursor-pointer"
    >
      {/* Image with hover zoom */}
      <motion.img
        src={image}
        alt={bookName}
        className="w-full h-56 object-cover rounded-lg border border-blue-300"
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.4 }}
      />

      <h2 className="text-lg font-bold mt-3 text-blue-700">
        {bookName}
      </h2>

      <p className="text-blue-600 text-sm">
        <span className="font-semibold">By: </span>
        {authorName}
      </p>

      <p className="text-sm text-gray-600 line-clamp-2 py-2">
          {description.length > 70 ? description.slice(0, 70) +"..." : description}     
         
      </p>

      <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span>⭐ {rating}</span>
          <span>{location}</span>
       </div>



      <div className="mt-4 flex justify-between items-center">
        <span className="text-xl font-bold text-blue-800">
          ${price}
        </span>

        <span
          className={`px-3 py-1 text-sm rounded-lg ${
            status === "Available"
              ? "bg-blue-600 text-white"
              : "bg-pink-500 text-white"
          }`}
        >
          {status}
        </span>
      </div>

      <Link to={`/books/${latest._id}`}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="py-2 w-full bg-blue-600 hover:bg-blue-700 text-white mt-3 rounded-sm"
        >
          Book Details
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default BookCart;