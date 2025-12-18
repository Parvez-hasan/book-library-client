import { Menu } from "lucide-react";
import useAuth from "../../../Hooks/useAuth";
import logoImg from "..//..//..//assets/book-logo-removebg-preview.png";
import { Link } from "react-router";

const Topbar = () => {

 const { user } = useAuth();

  return (
    <header className="bg-white shadow px-4 py-3 flex items-center justify-between">
      
      {/* drawer toggle */}
      <label htmlFor="dashboard-drawer" className="btn btn-ghost lg:hidden">
        <Menu />
      </label>

      <Link to="/">
        <img className="h-10" src={logoImg} alt="logo" />
      </Link>

      <h1 className="text-sm md:text-lg font-semibold text-pink-600">
        BookCourier Dashboard
      </h1>

      <Link to="/dashboard/my-profile" className="flex items-center gap-2">
        <img
          src={user?.photoURL}
          className="w-9 h-9 rounded-full"
        />
        <span className="hidden md:block text-sm">
          {user?.displayName}
        </span>
      </Link>
    </header>
  );
};

export default Topbar;
