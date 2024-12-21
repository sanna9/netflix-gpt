import React from "react";

const Button = ({
  label,
  labelClassName,
  onClick,
  buttonClassName,
  btnIcon,
}) => {
  return (
    <button
      onClick={onClick}
      className={`custom-button cursor px-4 py-2 rounded shadow-lg  ${buttonClassName}`}
    >
      <span className={`flex items-center ${labelClassName}`}>
        {btnIcon}
        {label}
      </span>
    </button>
  );
};

export default Button;
