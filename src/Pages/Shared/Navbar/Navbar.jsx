import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import logoImg from "..//..//..//assets/book-logo-removebg-preview.png";
import useAuth from "../../../Hooks/useAuth";
import useUserRole from "../../../Hooks/useUserRole";

const Navbar = () => {
  const { user } = useAuth();
  const [role] = useUserRole();

  // light dark mode add
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  const links = (
    <>
      <li>
        <NavLink to="/" className="hover:text-pink-500 hover:font-bold">
          Home
        </NavLink>
      </li>

      <li>
        <NavLink to="/all-books" className="hover:text-pink-500 hover:font-bold">
          Books
        </NavLink>
      </li>

      <li>
        <NavLink to="/about-us" className="hover:text-pink-500 hover:font-bold">
          About Us
        </NavLink>
      </li>

      <li>
        <NavLink to="/contact" className="hover:text-pink-500 hover:font-bold">
          Contact
        </NavLink>
      </li>

       {role === "customer" && (
        <li>
          <NavLink to="/dashboard/wish-list">My Wish List</NavLink>
        </li>
      )}

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
    <div className="container mx-auto navbar bg-blue-100 dark:bg-gray-800 shadow-sm px-2 sticky top-0 z-[1000]">
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
              <h1 className="text-2xl font-bold text-blue-600">BookCourier</h1>
              <p className="text-sm font-semibold text-pink-600">
                Library to Home
              </p>
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
        
        {/* light dark contorl section */}
        <label class="inline-flex items-center relative">
          <input
            type="checkbox"
            className="peer hidden"
            checked={theme === "dark"}
            onChange={(e) => handleTheme(e.target.checked)}
          />

          <div className="relative w-[110px] h-[50px] bg-white peer-checked:bg-zinc-500 rounded-full after:absolute after:content-[''] after:w-[40px] after:h-[40px] after:bg-gradient-to-r from-orange-500 to-yellow-400 peer-checked:after:from-zinc-900 peer-checked:after:to-zinc-900 after:rounded-full after:top-[5px] after:left-[5px] active:after:w-[50px] peer-checked:after:left-[105px] peer-checked:after:translate-x-[-100%] shadow-sm duration-300 after:duration-300 after:shadow-md"></div>
          <svg
            height="0"
            width="100"
            viewBox="0 0 24 24"
            data-name="Layer 1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-white peer-checked:opacity-60 absolute w-6 h-6 left-[13px]"
          >
            <path d="M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5ZM13,0h-2V5h2V0Zm0,19h-2v5h2v-5ZM5,11H0v2H5v-2Zm19,0h-5v2h5v-2Zm-2.81-6.78l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54ZM7.76,17.66l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54Zm0-11.31l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Zm13.44,13.44l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Z"></path>
          </svg>
          <svg
            height="512"
            width="512"
            viewBox="0 0 24 24"
            data-name="Layer 1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-black opacity-60 peer-checked:opacity-70 peer-checked:fill-white absolute w-6 h-6 right-[13px]"
          >
            <path d="M12.009,24A12.067,12.067,0,0,1,.075,10.725,12.121,12.121,0,0,1,10.1.152a13,13,0,0,1,5.03.206,2.5,2.5,0,0,1,1.8,1.8,2.47,2.47,0,0,1-.7,2.425c-4.559,4.168-4.165,10.645.807,14.412h0a2.5,2.5,0,0,1-.7,4.319A13.875,13.875,0,0,1,12.009,24Zm.074-22a10.776,10.776,0,0,0-1.675.127,10.1,10.1,0,0,0-8.344,8.8A9.928,9.928,0,0,0,4.581,18.7a10.473,10.473,0,0,0,11.093,2.734.5.5,0,0,0,.138-.856h0C9.883,16.1,9.417,8.087,14.865,3.124a.459.459,0,0,0,.127-.465.491.491,0,0,0-.356-.362A10.68,10.68,0,0,0,12.083,2ZM20.5,12a1,1,0,0,1-.97-.757l-.358-1.43L17.74,9.428a1,1,0,0,1,.035-1.94l1.4-.325.351-1.406a1,1,0,0,1,1.94,0l.355,1.418,1.418.355a1,1,0,0,1,0,1.94l-1.418.355-.355,1.418A1,1,0,0,1,20.5,12ZM16,14a1,1,0,0,0,2,0A1,1,0,0,0,16,14Zm6,4a1,1,0,0,0,2,0A1,1,0,0,0,22,18Z"></path>
          </svg>
        </label>

        {/* Register Button */}

        {user ? (
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
                className="overflow-hidden hidden sm:block mr-2 px-4 py-2 bg-black text-white  
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
              className="btn bg-pink-500 text-white rounded-xl px-4 hover:bg-pink-600"
            >
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
