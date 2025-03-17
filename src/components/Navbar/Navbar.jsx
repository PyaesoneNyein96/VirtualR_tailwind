import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { navItems } from "../../constants";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileView, setMobileView] = useState(false);

  const toggleNavbar = () => {
    setMobileView(!mobileView);
  };

  return (
    <div className="nav sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img src={Logo} className="h-10 w-10 mr-2" alt="" />
            <span className="text-xl tracking-tight">VirtualR</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, i) => (
              <li key={i}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="#" className="py-2 px-3 border rounded-md">
              Sign In
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
            >
              Create Account
            </a>
          </div>
          {/* Mobile View  */}
          <div className="lg:hidden md:flex flex-col justify-end">
            <button className="toggle" onClick={toggleNavbar}>
              {mobileView ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {/* mobile menu  */}

        {mobileView && (
          <div className="fixed  right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            {/* // <div className="fixed z-20 right-0 bg-neutral-900 w-[calc(100%-30px)] p-12 flex flex-col justify-center items-center lg:hidden left-1/2 -translate-x-1/2"> */}
            <ul>
              {navItems.map((i, k) => (
                <li key={k} className="py-2">
                  <a href={i.href}>{i.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a href="#" className="py-2 px-3 border rounded-md">
                Sign In
              </a>
              <a
                href=""
                className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-5 rounded-md"
              >
                Create Account
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
