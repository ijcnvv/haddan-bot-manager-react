import React from "react";
import PropTypes from "prop-types";
import Button from "components/shared/button/button";

const AddDefaultCaptcha = ({ setPath, onChange }) => {
  const values = [1000, 2000, 5000];
  const list = values.map((value) => {
    const title = `+ ${value}`;
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

AddDefaultCaptcha.propTypes = {
  setPath: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  property: PropTypes.string.isRequired,
};

export default AddDefaultCaptcha;
