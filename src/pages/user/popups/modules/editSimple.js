import React from "react";
import PropTypes from "prop-types";
import PopupForm from "./form";

const CommonPopup = ({ onChange }) => {
  return (
    <PopupForm
      className="wrapper"
      icon={false}
      onChange={count => onChange("set", count)}
      title="Задать"
    />
  );
};

CommonPopup.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default CommonPopup;
