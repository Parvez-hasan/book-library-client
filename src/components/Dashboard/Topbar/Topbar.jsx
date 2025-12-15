import { Menu } from "lucide-react";
import useAuth from "../../../Hooks/useAuth";

const Topbar = ({ toggle }) => {

  const { user } = useAuth();

  return (
    <header className="bg-white shadow px-4 py-3 flex items-center justify-between">
      
      <button onClick={toggle} className="md:hidden">
        <Menu />
      </button>

      <h1 className="text-lg font-semibold text-pink-600">
        BookCourier Dashboard
      </h1>

      <div className="flex items-center gap-2">
        <img
          src={user?.photoURL}
          alt=""
          className="w-9 h-9 rounded-full"
        />
        <span className="hidden md:block text-sm">
          {user?.displayName}
        </span>
      </div>
    </header>
  );
};

export default Topbar;
