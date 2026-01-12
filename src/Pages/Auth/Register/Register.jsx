import React, { useContext, useState } from "react";
import { AuthContext } from "../../../Contexts/AuthContext";
import { Link, useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { TbFidgetSpinner } from "react-icons/tb";
import Loading from "../../../components/Loading";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";

const Register = () => {
  const { loading, createUser, updateUser, googleLogin } = useAuth();
  const axiosSecure = useAxiosSecure();

  const [nameError, setNameError] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();


  //register
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, photo, email, password);

    // name  valete
    if (name.length < 5) {
      setNameError("You must provide at least 5 characters");
      return;
    } else {
      setNameError("");
    }

    // password vali
    if (!/(?=.*[A-Z])/.test(password)) {
      return setError("Password must contain at least one uppercase letter.");
    }
    if (!/(?=.*[a-z])/.test(password)) {
      return setError("Password must contain at least one lowercase letter.");
    }
    if (password.length < 6) {
      return setError("Password must be at least 6 characters long.");
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);

        toast.success("✅ Account Created Successfully!");

        updateUser({ displayName: name, photoURL: photo }).then(() => {
          const userInfo = {
            name: name,
            email: email,
            photo: photo,
            role: "customer",
            createdAt: new Date(),
          };

          axiosSecure.post("/users", userInfo).then((res) => {
            console.log("user data saved", res.data);
            navigate("/");
          });
        });
      })
      .catch((error) => {
        setError(error.message);
        toast.error(error.message);
      });
  };

  // google login
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        toast.success("🎉 Logged in with Google Successfully!");

        // user data save in database

        const loggedUser = result.user;

        const userInfo = {
          name: loggedUser.displayName,
          email: loggedUser.email,
          photo: loggedUser.photoURL,
          role: "customer",
          createdAt: new Date(),
        };

        axiosSecure.post("/users", userInfo).then((res) => {
          console.log("user data has been stored", res.data);
          //  navigate(location.state || "/");
          navigate("/");
        });
      })
      .catch((err) => setError(err.message));
  };

  //show password
  const hendleShowPassword = (e) => {
    e.preventDefault();

    setShowPassword(!showPassword);
  };

  return (
    <div className="card bg-base-100 mx-auto max-w-sm shrink-0 dark:bg-gray-800 shadow-2xl">
      <h2 className="text-2xl font-bold text-center">
        Welcome To Book Library
      </h2>
      <div className="card-body">
        <h1 className="text-1xl md:text-2xl lg:text-3xl font-bold text-center">
          Register now!
        </h1>
        <form onSubmit={handleRegister}>
          <fieldset className="fieldset">
            {/* Name */}
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              required
              placeholder="Your name"
            />
            {nameError && <p className="text-red-600">{nameError}</p>}
            {/* photo */}
            <label className="label">Photo</label>
            <input
              type="text"
              name="photo"
              className="input"
              required
              placeholder="photo URL"
            />
            {/* email */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              required
              placeholder="your email"
            />
            {/* password */}
            <label className="label">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="input"
                required
                placeholder="*******"
              />
              <button
                onClick={hendleShowPassword}
                className="btn btn-xs mt-2 right-4 absolute"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {error && <p className="text-red-500">{error}</p>}
           
            <button className="btn btn-neutral  bg-blue-600 hover:bg-blue-700 mt-4">
              {loading ? (
                <TbFidgetSpinner className="animate-spin m-auto" />
              ) : (
                "Register"
              )}
            </button>
          </fieldset>
        </form>

        {/* Google */}
        <h3 className="text-center">------- OR -------</h3>
        <button
          onClick={handleGoogleLogin}
          className="btn bg-pink-200 hover:bg-pink-300 text-black border-[#e5e5e5]"
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>
        <p>
          If you have An Account ? Please{" "}
          <Link className="text-blue-700" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;


