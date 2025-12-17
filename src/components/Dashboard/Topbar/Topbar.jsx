import { Menu } from "lucide-react";
import useAuth from "../../../Hooks/useAuth";
import logoImg from "..//..//..//assets/book-logo-removebg-preview.png";
import { Link } from "react-router";

const Topbar = ({ toggle }) => {
  const { user } = useAuth();

  return (
    <header className="bg-white shadow px-4 py-3 flex items-center justify-between">
      <button onClick={toggle} className="md:hidden">
        <Menu />
      </button>

      <Link to="/">
        <figure>
          <img className="h-12 w-16" src={logoImg} alt="" />
        </figure>
      </Link>

      <h1 className="text-sm md:text-lg font-semibold text-pink-600 p-2">
        BookCourier Dashboard
      </h1>

      <Link to='my-profile'>
        <div className="flex items-center gap-2">
          <img src={user?.photoURL} alt="" className="w-9 h-9 rounded-full" />
          <span className="hidden md:block text-sm">{user?.displayName}</span>
        </div>
      </Link>
    </header>
  );
};

export default Topbar;
