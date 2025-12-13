import React, { useEffect, useState } from "react";
import img from "..//..//assets/library-9784151_1280.png";
import { Link } from "react-router";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const AllBooks = () => {

  const axiosSecure = useAxiosSecure();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axiosSecure.get("/books").then((res) => {
      setBooks(res.data);
    });
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
      {books.map((book) => (
        <div
          key={book._id}
          className="border rounded p-4 shadow hover:shadow-lg"
        >
          <img src={book.image} className="h-56 w-full object-cover rounded" />

          <h2 className="text-xl font-semibold mt-2">{book.title} book title</h2>
          <p className="text-gray-500">By {book.author}</p>
          <p className="font-bold text-pink-500">৳ {book.price}</p>

          <button className="mt-3 bg-pink-600 text-white px-4 py-2 w-full rounded">
            View Details
          </button>
        </div>
      ))}
    </div>
  );
};

export default AllBooks;
