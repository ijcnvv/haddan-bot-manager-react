import React from "react";
import "./popup.scss";

const Popup = ({ children, classes = "", closeModal }) => {
  const cls = `popup ${classes}`;

  const clickHandler = event => {
    const { target, currentTarget } = event;
    console.log(target, currentTarget);
    if (target !== currentTarget) return;
    // closeModal();
  };

  return (
    <div className={cls} onClick={clickHandler}>
      <div className="popup__container">
        <div className="popup__close material-icons" onClick={clickHandler}>
          close
        </div>
        {children}
      </div>
    </div>
  );
};

export default Popup;
