import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./popup.scss";

const Popup = ({ children, className = "", closePopup }) => {
  const cls = `popup ${className}`;

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

Popup.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  closePopup: PropTypes.func.isRequired
};

export default Popup;
