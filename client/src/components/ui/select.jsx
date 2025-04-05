import React from "react";

export const Select = ({ children, className = "" }) => {
  return <div className={`relative ${className}`}>{children}</div>;
};

export const SelectTrigger = ({ onClick, value, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full px-4 py-2 border border-gray-300 rounded bg-white text-left ${className}`}
    >
      {value || "Select..."}
    </button>
  );
};

export const SelectContent = ({ children, className = "" }) => {
  return (
    <div
      className={`absolute left-0 right-0 mt-2 bg-white border border-gray-200 rounded shadow-md z-10 ${className}`}
    >
      {children}
    </div>
  );
};

export const SelectItem = ({ children, onClick, className = "" }) => {
  return (
    <div
      onClick={onClick}
      className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${className}`}
    >
      {children}
    </div>
  );
};
