import React from "react";

const Button = ({ text, onClick, type = "button", className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-black text-white text-lg px-8 py-4 rounded-xl font-medium hover:bg-[#25f4ee] hover:text-black transition-all duration-300 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
