import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logos/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto text-sm">
        
        {/* NAVBAR MAIN */}
        <div className="flex justify-between items-center">

          {/* LOGO */}
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
            <span className="text-xl tracking-tight">VirtualR</span>
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>

          {/* DESKTOP BUTTONS */}
          <div className="hidden lg:flex justify-center space-x-6 items-center">
            <a href="#" className="py-2 px-3 border rounded-md">
              Sign In
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
            >
              Create an account
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="lg:hidden">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {mobileDrawerOpen && (
          <div className="fixed top-16 left-0 w-full bg-neutral-900 p-8 flex flex-col items-center lg:hidden">

            <ul className="text-center">
              {navItems.map((item, index) => (
                <li key={index} className="py-3">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>

            <div className="flex flex-col space-y-4 mt-6 w-full items-center">
              <a href="#" className="py-2 px-4 border rounded-md">
                Sign In
              </a>
              <a
                href="#"
                className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-4 rounded-md"
              >
                Create an account
              </a>
            </div>

          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;