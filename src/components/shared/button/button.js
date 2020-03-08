import React from "react";

const Button = ({ children, classes = "", onClick }) => {
  const cls = ` ${classes}`;
  return (
    <button className={cls} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
