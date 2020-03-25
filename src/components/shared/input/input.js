import React from "react";

const Input = ({
  label,
  className,
  type = "text",
  register = null,
  error = null,
  ...rest
}) => {
  const id = `${type}-${(Math.random() * 1000000) ^ 1}`;
  const cls = `input-field ${className}`;

  return (
    <div className={cls}>
      <input
        id={id}
        type={type}
        className="validate"
        ref={register}
        {...rest}
      />
      <label htmlFor={id} className="active">
        {label || rest.placeholder}
      </label>
      {error ? <div className="red-text">{error.message}</div> : null}
    </div>
  );
};

export default Input;
