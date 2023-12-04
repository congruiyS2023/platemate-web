import React from 'react';
import { NavLink } from 'react-router-dom';
import { RiCommunityFill } from "react-icons/ri";
import { FaRecycle } from "react-icons/fa";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { RiCoupon3Fill } from "react-icons/ri";


const Navbar = () => {
  return (
    <nav className="fixed inset-x-0 bottom-0 bg-white shadow z-10 py-2">
      <div className="max-w-screen-xl mx-auto">
        <ul className="flex justify-between items-center list-none p-0 m-0">
          <li className="flex-1">
            <NavLink to="/community" className="flex flex-col items-center justify-center py-2 px-1 sm:px-4 w-full text-xs sm:text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-100 no-underline">
              <RiCommunityFill className="h-6 w-6" />
              Community
            </NavLink>
          </li>
          <li className="flex-1">
            <NavLink to="/recycle" className="flex flex-col items-center justify-center py-2 px-1 sm:px-4 w-full text-xs sm:text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-100 no-underline">
              <FaRecycle className="h-6 w-6" />
              Recycle
            </NavLink>
          </li>
          <li className="flex-1">
            <NavLink to="/menu" className="flex flex-col items-center justify-center py-2 px-1 sm:px-4 w-full text-xs sm:text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-100 no-underline">
              <MdOutlineRestaurantMenu className="h-6 w-6" />
              Menu
            </NavLink>
          </li>
          <li className="flex-1">
            <NavLink to="/reward" className="flex flex-col items-center justify-center py-2 px-1 sm:px-4 w-full text-xs sm:text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-100 no-underline">
              <RiCoupon3Fill className="h-6 w-6" />
              Reward
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
