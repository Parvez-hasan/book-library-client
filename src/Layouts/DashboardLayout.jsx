import React from "react";
import useUserRole from "../Hooks/useUserRole";
import Loading from "../components/Loading";
import { NavLink, Outlet } from "react-router";

const DashboardLayout = () => {
  const { role, roleLoading } = useUserRole();

  if (roleLoading) return <Loading></Loading>

  return (
    <div className="drawer lg:drawer-open">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

      {/* Main Content */}
      <div className="drawer-content p-6">
        <label htmlFor="dashboard-drawer" className="btn btn-primary lg:hidden">
          ☰
        </label>
        <Outlet />
      </div>

      {/* Sidebar */}
      <div className="drawer-side">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>

        <ul className="menu p-4 w-72 min-h-full bg-base-200 space-y-2">
          <h2 className="text-xl font-bold mb-4">Dashboard</h2>

          {/* USER MENU */}
          {role === "user" && (
            <>
              <NavLink to="/dashboard/my-orders">My Orders</NavLink>
              <NavLink to="/dashboard/my-profile">My Profile</NavLink>
              <NavLink to="/dashboard/invoices">Invoices</NavLink>
            </>
          )}

          {/* LIBRARIAN MENU */}
          {role === "librarian" && (
            <>
              <NavLink to="/dashboard/add-books">Add Book</NavLink>
              <NavLink to="/dashboard/my-books">My Books</NavLink>
              <NavLink to="/dashboard/orders">Orders</NavLink>
            </>
          )}

          {/* ADMIN MENU */}
          {role === "admin" && (
            <>
              <NavLink to="/dashboard/all-users">All Users</NavLink>
              <NavLink to="/dashboard/manage-books">Manage Books</NavLink>
              <NavLink to="/dashboard/my-profile">My Profile</NavLink>
            </>
          )}

          <div className="divider"></div>
          <NavLink to="/">🏠 Back to Home</NavLink>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
