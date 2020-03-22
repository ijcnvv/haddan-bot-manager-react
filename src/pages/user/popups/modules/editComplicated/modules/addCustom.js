import React from "react";
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

export default AddCustomCashValue;
