import React, { useState } from "react";
import PropTypes from "prop-types";
import Input from "components/shared/input/input";
import Button from "components/shared/button/button";

const PopupForm = ({
  onBack,
  onChange,
  icon = true,
  title,
  className = "",
  label = "Значение",
}) => {
  const [count, setCount] = useState("");
  const isValidCount = String(count).length > 0 && +count >= 0;
  const classes = `input-wrapper ${className}`;
  const inputHandler = (e) => setCount(e.target.value);
  const clickHandler = () => isValidCount && onChange(+count);

  return (
    <div className={classes}>
      {icon ? (
        <i className="material-icons back" onClick={onBack}>
          keyboard_backspace
        </i>
      ) : null}
      <Input
        placeholder={label}
        type="number"
        value={count}
        onChange={inputHandler}
      />
      <Button className="btn" onClick={clickHandler}>
        {title}
      </Button>
    </div>
  );
};

PopupForm.propTypes = {
  onBack: PropTypes.func,
  onChange: PropTypes.func,
  icon: PropTypes.bool,
  className: PropTypes.string,
  label: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default PopupForm;
