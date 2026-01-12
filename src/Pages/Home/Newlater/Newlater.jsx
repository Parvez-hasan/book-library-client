import { motion } from "framer-motion";

const Newlater = () => {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated with BookCourier
          </h2>
          <p className="mb-8 opacity-90">
            Get notified about new books, offers, and delivery updates.
          </p>

          <motion.form
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-80 px-5 py-3 rounded-xl bg-blue-50 text-gray-900 outline-none"
            />
         
             <button
              type="submit"
             className="cursor-pointer bg-gradient-to-b from-pink-500 to-pink-600 shadow-[0px_4px_32px_0_rgba(99,102,241,.70)] px-6 py-3 rounded-xl border-[1px] border-slate-500 text-white font-medium group"> 
                <div className="relative overflow-hidden">
                  <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                     Subscribe
                  </p>
                  <p className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                    Subscribe
                  </p>
                </div>
              </button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Newlater;