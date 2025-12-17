import { NavLink } from "react-router";
import useUserRole from "../../../Hooks/useUserRole";
import Loading from "../../Loading";

const Sidebar = ({ open }) => {

  const { role, roleLoading } = useUserRole();

if (roleLoading) {
  return <Loading></Loading>
}

  return (
    <aside
      className={`bg-white shadow-md w-64 min-h-screen p-4 
      fixed md:static z-40 transition-transform
      ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
    >
      <h2 className="text-xl font-bold text-pink-600 mb-6">
        Dashboard
      </h2>

      {role === "user" && (
        <>
          <NavLink to="/dashboard/my-orders" className="menu-desh">
            My Orders
          </NavLink>
          <NavLink to="/dashboard/invoices" className="menu-desh">
            Invoices
          </NavLink>
          <NavLink to="/dashboard/my-profile" className="menu-desh">
            My Profile
          </NavLink>
        </>
      )}

      {role === "librarian" && (
        <>
          <NavLink to="/dashboard/add-book" className="menu-desh">
            Add Book
          </NavLink>
          <NavLink to="/dashboard/my-books" className="menu-desh">
            My Books
          </NavLink>
          <NavLink to="/dashboard/orders" className="menu-desh">
            Orders
          </NavLink>
        </>
      )}

      {role === "admin" && (
        <>
          <NavLink to="/dashboard/users" className="menu-desh">
            All Users
          </NavLink>
          <NavLink to="/dashboard/manage-books" className="menu-desh">
            Manage Books
          </NavLink>
          <NavLink to="/dashboard/profile" className="menu-desh">
            My Profile
          </NavLink>
        </>
      )}
    </aside>
  );
};

export default Sidebar;
