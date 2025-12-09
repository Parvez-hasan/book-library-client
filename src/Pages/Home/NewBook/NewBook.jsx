import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const NewBook = () => {

  return (

    <motion.div 
      initial={{ opacity: 0, x: -60 }}    
      whileInView={{ opacity: 1, x: 0 }} 
      transition={{ duration: 0.6 }}      
      viewport={{ once: true }}       
      className="container mx-auto px-4 py-8"
    >
      <h2 className="text-2xl font-semibold flex justify-center items-center mb-4">Latest Books</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {/* {
        books.map((b) => (
          <div key={b._id} className="border rounded p-3">
            <img
              src={b.image}
              alt={b.title}
              className="w-full h-36 object-cover rounded"
            />
            <h3 className="font-medium mt-2">{b.title}</h3>
            <p className="text-sm text-gray-500">{b.author}</p>

            <Link
              to={`/books/${b._id}`}
              className="inline-block mt-2 text-indigo-600"
            >
              Details
            </Link>
          </div>
        ))} */}
      </div>
    </motion.div>
  );
};

export default NewBook;
