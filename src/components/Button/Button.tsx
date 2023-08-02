import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      className="flex w-full h-8 p-2.5 px-3 items-center space-x-2 rounded-md border border-laminar-gray-200"
      {...props}
    >
      <span className="text-laminar-gray-500 font-sans text-xs font-semibold leading-18">
        {children}
      </span>
    </button>
  );
};

export default Button;
