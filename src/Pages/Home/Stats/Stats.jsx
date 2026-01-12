import { motion } from "framer-motion";

const stats = [
  { value: "10K+", label: "Books Delivered" },
  { value: "120+", label: "Libraries Connected" },
  { value: "35+", label: "Cities Covered" },
  { value: "5K+", label: "Happy Readers" },
];

const Stats = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            BookCourier in Numbers
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Trusted by readers and libraries across the country
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-3xl font-bold text-blue-600 mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
