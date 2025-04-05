import React from 'react';

export const Input = ({ value, onChange, placeholder, type = "text", className = "" }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500 ${className}`}
    />
  );
};
