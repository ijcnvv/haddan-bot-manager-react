import React, { useEffect } from "react";
import "./popup.scss";

const Popup = ({ children, classes = "", closePopup }) => {
  const cls = `popup ${classes}`;

  const clickHandler = event => {
    const { target, currentTarget } = event;
    if (target !== currentTarget) return false;
    return closePopup();
  };

  useEffect(() => {
    document.documentElement.classList.add("out");
    return () => document.documentElement.classList.remove("out");
  }, []);

  return (
    <div className={cls} onClick={clickHandler}>
      <div className="popup__container">
        <div className="popup__close material-icons" onClick={closePopup}>
          close
        </div>
        {children}
      </div>
    </div>
  );
};

export default Popup;
