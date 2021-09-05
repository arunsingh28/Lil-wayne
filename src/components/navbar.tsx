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
          state
            ? "w-full absolute top-3 left-0 h-80 mt-10 bg-gray-900"
            : "hidden"
        }
      >
        menu
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
