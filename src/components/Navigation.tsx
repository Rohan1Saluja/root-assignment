import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-black/10 sticky top-0 z-50 h-15 flex items-center">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">
          <Link
            to="/home"
            className="no-underline transition-colors duration-300 hover:text-blue-400"
          >
            MyApp
          </Link>
        </div>
        <div className="flex gap-4 md:gap-8 items-center">
          <Link
            to="/home"
            className={`text-gray-500 no-underline font-medium py-2 px-4 rounded-lg transition-all duration-300 relative hover:text-blue-400 hover:bg-blue-400/10 ${
              location.pathname === "/home"
                ? "text-blue-400 bg-blue-400/15 font-semibold"
                : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/onboarding"
            className={`text-gray-500 no-underline font-medium py-2 px-4 rounded-lg transition-all duration-300 relative hover:text-blue-400 hover:bg-blue-400/10 ${
              location.pathname === "/onboarding"
                ? "text-blue-400 bg-blue-400/15 font-semibold"
                : ""
            }`}
          >
            Onboarding
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
