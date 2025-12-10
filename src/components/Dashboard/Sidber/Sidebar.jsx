import React from 'react';
import { NavLink } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const Sidebar = () => {
     const { logOut } = useAuth()
    return (
    <div className="w-64 bg-gray-200 min-h-screen p-4">

      <NavLink
        to="/dashboard/addBooks"
        className="block p-2 rounded hover:bg-pink-400"
      >
        Add New Book
      </NavLink>

      <NavLink
        to="/dashboard/manage-books"
        className="block p-2 rounded hover:bg-pink-400"
      >
        Manage Books
      </NavLink>

    </div>
  );

};

export default Sidebar;