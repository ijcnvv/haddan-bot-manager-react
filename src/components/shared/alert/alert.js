import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import "./alert.scss";

const Alert = ({ error }) => {
  const [isShowed, setShowing] = useState(error);
  const onClose = () => setShowing(false);
  return (
    <Fragment>
      {isShowed ? (
        <div className="alert card-panel red darken-3">
          <span className="alert__text">{error}</span>
          <span className="material-icons alert__close" onClick={onClose}>
            close
          </span>
        </div>
      ) : null}
    </Fragment>
  );
};

Alert.propTypes = {
  error: PropTypes.string
};

export default Alert;
