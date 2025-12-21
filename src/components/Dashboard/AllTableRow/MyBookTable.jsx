import React, { useState } from 'react';
import { Link } from 'react-router';
import BookModal from '../../AllModal/BookModal';

const MyBookTable = ({ book, handleDelete, refetch }) => {

    const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);

  const { bookName, authorName, language, price, status, image, create_date } =
    book;

  return (
    <tr className="border-b border-gray-300">
      <td className="py-3  text-center bg-white flex items-center justify-center ">
        <img src={image} alt={bookName} className="w-16 h-10" />
      </td>

      <td className="px-5  text-center text-nowrap bg-white">{bookName}</td>
      <td className="px-5  text-center text-nowrap bg-white">{authorName}</td>
      <td className="px-5  text-center text-nowrap bg-white">
        {new Date(create_date).toDateString()}
      </td>
      <td className="px-5  text-center text-nowrap bg-white">${price}</td>
      <td className="px-5  text-center text-nowrap bg-white">{language}</td>

      {/* Status Btn */}
      <td className="px-5  text-center text-nowrap bg-white">
        <span
          onClick={() => setIsOpen(true)}
          className="cursor-pointer inline-block px-3 py-1 font-semibold text-blue-900 relative"
        >
          <span className="absolute inset-0 bg-blue-200 opacity-50 rounded-full"></span>
          <span className="relative">{status}</span>
        </span>

       
        <BookModal
          refetch={refetch}
          isOpen={isOpen}
          closeModal={closeModal}
          bookId={book._id}
        />
      </td>

      <td className="px-5  text-center text-nowrap bg-white">
        <Link
          to={`/dashboard/update-book/${book._id}`}
          className="bg-blue-500 text-white py-1 px-4 rounded-sm"
        >
          Update Book
        </Link>

        <button
          disabled={status === "published"}
          onClick={() => handleDelete(book._id)}
          className="bg-pink-500 text-white py-1 px-4 rounded-sm ml-2"
        >
          Delete Book
        </button>
      </td>
    </tr>
  );
};

export default MyBookTable;