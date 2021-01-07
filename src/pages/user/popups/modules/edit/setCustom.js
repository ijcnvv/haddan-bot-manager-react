import React from "react";
import PropTypes from "prop-types";
import PopupForm from "../form";

const SetCustomCashValue = ({ setPath, onChange }) => {
  return (
    <PopupForm
      className="wrapper"
      onBack={() => setPath(null)}
      onChange={(count) => onChange("set", count)}
      title="Задать"
    />
  );
};

SetCustomCashValue.propTypes = {
  setPath: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SetCustomCashValue;
