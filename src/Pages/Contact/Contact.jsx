import React from "react";

const Contact = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3">Contact Us</h1>
        <p className="text-gray-600 dark:text-gray-400">
          We are here to answer your questions and help you get started.
        </p>
      </div>

      <div className="grid md:grid-cols-2 justify-center items-center gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-3">📍 17 Arlington St, Kishoreganj, Dhaka, Bangladesh</p>
          <p className="text-gray-600 dark:text-gray-400 mb-3">📧 support@bookcourier.com</p>
          <p className="text-gray-600 dark:text-gray-400">📞 +880 1948-017882</p>
        </div>

        <form className="bg-white dark:text-gray-800 shadow rounded-xl p-6 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full border rounded-md px-4 py-2 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full border rounded-md px-4 py-2 focus:outline-none"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            required
            className="w-full border rounded-md px-4 py-2 focus:outline-none"
          ></textarea>
          <button className="w-full bg-black text-white py-2 rounded-md hover:opacity-90">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
