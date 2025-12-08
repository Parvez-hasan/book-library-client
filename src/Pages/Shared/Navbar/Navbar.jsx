import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../../Contexts/AuthContext";
import { Link, NavLink } from "react-router";
import { Menu, Moon, Sun, X } from "lucide";
import logoImg from "..//..//..//assets/book-logo-removebg-preview.png";

const activeClass = "text-white bg-slate-700 px-3 py-1 rounded-md";
const normalClass =
  "text-slate-800 hover:text-white hover:bg-slate-500 px-3 py-1 rounded-md";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    // initial from localStorage or system pref
    if (typeof window !== "undefined") {
      const t = localStorage.getItem("theme");
      if (t) return t;
      return window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  const handleLogout = async () => {
    try {
      await logOut();
      // optionally show toast
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <nav className="bg-white dark:bg-slate-900 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between h-16 items-center">
          {/* Left: Logo */}
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-3">
              <figure>
                <Link to="/">
                  <img
                    className="btn-ghost h-14 w-20 md:h-15 md:w-26 text-xl"
                    src={logoImg}
                    alt=""
                  />
                </Link>
              </figure>
              <div className="hidden sm:block">
                <h1 className="text-lg font-semibold text-blue-600 dark:text-white">
                  BookCourier
                </h1>
                <p className="text-xs text-pink-600 dark:text-slate-300">
                  Library to Home
                </p>
              </div>
            </Link>
          </div>

          {/* Center / Links (desktop) */}
          <div className="hidden md:flex items-center gap-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? activeClass : normalClass
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/books"
              className={({ isActive }) =>
                isActive ? activeClass : normalClass
              }
            >
              Books
            </NavLink>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? activeClass : normalClass
              }
            >
              Dashboard
            </NavLink>
            {!user && (
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? activeClass : normalClass
                }
              >
                Login
              </NavLink>
            )}
            {!user && (
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive ? activeClass : normalClass
                }
              >
                Register
              </NavLink>
            )}
          </div>

          {/* Right: theme + profile */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700"
            >
              {/* {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />} */}
            </button>

            {user ? (
              <div className="flex items-center gap-3">
                {/* profile image */}
                <div className="flex items-center gap-2">
                  <img
                    src={
                      user.photoURL ||
                      `https://ui-avatars.com/api/?name=${encodeURIComponent(
                        user.displayName || user.email
                      )}`
                    }
                    alt="profile"
                    className="w-9 h-9 rounded-full object-cover ring-2 ring-offset-1 ring-indigo-500"
                  />
                </div>

                <button
                  onClick={handleLogout}
                  className="px-3 py-1 rounded-md border border-slate-200 dark:border-slate-700 text-sm"
                >
                  Logout
                </button>
              </div>
            ) : null}

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700"
              aria-label="Open menu"
              onClick={() => setOpen((v) => !v)}
            >
              {/* {open ? <X size={20} /> : <Menu size={20} />} */}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800"
        >
          <div className="px-4 py-3 flex flex-col gap-2">
            <NavLink
              to="/"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? "block " + activeClass : "block " + normalClass
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/books"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? "block " + activeClass : "block " + normalClass
              }
            >
              Books
            </NavLink>
            <NavLink
              to="/dashboard"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? "block " + activeClass : "block " + normalClass
              }
            >
              Dashboard
            </NavLink>
            {!user && (
              <NavLink
                to="/login"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive ? "block " + activeClass : "block " + normalClass
                }
              >
                Login
              </NavLink>
            )}
            {!user && (
              <NavLink
                to="/register"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive ? "block " + activeClass : "block " + normalClass
                }
              >
                Register
              </NavLink>
            )}

            {user && (
              <>
                <div className="mt-2 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={
                        user.photoURL ||
                        `https://ui-avatars.com/api/?name=${encodeURIComponent(
                          user.displayName || user.email
                        )}`
                      }
                      alt="profile"
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <div className="text-sm font-medium text-slate-900 dark:text-white">
                        {user.displayName || user.email}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-300">
                        {user.email}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
