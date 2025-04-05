import React, { useState } from 'react';

export const Dialog = ({ children }) => {
  return <div>{children}</div>;
};

export const DialogTrigger = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
      {children}
    </button>
  );
};

export const DialogContent = ({ children, isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-[90%] md:w-[400px]">
        {children}
      </div>
    </div>
  );
};
