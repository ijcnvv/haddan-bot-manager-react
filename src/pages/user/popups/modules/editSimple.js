import React from "react";
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

export default CommonPopup;
