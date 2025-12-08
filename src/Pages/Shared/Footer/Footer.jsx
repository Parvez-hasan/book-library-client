import React from "react";
import logoimg from "..//..//..//assets/book-logo-removebg-preview.png"
import { CgMail } from "react-icons/cg";
import { FaFacebook, FaLinkedin, FaLocationDot, FaPhone, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="container mx-auto dark:bg-gray-800 bg-green-100  ">
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
            We provide the best home repair <br />
            services with reliable care.
          </p>
        </nav>
        <nav>
          <h6 className="font-bold  text-gray-700 dark:text-gray-100 py-2">
           Our Service
          </h6>
          <a className="link  text-gray-700 dark:text-gray-100 link-hover">
            Door & Lock Repair
          </a>
          <a className="link  text-gray-700 dark:text-gray-100 link-hover">
            Electricians Near
          </a>
          <a className="link  text-gray-700 dark:text-gray-100 link-hover">
            Home Cleaning Services
          </a>
          <a className="link  text-gray-700 dark:text-gray-100 link-hover">
            Reliable Plumber
          </a>
          <a className="link  text-gray-700 dark:text-gray-100 link-hover">
            Painting Service
          </a>
          <a className="link  text-gray-700 dark:text-gray-100 link-hover">
            Home Repairs
          </a>
        </nav>
        <nav>
          <h6 className="font-bold dark:text-gray-100 text-gray-700 py-2">
            Contacts Us
          </h6>
          {/* location */}
          <div className="flex justify-center items-center">
            <div className="text-black p-2">
              <FaLocationDot className="dark:text-gray-100" />
            </div>
            <div>
              <a className="link dark:text-gray-100 text-gray-700 link-hover">
                17 Arlington St, Kishoreganj, Bangladesh
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
          <h6 className="text-xl dark:text-gray-100 text-gray-700">
            Social Links
          </h6>
          {/* twitter  */}
          <div className="flex gap-5 py-2">
            <span>
              <FaXTwitter className=" text-black dark:text-gray-100 rounded-full" />
            </span>
            {/* linkedin */}
            <a
              href="https://www.linkedin.com/in/md-parvez-583031305/"
              target="_blank"
            >
              <span>
                <FaLinkedin className="dark:text-gray-100 text-black rounded-full" />
              </span>
            </a>
            {/* facebook */}
            <a
              href="https://web.facebook.com/parvez.ahmed.577031"
              target="_blank"
            >
              <span>
                <FaFacebook className="dark:text-gray-100 text-black rounded-full" />
              </span>
            </a>
          </div>
        </nav>
      </div>
      <hr className="p-0.5 w-10/12 mx-auto bg-gray-600" />
      <p className="text-center dark:text-gray-100 text-gray-700 py-4 px-3">
        Copyright © 2025 <span className="text-pink-500 font-medium"> BookCourier</span> - All right reserved
      </p>
    </footer>
  );
};

export default Footer;
