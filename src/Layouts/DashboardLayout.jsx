import React from "react";
import Loading from "../components/Loading";
import { Link, NavLink, Outlet, useLocation, useNavigate } from "react-router";
import { FiHome, FiMenu } from "react-icons/fi";
import { FaBook, FaHeartPulse, FaJediOrder, FaRegCircleUser } from "react-icons/fa6";
import { IoMdLogOut } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { SiWikibooks } from "react-icons/si";
import { BsBorderStyle } from "react-icons/bs";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import useUserRole from "../Hooks/useUserRole";

const DashboardLayout = () => {

  const { pathname } = useLocation();
  const { user, logOut, loading } = useAuth();
  const navigate = useNavigate();
  const {role} = useUserRole()

  console.log(role);
  
  const isActive = (path) =>
    pathname.startsWith(path)
      ? "bg-blue-100 dark:bg-blue-700 text-blue-700 dark:text-white font-semibold"
      : "hover:bg-blue-50 dark:hover:bg-gray-700";

      //logout user
  const handleLogout = async () => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#2563eb",
      cancelButtonColor: "#ec4899",
      confirmButtonText: "Yes, logout!",
    });

    if (!confirm.isConfirmed) return;

    try {
      await logOut();
      Swal.fire({
        title: "Logout Successful",
        icon: "success",
        confirmButtonColor: "#22c55e",
      });
      navigate("/");
    } catch (error) {
      Swal.fire({
        title: "Logout Failed",
        text: error.message,
        icon: "error",
        confirmButtonColor: "#ef4444",
      });
    }
  };

  if (loading) return <Loading></Loading>

  return (
    <div className="min-h-screen bg-blue-50 dark:bg-gray-900 dark:text-white">
      <div className="drawer lg:drawer-open">
        <input id="drawer-toggle" type="checkbox" className="drawer-toggle" />

         {/* main content  */}

        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <nav className="navbar shadow px-4 bg-white dark:bg-gray-800">
            <label htmlFor="drawer-toggle" className="btn btn-ghost lg:hidden">
              <FiMenu className="text-2xl text-blue-600" />
            </label>

            <h2 className=" text-sm md:text-2xl font-bold text-blue-600">
              <Link
              to="/">BookCourier Dashboard</Link>
            </h2>
          </nav>

          <div className="p-6">

            <Outlet />
            
          </div>
        </div>

        {/* ==== Sidebar === */}
        <div className="drawer-side">
          <label htmlFor="drawer-toggle" className="drawer-overlay"></label>

          <aside className="w-64 bg-white dark:bg-gray-800 shadow-lg min-h-full p-4 flex flex-col">
            {/* User Info */}
            <div className="text-center mb-6">
              <img
                src={user?.photoURL || "https://i.ibb.co/2y7Fh7L/user.png"}
                alt="user"
                className="w-16 h-16 rounded-full mx-auto border-2 border-blue-500"
              />
              <h4 className="mt-2 font-semibold text-blue-600">
                {user?.displayName || "User"}
              </h4>
              <p className="text-xs text-gray-500 capitalize">{role}</p>
            </div>

            <ul className="menu text-sm flex-1">
              {/* Home */}
              <li>
                <Link
                  to="/"
                  className={`flex items-center gap-3 py-2 px-3 rounded-lg ${isActive(
                    "/"
                  )}`}
                >
                  <FiHome />
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/dashboard"
                  className={`flex items-center gap-3 py-2 px-3 rounded-lg ${isActive(
                    "/dashboard"
                  )}`}
                >
                  <MdDashboard />
                  Dashboard
                </Link>
              </li>


              {/* ===== Customer ===== */}
              {role === "customer" && (
                <>
                  <li>
                    <Link
                      to="/dashboard/my-Orders"
                      className={`flex items-center gap-3 py-2 px-3 rounded-lg ${isActive(
                        "/dashboard/myOrders"
                      )}`}
                    >
                      <FaJediOrder />
                      My Orders
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/dashboard/invoices"
                      className={`flex items-center gap-3 py-2 px-3 rounded-lg ${isActive(
                        "/dashboard/invoices"
                      )}`}
                    >
                      <LiaFileInvoiceSolid />
                      Invoices
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/dashboard/wish-list"
                      className={`flex items-center gap-3 py-2 px-3 rounded-lg ${isActive(
                        "/dashboard/wishlist"
                      )}`}
                    >
                      <FaHeartPulse />
                      Wishlist
                    </Link>
                  </li>
                </>
              )}


              {/* ===== Librarian ===== */}
              {role === "Librarian" && (
                <>
                  <li>
                    <Link
                      to="/dashboard/add-books"
                      className={`flex items-center gap-3 py-2 px-3 rounded-lg ${isActive(
                        "/dashboard/add-books"
                      )}`}
                    >
                      <FaBook />
                      Add Book
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/dashboard/my-books"
                      className={`flex items-center gap-3 py-2 px-3 rounded-lg ${isActive(
                        "/dashboard/my-books"
                      )}`}
                    >
                      <SiWikibooks />
                      My Books
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/dashboard/orders"
                      className={`flex items-center gap-3 py-2 px-3 rounded-lg ${isActive(
                        "/dashboard/orders"
                      )}`}
                    >
                      <BsBorderStyle />
                      Orders
                    </Link>
                  </li>
                </>
              )}

              {/* ===== admin ===== */}
              {role === "admin" && (
                <>
                  <li>
                    <Link
                      to="/dashboard/all-User"
                      className={`flex items-center gap-3 py-2 px-3 rounded-lg ${isActive(
                        "/dashboard/allUser"
                      )}`}
                    >
                      <GrUserManager />
                      All Users
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/dashboard/manage-Book"
                      className={`flex items-center gap-3 py-2 px-3 rounded-lg ${isActive(
                        "/dashboard/manageBook"
                      )}`}
                    >
                      <FaBook />
                      Manage Books
                    </Link>
                  </li>
                </>
              )}

          
              <li>
                <Link
                  to="/dashboard/my-profile"
                  className={`flex items-center gap-3 py-2 px-3 rounded-lg ${isActive(
                    "/dashboard/my-profile"
                  )}`}
                >
                  <FaRegCircleUser />
                  Profile
                </Link>
              </li>

          
              <li className="mt-2">
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-3 py-2 px-3 rounded-lg text-pink-600 hover:bg-pink-100 dark:hover:bg-pink-600 dark:text-white transition"
                >
                  <IoMdLogOut />
                  Logout
                </button>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
