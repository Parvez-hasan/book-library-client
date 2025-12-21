import React from 'react';
import { Link } from 'react-router';
import { FaBookOpen, FaUsers, FaPlusCircle } from "react-icons/fa";

const LibrarianDashboard = () => {

    return (
    <div className="min-h-screen bg-blue-50 p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">
        Librarian Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Add Book */}
        <Link
          to={"/dashboard/add-books"}
          className="p-6 bg-white rounded-xl shadow border border-blue-100"
        >
          <FaPlusCircle className="text-4xl text-green-600 mb-3" />
          <h2 className="text-xl font-bold mb-2">Add New Book</h2>
          <p>Add book to library.</p>
        </Link>
        {/* All Books */}
        <Link
          to={"/dashboard/my-books"}
          className="p-6 bg-white rounded-xl shadow border border-blue-100"
        >
          <FaBookOpen className="text-4xl text-blue-500 mb-3" />
          <h2 className="text-xl font-bold mb-2">My Books</h2>
          <p>View, edit and remove book.</p>
        </Link>

        {/* Users */}
        <Link
          to={"/dashboard/orders"}
          className="p-6 bg-white rounded-xl shadow border border-blue-100"
        >
          <FaUsers className="text-4xl text-blue-500 mb-3" />
          <h2 className="text-xl font-bold mb-2">Order Book</h2>
          <p>See who borrowed which books.</p>
        </Link>
      </div>
    </div>
  );
};

export default LibrarianDashboard;