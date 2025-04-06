import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userRole = localStorage.getItem("role");
    setRole(userRole);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Left: Logo + Links */}
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold">HealthCompanion AI</Link>

            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">

                {/* Doctor View */}
                {role === "doctor" && (
                  <>
                    <Link
                      to="/doctor"
                      className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500 transition"
                    >
                      Dashboard
                    </Link>
                    <Link
                      to="/schedule"
                      className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500 transition"
                    >
                      Schedule
                    </Link>
                  </>
                )}

                {/* Patient View */}
                {role === "patient" && (
                  <>
                    <Link
                      to="/patient"
                      className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500 transition"
                    >
                      Dashboard
                    </Link>
                    <Link
                      to="/reports"
                      className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500 transition"
                    >
                      Reports
                    </Link>
                    <Link
                      to="/mental-health"
                      className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500 transition"
                    >
                      Mental Health
                    </Link>
                    <Link
                      to="/medications"
                      className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500 transition"
                    >
                      Medications
                    </Link>
                    <Link
                      to="/charts"
                      className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500 transition"
                    >
                      Charts
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Right: Avatar Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center focus:outline-none"
            >
              <img
                className="h-10 w-10 rounded-full border-2 border-white"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="User avatar"
              />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white rounded-lg shadow-lg z-50">
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
