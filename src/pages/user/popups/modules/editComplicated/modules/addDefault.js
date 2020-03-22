import React from "react";
import Button from "components/shared/button/button";

const AddDefaultCash = ({ setPath, onChange, property }) => {
  const values = {
    cash: { value: 300, badge: "руб" },
    vision: { value: 1000, badge: "шт" }
  };
  const { value, badge } = values[property];
  const title = `+ ${value} ${badge}`;

  return (
    <div className="wrapper">
      <i className="material-icons back" onClick={() => setPath(null)}>
        keyboard_backspace
      </i>
      <Button className="btn" onClick={() => onChange("add", value)}>
        {title}
      </Button>
      <Button className="btn-flat" onClick={() => setPath("addCustom")}>
        Другое
      </Button>
    </div>
  );
};

export default AddDefaultCash;
