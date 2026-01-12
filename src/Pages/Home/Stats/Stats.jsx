
const stats = [
  { value: "5K+", label: "Books Delivered" },
  { value: "120+", label: "Partner Libraries" },
  { value: "15+", label: "Cities Covered" },
  { value: "98%", label: "User Satisfaction" },
];

const Stats = () => {
  return (
    <section className="py-16 bg-blue-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((stat, i) => (
          <div key={i}>
            <h3 className="text-4xl font-bold">{stat.value}</h3>
            <p className="mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;