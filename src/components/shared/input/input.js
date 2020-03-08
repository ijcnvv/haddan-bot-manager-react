import React from "react";

const Input = ({
  type = "text",
  label,
  value,
  onChange,
  placeholder = "",
  classes = ""
}) => {
  const id = `${type}-${(Math.random() * 100000) ^ 1}`;
  const cls = `input-field ${classes}`;

  return (
    <div className={cls}>
      <input
        value={value}
        placeholder={placeholder}
        id={id}
        type={type}
        className="validate"
        required
        onChange={onChange}
      />
      <label htmlFor={id} className="active">
        {label}
      </label>
    </div>
  );
};

export default Input;
