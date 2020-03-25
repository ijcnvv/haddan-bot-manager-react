import React from "react";
import PropTypes from "prop-types";

const Input = ({
  label,
  className = "",
  type = "text",
  register = null,
  error = null,
  placeholder = "",
  ...rest
}) => {
  const id = `${type}-${(Math.random() * 1000000) ^ 1}`;
  const cls = `input-field ${className}`;

  return (
    <div className={cls}>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="validate"
        ref={register}
        {...rest}
      />
      <label htmlFor={id} className="active">
        {label || placeholder}
      </label>
      {error ? <div className="red-text">{error.message}</div> : null}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  register: PropTypes.func,
  error: PropTypes.object
};

export default Input;
