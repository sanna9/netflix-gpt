import React from "react";
import "./InputLabel.scss";

function InputLabel({
  id,
  name,
  type = "text",
  value,
  onChange,
  onBlur,
  placeholder,
  className = "",
  required = false,
  disabled = false,
  error,
  label,
  labelClassName = "",
  htmlFor,
}) {
  const className = inputClassName
    ? `form-control ${inputClassName}`
    : "form-control";

  return (
    <div className="input-label-container">
      {label && (
        <label
          htmlFor={htmlFor || id}
          className={`form-label ${labelClassName}`}
        >
          {label} {required && <span className="text-danger">*</span>}
        </label>
      )}
      <div className="input-wrapper">
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          className={`form-control ${className}`}
          required={required}
          disabled={disabled}
        />
      </div>
      {error && <p className="text-danger mt-1">{error}</p>}
    </div>
  );
}

export default InputLabel;
