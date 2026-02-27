import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo2.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const baseLink =
    "px-4 py-2 rounded-full transition-all duration-300";

  const activeLink =
    "bg-white text-black shadow-md";

  const inactiveLink =
    "text-white hover:bg-white/10";

  return (
    <div className="fixed w-full z-50 pt-6 font-serif">

      <div className="relative flex justify-center items-center px-6">

        {/* PILL NAVBAR */}
        <nav className="bg-black/80 backdrop-blur-sm text-white px-8 py-3 rounded-full flex items-center gap-8 shadow-lg">

          {/* Logo */}
          <Link to="/">
            <img
              src={logo}
              alt="Intuiti Logo"
              className="h-7 w-auto object-contain"
            />
          </Link>

          {/* Desktop Links (UNCHANGED) */}
          <div className="hidden md:flex gap-2 text-sm items-center">

            <NavLink
              to="/why-us"
              className={({ isActive }) =>
                `${baseLink} ${isActive ? activeLink : inactiveLink}`
              }
            >
              Why Us
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${baseLink} ${isActive ? activeLink : inactiveLink}`
              }
            >
              About Us
            </NavLink>

            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                `${baseLink} ${isActive ? activeLink : inactiveLink}`
              }
            >
              Portfolio
            </NavLink>

          </div>

          {/* CTA */}
          <button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-6 py-2 rounded-full text-sm transition-all duration-300">
            Book a Call
          </button>

        </nav>

        {/* HAMBURGER (ONLY MOBILE) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden absolute right-6 bg-white p-2 rounded-full shadow-md"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden mt-6 mx-6 bg-black text-white rounded-2xl p-6 space-y-4 shadow-xl transition-all duration-300">

          <NavLink
            to="/why-us"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `block px-4 py-2 rounded-full ${
                isActive ? "bg-white text-black" : "hover:bg-white/10"
              }`
            }
          >
            Why Us
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `block px-4 py-2 rounded-full ${
                isActive ? "bg-white text-black" : "hover:bg-white/10"
              }`
            }
          >
            About Us
          </NavLink>

          <NavLink
            to="/portfolio"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `block px-4 py-2 rounded-full ${
                isActive ? "bg-white text-black" : "hover:bg-white/10"
              }`
            }
          >
            Portfolio
          </NavLink>

        </div>
      )}
    </div>
  );
};

export default Navbar;