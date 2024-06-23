import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    const isActive = ({isActive})=> {
        return isActive? 'text-red-500' : 'text-white hover:text-red-500'
      };
  return (
    <div className="w-full h-16 flex justify-center items-center bg-black">
      <ul className="flex justify-between items-center w-2/5 rounded-xl p-4">
        <li>
          <NavLink to={"home"} className={isActive}>
            <button className="p-2 rounded-2xl">
              Home
            </button>
          </NavLink>
        </li>
        <li>
          <NavLink to={"about"} className={isActive} >
            <button className="p-2 rounded-2xl">About</button>
          </NavLink>
        </li>
        <li>
          <NavLink to={"contact"} className={isActive}>
            <button className="p-2 rounded-2xl">Contact</button>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
