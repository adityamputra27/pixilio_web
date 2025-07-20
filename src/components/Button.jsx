import React from 'react';

const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-pixilio-blue text-white font-bold py-2 px-4 rounded hover:bg-cyan ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
