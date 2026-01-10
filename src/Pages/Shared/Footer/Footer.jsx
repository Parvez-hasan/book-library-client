import React from "react";
import logoimg from "..//..//..//assets/book-logo-removebg-preview.png"
import { CgMail } from "react-icons/cg";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaLocationDot, FaPhone, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="container mx-auto dark:bg-gray-800 bg-blue-100  ">
      <div className="footer sm:footer-horizontal text-neutral-content justify-between p-10">
        <nav>
          <div className="flex justify-center items-center gap-3">
            <figure>
              <Link to="/">
                <img
                  className="h-12 w-14 md:h-14 md:w-20"
                  src={logoimg}
                  alt=""
                />
              </Link>
            </figure>
            <a className=" text-gray-700 dark:text-gray-100 btn-ghost text-xl font-bold">
              {" "}
              Book Courier
            </a>
          </div>
          <p className=" text-gray-700 dark:text-gray-100">
           Library to home delivery system. We bring stories, <br />
              knowledge, and inspiration right to your doorstep.
          </p>
        </nav>
        <nav className="text-gray-900">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg dark:text-gray-100 font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li className="hover:text-blue-400 dark:text-gray-100">
                <Link to={"/"}> Home</Link>
              </li>
              <li className="hover:text-blue-400 transition dark:text-gray-100 cursor-pointer">
                <Link
                  to={"/all-books"}
                  className="hover:text-blue-400 transition dark:text-gray-100 cursor-pointer"
                >
                  All Books
                </Link>
              </li>

              <li className="hover:text-blue-400  dark:text-gray-100 transition cursor-pointer">
                <Link to={"/contact"}> Contact Us</Link>
              </li>
            </ul>
          </div>
        </nav>
        <nav>
          <h6 className="text-lg text-gray-900 dark:text-gray-100 font-semibold mb-4">
            Contacts Us
          </h6>
          {/* location */}
          <div className="flex justify-center items-center">
            <div className="text-black p-2">
              <FaLocationDot className="dark:text-gray-100" />
            </div>
            <div>
              <a className="link dark:text-gray-100 text-gray-700 link-hover">
                17 Arlington St, Kishoreganj, Bangladesh.
              </a>
            </div>
          </div>
          {/* phone  */}
          <div className="flex justify-center items-center">
            <div className="text-black p-2">
              <FaPhone className="dark:text-gray-100" />
            </div>
            <div>
              <a className="link dark:text-gray-100 text-gray-700 link-hover">
                +880 1948-017882
              </a>
            </div>
          </div>

          {/* gmail */}

          <div className="flex justify-center items-center">
            <div className="text-black p-2">
              <CgMail className="dark:text-gray-100" />
            </div>
            <div>
              <a className="link dark:text-gray-100 text-gray-700 link-hover">
                parvezweb.33@gmail.com
              </a>
            </div>
          </div>
        </nav>

        <nav>
          <h6  className="text-lg text-gray-900 dark:text-gray-100 font-semibold mb-4">
            <h3>Follow Us</h3>
         
          </h6>
             <p className="text-black dark:text-gray-200"> Stay connected with our community.</p>
      
          <div className="flex gap-5 py-2  ">
        

             <a href="https://web.facebook.com/parvez.ahmed.577031" target="_blank" className="bg-gray-800 p-3 rounded-full dark:bg-pink-700 hover:bg-blue-500 transition">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/marketer_parvez" target="_blank" className="bg-gray-800 p-3 rounded-full dark:bg-pink-700 hover:bg-blue-500 transition">
                <FaInstagram />
              </a>
               <a href="https://x.com/parvezhasan" target="_blank" className="bg-gray-800 p-3 rounded-full dark:bg-pink-700 hover:bg-blue-500 transition">
              <FaXTwitter  />
              </a>
              <a href="https://www.linkedin.com/in/md-parvez-583031305/" target="_blank" className="bg-gray-800 p-3 rounded-full dark:bg-pink-700 hover:bg-blue-500 transition">
                <FaLinkedinIn />
              </a>
                <a href="https://github.com/Parvez-hasan" target="_blank" className="bg-gray-800 p-3 rounded-full dark:bg-pink-700 hover:bg-blue-500 transition">
                  <FaGithub />
              </a>
             
          </div>
        </nav>
      </div>
      <hr className="p-0.5 w-10/12 mx-auto bg-gray-600" />
      <p className="text-center dark:text-gray-100 text-gray-700 py-4 px-3">
        Copyright © 2026 <span className="text-pink-500 font-bold"> BookCourier</span> - All right reserved
      </p>
    </footer>
  );
};

export default Footer;
