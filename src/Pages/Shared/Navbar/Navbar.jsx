import React from "react";
import { Link, NavLink } from "react-router";
import logoImg from "..//..//..//assets/book-logo-removebg-preview.png";
import useAuth from "../../../Hooks/useAuth";

const Navbar = () => {
  const {user} = useAuth();
  const links = (
    <>
      <li>
        <NavLink to="/" className="hover:text-pink-500 hover:font-bold">
          Home
        </NavLink>
      </li>

      <li>
        <NavLink to="/books" className="hover:text-pink-500 hover:font-bold">
          Books
        </NavLink>
      </li>

       <li>
        <NavLink to="/coverage" className="hover:text-pink-500 hover:font-bold">
          Coverage Area
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/dashboard"
          className="hover:text-pink-500 hover:font-bold"
        >
          Dashboard
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="container mx-auto navbar bg-blue-100 shadow-sm px-2 sticky top-0 z-50">
      {/* Left Section */}
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          {/* Mobile Dropdown */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        {/* Logo + Title */}
        <Link to="/">
          <div className="flex justify-center items-center gap-3">
            <img
              className="btn-ghost h-14 w-20 md:h-15 md:w-26"
              src={logoImg}
              alt="logo"
            />

            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold text-blue-600">
                BookCourier
              </h1>
              <p className="text-sm font-semibold text-pink-600">Library to Home</p>
            </div>
          </div>
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* Right Section */}
      <div className="navbar-end">

        {/* Register Button */}
        
        {user ?  (
          <Link to="/profile">
            {" "}
            <img
              className="w-12 h-12 rounded-full"
              src={`${user ? user.photoURL : ""}`}
              alt=""
            />{" "}
          </Link>
        ) : (
          <>
               <Link to="/register">
          <button
            className="overflow-hidden mr-2 px-4 py-2 bg-black text-white  
            rounded-md font-semibold cursor-pointer relative z-10 group"
          >
            Register
            <span
              className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12
              transform scale-x-0 group-hover:scale-x-100 transition-transform 
              duration-1000 origin-left"
            ></span>
            <span
              className="absolute w-36 h-32 -top-8 -left-2 bg-purple-400 rotate-12 
              transform scale-x-0 group-hover:scale-x-100 transition-transform 
              duration-700 origin-left"
            ></span>
            <span
              className="absolute w-36 h-32 -top-8 -left-2 bg-blue-600 rotate-12 
              transform scale-x-0 group-hover:scale-x-100 transition-transform 
              duration-500 origin-left"
            ></span>
            <span
              className="group-hover:opacity-100 duration-1000 absolute left-4 
              opacity-0 z-10"
            >
              Register
            </span>
          </button>
        </Link>

        {/* Login Button */}
        <Link
          to="/login"
          className="btn bg-green-500 text-white rounded-xl px-4 hover:bg-green-600"
        >
          Login
        </Link>
          </>
        )
        
        }
      
      </div>
    </div>
  );
};

export default Navbar;
