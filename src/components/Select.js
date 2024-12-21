import React from "react";

const Select = ({
  options = [],
  onChange,
  placeholder = "Select an option",
  className,
}) => {
  return (
    <div>
      <select
        onChange={(e) => onChange?.(e.target.value)}
        className={className}
      >
        <option value="">{placeholder}</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
