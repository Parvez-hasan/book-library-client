
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import React from 'react';

const WhyChoose = () => {
   return (

    <div id="why" className="container mx-auto py-6">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <h2 className="text-2xl text-center font-semibold mb-2">Why Choose BookCourier</h2>
        <p className=" md:text-mx text-center font-semibold mx-auto text-gray-600 dark:text-gray-300 md:max-w-3/4 p-4">We provide fast, secure, and easy shopping-like services for library owners and readers — from book browsing to ordering, payment, and home delivery all under one roof.</p>
      </motion.div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {[
          {title: "Nearby Libraries", desc: "Collect books from your nearest library.", icon: <Check/>},
          {title: "Easy Orders", desc: "Click-to-order and home delivery", icon: <Check/>},
          {title: "Track & Return", desc: "Order tracking and easy return process", icon: <Check/>}
        ].map(item => (
          <div key={item.title} className="p-4 border rounded bg-white dark:bg-slate-800">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded bg-indigo-50 dark:bg-indigo-900 text-indigo-600">{item.icon}</div>
              <div>
                <h4 className="font-medium">{item.title}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-300">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChoose;