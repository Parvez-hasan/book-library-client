import React from "react";
import { motion } from "framer-motion";
import { MdDashboardCustomize, MdPayments } from "react-icons/md";

import { FaLaptop } from "react-icons/fa6";

const Features = () => {

  // Animation setup
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.25 }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -50 }, 
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="py-4">
      {/* Heading animation */}
      <motion.h2
        className="text-2xl font-semibold text-center mb-4"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Our Features
      </motion.h2>

      {/* Box animation */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div variants={item} className="p-4 border rounded bg-white dark:bg-slate-800">

          <div className="flex justify-between items-center">
            <h4 className="font-medium">Secure Payments</h4> 
             <MdPayments className="text-3xl text-blue-700" />
          </div>  

          <p className="text-sm text-gray-500 mt-2">
            Stripe integration for secure transactions.
          </p>
        </motion.div>

        <motion.div variants={item} className="p-4 border rounded bg-white dark:bg-slate-800">

          <div className="flex justify-between items-center">
            <h4 className="font-medium">Role Based Dashboard</h4>
            <MdDashboardCustomize className="text-3xl text-pink-700" />
          </div>

          <p className="text-sm text-gray-500 mt-2">
            User, Librarian and Admin roles with proper access control.
          </p>
        </motion.div>

        <motion.div variants={item} className="p-4 border rounded bg-white dark:bg-slate-800">
          
          <div className="flex justify-between items-center">
            <h4 className="font-medium">Responsive UI</h4>
            <FaLaptop className="text-3xl text-blue-700" />
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Works beautifully on mobile, tablet and desktop.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Features;
