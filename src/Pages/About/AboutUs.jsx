import React from "react";

const AboutUs = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About BookCourier</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A smart library-to-home book delivery system built for modern readers.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            We aim to make library access easier by allowing users to borrow and
            return books from nearby libraries without physical visits.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-5 rounded-xl shadow bg-white">
            📦 <h4 className="font-semibold mt-2 dark:text-gray-800">Fast Delivery</h4>
          </div>
          <div className="p-5 rounded-xl shadow bg-white">
            🔐 <h4 className="font-semibold dark:text-gray-800 mt-2">Secure System</h4>
          </div>
          <div className="p-5 rounded-xl shadow bg-white">
            💳 <h4 className="font-semibold dark:text-gray-800 mt-2">Easy Payments</h4>
          </div>
          <div className="p-5 rounded-xl shadow dark:text-gray-800 bg-white">
            📍 <h4 className="font-semibold mt-2">Wide Coverage</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
