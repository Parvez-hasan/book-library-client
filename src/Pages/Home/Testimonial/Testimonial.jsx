import React from 'react';
import { motion } from "framer-motion";

const items = [
{
id: 1,
name: "Afsana",
image: "https://i.ibb.co/4m3W3nD/user1.jpg",
text: "BookCourier made my life easier — books arrive right at my doorstep.",
},
{
id: 2,
name: "Rafi",
image: "https://i.ibb.co/fHfW1f0/user2.jpg",
text: "Super fast delivery from the library. I’m very satisfied!",
},
{
id: 3,
name: "Shima",
image: "https://i.ibb.co/j6QmGgZ/user3.jpg",
text: "Ordering and payment are incredibly smooth and easy.",
},
{
id: 4,
name: "Nishat",
image: "https://i.ibb.co/5G2CnP4/user4.jpg",
text: "A perfect platform for book lovers. Highly recommended!",
},
{
id: 5,
name: "Sabbir",
image: "https://i.ibb.co/Jr7K1BV/user5.jpg",
text: "Loved the clean UI and lightning-fast service!",
},
{
id: 6,
name: "Munni",
image: "https://i.ibb.co/VJbrb7C/user6.jpg",
text: "Book delivery and return process is super smooth.",
},
{
id: 7,
name: "Tanvir",
image: "https://i.ibb.co/D1QBVkn/user7.jpg",
text: "An all-in-one book ordering experience. Very helpful!",
},
];

const Testimonial = () => {

    return (
    <div className="py-8 p-4 container mx-auto">
      <h2 className="text-2xl text-center font-semibold mb-4">What people say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map(it=>(
          <motion.div key={it.id} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="p-4 border rounded bg-white dark:bg-slate-800">
            <p className="text-gray-600 dark:text-gray-300">"{it.text}"</p>
            <div className="mt-3 font-medium">{it.name}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;