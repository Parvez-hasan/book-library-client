import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const BookDetails = () => {
   const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [book, setBook] = useState({});
  const [open, setOpen] = useState(false);

  useEffect(() => {
    axiosSecure.get(`/books/${id}`).then(res => {
      setBook(res.data);
    });
  }, [id]);

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <div className="grid md:grid-cols-2 gap-8 bg-white rounded-lg shadow p-6">

        {/* Book Image */}
        <img
          src={book.image}
          alt={book.title}
          className="w-full h-[420px] object-cover rounded"
        />

        {/* Book Info */}
        <div>
          <h1 className="text-3xl font-bold">{book.title}</h1>
          <p className="text-gray-500 mt-1">by {book.author}</p>

          <div className="mt-4 flex gap-4">
            <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded">
              {book.category}
            </span>
            <span className="px-3 py-1 bg-green-100 text-green-600 rounded">
              Available
            </span>
          </div>

          <p className="mt-4 text-gray-600 leading-relaxed">
            {book.description}
          </p>

          <p className="mt-6 text-2xl font-bold text-pink-600">
            ৳ {book.price}
          </p>

          <button
            onClick={() => setOpen(true)}
            className="mt-6 w-full bg-pink-600 text-white py-3 rounded hover:bg-pink-700"
          >
            Order Now
          </button>
        </div>
      </div>

      {/* Order Modal */}
      {open && (
        <OrderModal
          book={book}
          user={user}
          closeModal={() => setOpen(false)}
        />
      )}
    </div>
  );
};

export default BookDetails;