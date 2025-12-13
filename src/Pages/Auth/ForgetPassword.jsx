
import React, { useRef } from "react";
import { Link, useLocation } from "react-router";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { auth } from "../../Firebase/Firebase.confing";
import { sendPasswordResetEmail } from "firebase/auth";

const ForgetPassword = () => {
    
  const emailRef = useRef();
  const location = useLocation();

  const emailFromLogin = location.state?.email || "";

  const handleResetPassword = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;

    if (!email) {
      toast.error("⚠️ Please enter your email!");
      return;
    }

    sendPasswordResetEmail (auth, email)
      .then(() => {
        toast.success("Password reset email sent! Please check your inbox.");

        window.open("https://mail.google.com/", "_blank");
    
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <motion.div 
    initial={{ opacity: 0, x: -100 }} 
      animate={{ opacity: 1, x: 0 }}   
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    
    className="card bg-blue-50 w-full max-w-sm mx-auto mt-6 py-2 shadow-xl">
      <div className="card-body">
        <h2 className="text-2xl font-bold text-green-600 mb-3">
          Reset Password
        </h2>
        <form onSubmit={handleResetPassword}>
          <label className="label dark:text-gray-900 font-semibold">Email Address</label>
          <input
            type="email"
            ref={emailRef}
            defaultValue={emailFromLogin}
            className="input input-bordered w-full"
            placeholder="Enter your registered email"
          />
          <button className="btn bg-green-600 text-white w-full mt-4">
            Reset Password
          </button>
        </form>

        <p className="text-sm  dark:text-gray-900 text-center mt-3">
          Back to{" "}
          <Link to="/login" className="text-blue-600 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default ForgetPassword;