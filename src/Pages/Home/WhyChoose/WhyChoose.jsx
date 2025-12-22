import { motion } from "framer-motion";
import { Check } from "lucide-react";
import React from 'react';

const WhyChoose = () => {

  // ✨ Animation Variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25, // one by one animation
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: 50 },  // right to left
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div id="why" className="container mx-auto py-6">

      {/* Heading Animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl text-center font-semibold mb-2">
          <span className="text-blue-600">Why Choose</span> <span className="text-pink-600"> BookCourier</span>
        </h2>

        <p className="md:text-mx text-center font-semibold mx-auto text-gray-600 dark:text-gray-300 md:max-w-3/4 p-4">
          We provide fast, secure, and easy shopping-like services for library owners and readers —
          from book browsing to ordering, payment, and home delivery all under one roof.
        </p>
      </motion.div>

      {/* Boxes Animation */}
      <motion.div
        className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 p-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {[ 
          { title: "Nearby Libraries", desc: "Collect books from your nearest library.", icon: <Check /> },
          { title: "Easy Orders", desc: "Click-to-order and home delivery", icon: <Check /> },
          { title: "Track & Return", desc: "Order tracking and easy return process", icon: <Check /> }
        ].map(itemData => (
          <motion.div
            key={itemData.title}
            variants={item}
            className="p-4 border rounded bg-white dark:bg-slate-800 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-3">
              <div className="p-2 rounded bg-indigo-50 dark:bg-indigo-900 text-indigo-600">
                {itemData.icon}
              </div>
              <div>
                <h4 className="font-medium">{itemData.title}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  {itemData.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default WhyChoose;
