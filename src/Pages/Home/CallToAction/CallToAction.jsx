import { Link } from "react-router";
import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <section className="py-16 bg-blue-50 mb-2 dark:bg-gray-800 shadow-2xl overflow-hidden">
      <motion.div
        className="max-w-5xl mx-auto px-4 text-center"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Ready to Start Reading Smarter?
        </motion.h2>

        <motion.p
          className="mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Browse thousands of books and get them delivered to your doorstep from
          nearby libraries.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* <Link
            to="/all-books"
            className="inline-block px-8 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
          >
            Explore Books
          </Link> */}
          <Link to="/all-books">
            <div className="flex justify-center py-3">
              <button className="cursor-pointer bg-gradient-to-b from-pink-500 to-pink-600 shadow-[0px_4px_32px_0_rgba(99,102,241,.70)] px-6 py-3 rounded-xl border-[1px] border-slate-500 text-white font-medium group">
                <div className="relative overflow-hidden">
                  <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                     Explore Books
                  </p>
                  <p className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                     Explore Books
                  </p>
                </div>
              </button>
            </div>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CallToAction;
