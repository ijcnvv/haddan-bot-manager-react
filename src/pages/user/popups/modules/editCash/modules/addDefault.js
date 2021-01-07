import React from "react";
import PropTypes from "prop-types";
import Button from "components/shared/button/button";

const AddDefaultCash = ({ setPath, onChange }) => {
  const values = [100, 200, 300, 400, 500, 1000];
  const list = values.map((value) => {
    const title = `+ ${value}р`;
    return (
      <Button
        className="btn"
        key={value}
        onClick={() => onChange("add", value)}
      >
        {title}
      </Button>
    );
  });

  return (
    <>
      <i className="material-icons back" onClick={() => setPath(null)}>
        keyboard_backspace
      </i>
      <div className="cash">{list}</div>
      <Button className="btn-flat" onClick={() => setPath("addCustom")}>
        Другое
      </Button>
    </>
  );
};

AddDefaultCash.propTypes = {
  setPath: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AddDefaultCash;
