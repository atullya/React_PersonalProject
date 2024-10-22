import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ModalForm from "./Modal/ModalForm";
import logoo from "../assets/Image/logoo.png";
import cart from "../assets/Image/cart.png";
export default function Navbar() {
  // State to handle mobile menu visibility
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <header className="relative z-20 w-full border-b shadow-lg border-b-1 border-slate-200 bg-white/90 shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
        <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
          <nav
            aria-label="main navigation"
            className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
            role="navigation"
          >
            <NavLink to={"/"}>
              <img src={logoo} alt="Logo" width={140} />
            </NavLink>

            <button
              className="relative self-center order-10 visible block w-10 h-10 opacity-100 lg:hidden"
              aria-expanded={menuOpen}
              aria-label="Toggle navigation"
              onClick={handleToggle}
            >
              <div className="absolute w-6 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <span
                  aria-hidden="true"
                  className={`absolute block h-0.5 w-9/12 transform rounded-full bg-slate-900 transition-all duration-300 ${
                    menuOpen ? "rotate-45 translate-y-2" : "-translate-y-2"
                  }`}
                ></span>
                <span
                  aria-hidden="true"
                  className={`absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300 ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  aria-hidden="true"
                  className={`absolute block h-0.5 w-1/2 origin-top-left transform rounded-full bg-slate-900 transition-all duration-300 ${
                    menuOpen ? "-rotate-45 -translate-y-2" : "translate-y-2"
                  }`}
                ></span>
              </div>
            </button>

            <ul
              role="menubar"
              aria-label="Select page"
              className={`${
                menuOpen ? "block" : "hidden"
              } absolute top-0 left-0 z-[-1] ml-auto h-screen w-full justify-center overflow-hidden overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-28 font-medium opacity-100 transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0 lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0 lg:pt-0`}
            >
              <li role="none" className="flex items-stretch">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center gap-2 py-4 text-emerald-500 lg:px-8"
                      : "flex items-center gap-2 py-4 hover:text-emerald-500 lg:px-8"
                  }
                >
                  <span>Home</span>
                </NavLink>
              </li>
              <li role="none" className="flex items-stretch">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center gap-2 py-4 text-emerald-500 lg:px-8"
                      : "flex items-center gap-2 py-4 hover:text-emerald-500 lg:px-8"
                  }
                >
                  <span>About</span>
                </NavLink>
              </li>
              <li role="none" className="flex items-stretch">
                <NavLink
                  to="/movies"
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center gap-2 py-4 text-emerald-500 lg:px-8"
                      : "flex items-center gap-2 py-4 hover:text-emerald-500 lg:px-8"
                  }
                >
                  <span>Movie</span>
                </NavLink>
              </li>
              <li role="none" className="flex items-stretch">
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center gap-2 py-4 text-emerald-500 lg:px-8"
                      : "flex items-center gap-2 py-4 hover:text-emerald-500 lg:px-8"
                  }
                >
                  <span>Services</span>
                </NavLink>
              </li>
              <li role="none" className="flex items-stretch">
                <NavLink
                  to="/addtocart"
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center gap-2 py-4 text-emerald-500 lg:px-8"
                      : "flex items-center gap-2 py-4 hover:text-emerald-500 lg:px-8"
                  }
                >
                  <span>
                    <img src={cart} alt="Cart" height={20} width={30} />
                  </span>
                </NavLink>
              </li>
            </ul>

            <div className="flex items-center px-6 ml-auto lg:ml-0 lg:p-0">
              <button className="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded shadow-md whitespace-nowrap bg-emerald-500 shadow-emerald-200 hover:bg-emerald-600 hover:shadow-sm hover:shadow-emerald-200 focus:bg-emerald-700 focus:shadow-sm focus:shadow-emerald-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                <ModalForm />
              </button>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}
