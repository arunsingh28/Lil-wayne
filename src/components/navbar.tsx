import Logo from "../Assets/logo.png";
import { useState } from "react";

const Navbar = () => {
  const [state, setState] = useState(false);
  return (
    <div className="nav-wrapper flex justify-between items-center h-10">
      <div className="flex items-center cursor-pointer">
        <img src={Logo} alt="logo" />
        <h1 className="font-bold ml-1">Mentor</h1>
      </div>
      <div
        className={
          state ? "w-full absolute top-3 left-0 mt-10 bg-menu" : "hidden"
        }
      >
        <ul className="m-5 p-2 rounded-md">
          <li className="mt-2 px-5 py-3 bg-gray-500 rounded-md shadow-md flex justify-between items-center font-bold scale-0 scale-menu">
            Home
            <span className="fa fa-home text-xl"></span>
          </li>

          <li className="mt-2 px-5 py-3 bg-gray-500 rounded-md shadow-md flex justify-between items-center font-bold">
            About us
            <span className="fa fa-info text-xl"></span>
          </li>
          <li className="mt-2 px-5 py-3 bg-gray-500 rounded-md shadow-md flex justify-between items-center font-bold">
            Contact
            <span className="fa fa-phone text-xl"></span>
          </li>
          <li className="mt-2 px-5 py-3 bg-green-500 rounded-md shadow-md text-center ">
            <span className="font-gradient">Become mentor</span>
          </li>
        </ul>
      </div>
      <div
        className="cursor-pointer"
        onClick={() => {
          setState(!state);
        }}
      >
        <div
          className={
            state
              ? "bg-gray-600 h-hamburger w-10 line2 animate-bounce"
              : "bg-white h-hamburger w-10 animate-bounce"
          }
        ></div>
        <div
          className={
            state ? "hidden" : "bg-white h-hamburger w-10 mt-hamburger"
          }
        ></div>
        <div
          className={
            state
              ? "bg-gray-600 h-hamburger w-10 mt-hamburger line1 animate-bounce"
              : "bg-white h-hamburger w-10 mt-hamburger animate-bounce"
          }
        ></div>
      </div>
    </div>
  );
};

export default Navbar;
