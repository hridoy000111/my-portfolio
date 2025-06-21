import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 via-blue-400 to-blue-800 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center rounded-b-lg shadow-lg">
        <h1 className="text-3xl font-black tracking-wide text-white drop-shadow-md transition duration-300 hover:drop-shadow-xl hover:text-red-300 hover:scale-105 cursor-pointer">
          <span className="text-yellow-400 ">RK</span> Creative
        </h1>

        <ul className="flex gap-6 text-yellow-300  font-medium">
          <li>
            <Link className="hover:text-yellow-500 " to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-yellow-500" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="hover:text-yellow-500" to="/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link className="hover:text-yellow-500" to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link className="hover:text-yellow-500" to="/resume">
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
