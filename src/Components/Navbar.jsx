import React, { useEffect, useState } from "react";
import logo from "/logo3.png";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { FaUserCircle } from 'react-icons/fa'; // Importing a user icon

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setSticky(offset > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = (
    <>
      <li>
        <Link to="/" className="text-green">Home</Link>
      </li>
      <li tabIndex={0}>
        <Link to={"/Menu"}>Menu</Link>
      </li>
      <li><Link to={"/contact"}>Contact us</Link></li>
      <li><Link to={"/custom"}>Custom Your Food</Link></li>
      <li><Link to={"/order"}>My Orders</Link></li>
      <li><Link to={"/Dashboard"}>Dashboard</Link></li>

    </>
  );

  return (
    <header className={`max-w-screen-2xl container mx-auto fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out`}>
      <div className={`navbar xl:px-24 ${isSticky ? "shadow-md bg-white transition-all duration-300 ease-in-out" : "bg-white"}`}>
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-64 space-y-3">
              {navItems}
            </ul>
          </div>
          <a href="/">
            <img src={logo} alt="Logo" width="70PX"/>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle lg:flex items-center justify-center mr-3">
            <div className="indicator">
              <Link to="/profile">
                <FaUserCircle size={25} className="text-green" />
              </Link>
            </div>
          </label>
          <label tabIndex={0} className="btn btn-ghost btn-circle hidden lg:flex items-center justify-center mr-3">
            <div className="indicator">
              <Link to="Cart">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </Link>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </label>
          <Link to="/login" className="btn flex items-center gap-2 rounded-full px-6 bg-green text-white">
            <FaRegUser /> Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;