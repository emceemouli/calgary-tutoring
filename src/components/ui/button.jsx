import React from 'react';

export const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};