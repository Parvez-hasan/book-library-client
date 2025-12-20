import React from 'react';
import { Link } from 'react-router';
import Button from '../Button/Button';

const BookCart = ({latest}) => {
      const { bookName, authorName, price, status, image } = latest;

  return (
    <div className=" bg-blue-50 border border-blue-200 rounded-xl shadow p-4 hover:shadow-lg transition">
      <img
        src={image}
        alt={bookName}
        className="w-full h-56 object-cover rounded-lg border border-blue-300"
      />

      <h2 className="text-lg font-bold mt-3 text-blue-700">{bookName}</h2>
      <p className="text-blue-600 text-sm"><span className="font-semibold">By: </span>{authorName}</p>
{/* 
      <p className="mt-2 text-sm text-blue-700">
        <strong>Genre:</strong> {genre}
      </p> */}

      <div className="mt-4 flex justify-between items-center">
        <span className="text-xl font-bold text-blue-800">${price}</span>

        <span
          className={`px-3 py-1 text-sm rounded-lg ${
            status === "Available"
              ? "bg-blue-600 text-white"
              : "bg-pink-500 text-white"
          }`}
        >
          {status}
        </span>
      </div>

      <Link to={`/books/${latest._id}`}>
        <button className="py-2 w-full bg-blue-500 text-white mt-4 rounded-sm cursor-pointer">
          Book Details
        </button>
      </Link>
    </div>
  );
};

export default BookCart;