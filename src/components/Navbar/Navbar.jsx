import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { navItems } from "../../constants";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  const [mobileView, setMobileView] = useState(false);

  const toggleNavbar = () => {
    setMobileView(!mobileView);
  };


  const location = useLocation();
  const currentRoute = location.pathname;
  // const isHome = currentRoute === "/";




  const NavItemsList = () => {

    return navItems;

    // return isHome
    //   ? navItems.filter(item => item.url !== "/") // Adjust condition
    //   : navItems;
  }

  // const NavItems = isHome
  //   ? navItems.filter(item => item.url !== "/") // Adjust condition
  //   : navItems;



  return (
    <div className="nav sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <Link to={"/"}>
          <div className="flex items-center flex-shrink-0">
            <img src={Logo} className="h-10 w-10 mr-2" alt="" />
              <span className="text-xl tracking-tight">
                VirtualR
              </span>
          </div>
          </Link>
          <ul className="hidden lg:flex ml-14 space-x-12 nav-list">
            {NavItemsList().map((item, i) => (
              <li
                key={i}
                className={`transition-[max-height,opacity] duration-500 ease-in-out overflow-hidden ${item.url === currentRoute ? "max-h-0 opacity-0" : "max-h-40 opacity-100"
                  }`}
              >
                <Link to={item.url}>
                  {item.label}
                </Link> 
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
              {NavItemsList().map((ni, k) => (
                <li key={k} className="py-2 text-white nav-item">
                  <a href={ni.href}>{ni.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6 text-white">
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
