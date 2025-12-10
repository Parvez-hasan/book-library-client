import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const NewBook = () => {

  const [books, setBooks] = useState([]);

  useEffect(()=>{
    fetch(`${import.meta.env.VITE_SERVER_URL}/api/books?limit=6`)
      .then(res => res.json())
      .then(data => setBooks(data))
      
      .catch(err => console.error(err));
  }, []);

  
  return (

    <motion.div 
      initial={{ opacity: 0, x: -60 }}    
      whileInView={{ opacity: 1, x: 0 }} 
      transition={{ duration: 0.6 }}      
      viewport={{ once: true }}       
      className="container mx-auto px-4 py-8"
    >
      <h2 className="text-2xl font-semibold flex justify-center items-center mb-4">Latest Books</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* {books.length === 0 && <div className="col-span-full text-center py-8">No books yet</div>} */}
        {books.map(b => (
          <div key={b._id} className="bg-white dark:bg-slate-800 border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
            <img src={b.image} alt={b.title} className="w-full h-40 object-cover"/>
            <div className="p-3">
              <h3 className="font-medium text-sm">{b.title}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-300">{b.author}</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-sm font-semibold">{b.price ? `$${b.price}` : "Free"}</span>
                <Link to={`/books/${b._id}`} className="text-indigo-600 text-sm">Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default NewBook;
