import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { RiCommunityFill } from "react-icons/ri";
import { FaRecycle } from "react-icons/fa";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { RiCoupon3Fill } from "react-icons/ri";



const Navbar = () => {
  const location = useLocation();

  if (location.pathname.startsWith('/user-home')) {
    return null;
  }

  const shouldHighlight = (route) => {
    return location.pathname.startsWith(route);
  };

  const menuItemClassName = (isActive, route) => {
    const baseClasses = "flex flex-col items-center justify-center py-2 px-1 w-full text-xs text-gray-700 no-underline";
    const hoverClasses = "hover:text-primary hover:bg-gray-100";
    const activeClasses = "text-primary bg-gray-100";
    const responsiveClasses = "sm:px-4 sm:text-sm";
  
    return `${baseClasses} ${hoverClasses} ${isActive || shouldHighlight(route) ? activeClasses : ''} ${responsiveClasses}`;
  };
  

  return (
    <nav className="fixed inset-x-0 bottom-0 bg-white shadow z-10 py-2">
      <div className="max-w-screen-xl mx-auto">
        <ul className="flex justify-between items-center list-none p-0 m-0">
          <li className="flex-1">
          <NavLink 
              to="/community"
              className={({ isActive }) => menuItemClassName(isActive, '/community')}
            >
              <RiCommunityFill className="h-6 w-6" />
              <span className='font-paragraph'>Community</span>
            </NavLink>
          </li>
          <li className="flex-1">
              <NavLink 
                to="/recycle"
                className={({ isActive }) => menuItemClassName(isActive, '/recycle')}
              >
              <FaRecycle className="h-6 w-6" />
              <span className='font-paragraph'>Recycle</span>
            </NavLink>
          </li>
          <li className="flex-1">
              <NavLink 
                to="/menu"
                className={({ isActive }) => menuItemClassName(isActive, '/menu')}
              >
              <MdOutlineRestaurantMenu className="h-6 w-6" />
              <span className='font-paragraph'>Menu</span>
            </NavLink>
          </li>
          <li className="flex-1">
              <NavLink 
                to="/reward"
                className={({ isActive }) => menuItemClassName(isActive, '/reward')}
              >
              <RiCoupon3Fill className="h-6 w-6" />
              <span className='font-paragraph'>Reward</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
