import React from "react";
import PopupForm from "../../form";

const AddCustomCashValue = ({ setPath, onChange }) => {
  return (
    <PopupForm
      className="wrapper"
      onBack={() => setPath(null)}
      onChange={count => onChange("set", count)}
      title="Задать"
    />
  );
};

export default AddCustomCashValue;
