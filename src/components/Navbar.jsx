import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { RiCommunityFill } from "react-icons/ri";
import { FaRecycle } from "react-icons/fa";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { RiCoupon3Fill } from "react-icons/ri";

const Navbar = () => {
  const location = useLocation();

  const shouldHighlight = (route) => {
    console.log("Current Path:", location.pathname, "Route:", route); 
    if (route === '/community') {
      return ['/community'].includes(location.pathname);
    }
    if (route === '/recycle') {
      return ['/recycle'].includes(location.pathname);
    }
    if (route === '/menu') {
      return ['/menu'].includes(location.pathname);
    }
    if (route === '/reward') {
      return ['/reward', '/coupons', '/challenge-details', '/coupon-sent'].includes(location.pathname);
    }
    return location.pathname.startsWith(route);
  };


  return (
    <nav className="fixed inset-x-0 bottom-0 bg-white shadow z-10 py-2">
      <div className="max-w-screen-xl mx-auto">
        <ul className="flex justify-between items-center list-none p-0 m-0">
          <li className="flex-1">
          <NavLink 
              to="/community"
              className={({ isActive }) => 
                isActive || shouldHighlight('/community') 
                  ? "text-primary bg-gray-200 flex flex-col items-center justify-center py-2 px-1 sm:px-4 w-full text-xs sm:text-sm no-underline"
                  : "flex flex-col items-center justify-center py-2 px-1 sm:px-4 w-full text-xs sm:text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-100 no-underline"
              }
            >
              <RiCommunityFill className="h-6 w-6" />
              <span>Community</span>
            </NavLink>
          </li>
          <li className="flex-1">
              <NavLink 
                to="/recycle"
                className={({ isActive }) => 
                  isActive || shouldHighlight('/recycle') 
                    ? "text-primary bg-gray-200 flex flex-col items-center justify-center py-2 px-1 sm:px-4 w-full text-xs sm:text-sm no-underline"
                    : "flex flex-col items-center justify-center py-2 px-1 sm:px-4 w-full text-xs sm:text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-100 no-underline"
                }
              >
              <FaRecycle className="h-6 w-6" />
              <span>Recycle</span>
            </NavLink>
          </li>
          <li className="flex-1">
              <NavLink 
                to="/menu"
                className={({ isActive }) => 
                  isActive || shouldHighlight('/menu') 
                    ? "text-primary bg-gray-200 flex flex-col items-center justify-center py-2 px-1 sm:px-4 w-full text-xs sm:text-sm no-underline"
                    : "flex flex-col items-center justify-center py-2 px-1 sm:px-4 w-full text-xs sm:text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-100 no-underline"
                }
              >
              <MdOutlineRestaurantMenu className="h-6 w-6" />
              <span>Menu</span>
            </NavLink>
          </li>
          <li className="flex-1">
              <NavLink 
                to="/reward"
                className={({ isActive }) => 
                  isActive || shouldHighlight('/reward') 
                    ? "text-primary bg-gray-200 flex flex-col items-center justify-center py-2 px-1 sm:px-4 w-full text-xs sm:text-sm no-underline"
                    : "flex flex-col items-center justify-center py-2 px-1 sm:px-4 w-full text-xs sm:text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-100 no-underline"
                }
              >
              <RiCoupon3Fill className="h-6 w-6" />
              <span>Reward</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
