import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold">HealthCompanion AI</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/patient" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500 transition duration-300">
                  Dashboard
                </Link>
                <Link to="/reports" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500 transition duration-300">
                  Reports
                </Link>
                <Link to="/mental-health" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500 transition duration-300">
                  Mental Health
                </Link>
                <Link to="/medications" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500 transition duration-300">
                  Medications
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button className="p-1 rounded-full text-indigo-200 hover:text-white focus:outline-none">
                <span className="sr-only">Notifications</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              <div className="ml-3 relative">
                <div>
                  <button className="max-w-xs flex items-center text-sm rounded-full focus:outline-none">
                    <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User profile" />
                  </button>
                </div>
              </div>
              <Link to="/settings" className="ml-4 px-3 py-1 rounded-md text-sm font-medium bg-indigo-700 hover:bg-indigo-800 transition duration-300">
                Settings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;