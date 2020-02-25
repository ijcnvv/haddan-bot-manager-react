import React from "react";

const Input = props => {
  const { type = "text", label, value, onChange, placeholder = "" } = props;
  const id = `${type}-${(Math.random() * 100000) ^ 1}`;

  return (
    <div className="input-field">
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
