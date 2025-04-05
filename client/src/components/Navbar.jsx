import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear auth tokens or user state here
    localStorage.removeItem("token"); // or however you're storing auth info
    navigate("/login");
  };

  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/">
                <span className="text-xl font-bold">HealthCompanion AI</span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/patient"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500 transition duration-300"
                >
                  Dashboard
                </Link>
                <Link
                  to="/reports"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500 transition duration-300"
                >
                  Reports
                </Link>
                <Link
                  to="/mental-health"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500 transition duration-300"
                >
                  Mental Health
                </Link>
                <Link
                  to="/medications"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500 transition duration-300"
                >
                  Medications
                </Link>
                <Link to="/charts" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500 transition duration-300">
                  Charts
                </Link>
              </div>
            </div>
          </div>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen((prev) => !prev)}
              className="flex items-center focus:outline-none"
            >
              <img
                className="h-10 w-10 rounded-full border-2 border-white"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="User avatar"
              />
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white rounded-lg shadow-lg overflow-hidden z-50">
                <Link
                  to="/profile"
                  onClick={() => setDropdownOpen(false)}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
                >
                  View Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
