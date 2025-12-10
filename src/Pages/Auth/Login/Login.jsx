import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthContext';
import { Link, useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { toast } from 'react-toastify';

const Login = () => {

  const { signIn, googleLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
 // const emailRef = useRef();
  console.log(location);

 // const emailRef = useRef();
  // const location = useLocation();

  //logout
  const handleLogOut = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          title: "🎉 Logged Successfully!",
          icon: "success",
          draggable: true,
        });
        navigate("/");
        e.target.reset();
        navigate(`${location.state ? location.state.from : "/"}`);
      })
      .catch((error) => {
        setError(error);
      });
  };

  // google login
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {

        console.log(result.user);
         toast.success("account successfully create");
        // Swal.fire({
        //   title: "🎉 Logged Successfully!",
        //   icon: "success",
        //   draggable: true,
        // });
       // navigate(`${location.state ? location.state.from : "/"}`);
       navigate('/');
      })
      .catch((error) => {
        setError(error.message);
      });
  };

   //show password
    const hendleShowPassword = (e) => {
      e.preventDefault();
    
      setShowPassword(!showPassword);

    }

  return (
    <div className="card bg-base-100 mx-auto max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Login now!
        </h1>
        <form onSubmit={handleLogOut}>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              required
              placeholder="Email"
            />
            <label className="label">Password</label>

            {/* password  */}
            <div>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                className="input"
                required
                placeholder="Password"
              />
              <button
                onClick={hendleShowPassword}
                className="btn btn-xs mt-2 right-12 absolute"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {/* forget password */}
            {/* <div>
              <Link
                to="/forgetPassword"
                state={{ email: emailRef.current?.value || "" }}
                className="link link-hover font-semibold"
              >
                Forgot password?
              </Link>
            </div> */}

            {error && <p className="text-red-600">{error}</p>}
            <button className="btn btn-neutral  bg-green-600 hover:bg-green-700 mt-4">
              Login
            </button>
          </fieldset>
        </form>

        {/* Google */}
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
          Create An Account ? Please{" "}
          <Link className="text-blue-700 " to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;