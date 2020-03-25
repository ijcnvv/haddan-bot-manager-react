import React from "react";
import PropTypes from "prop-types";
import PopupForm from "../../form";

const AddCustomCashValue = ({ setPath, onChange }) => {
  return (
    <PopupForm
      className="wrapper"
      onBack={() => setPath("add")}
      onChange={count => onChange("add", count)}
      title="Добавить"
    />
  );
};

AddCustomCashValue.propTypes = {
  setPath: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default AddCustomCashValue;
