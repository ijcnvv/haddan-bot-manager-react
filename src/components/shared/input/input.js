import React from "react";

const Input = ({ label, className, type = "text", ...rest }) => {
  const id = `${type}-${(Math.random() * 1000000) ^ 1}`;
  const cls = `input-field ${className}`;

  return (
    <div className={cls}>
      <input id={id} type={type} className="validate" {...rest} />
      <label htmlFor={id} className="active">
        {label || rest.placeholder}
      </label>
    </div>
  );
};

export default Input;
