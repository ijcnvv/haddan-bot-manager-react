import React, { useState } from "react";
import Input from "components/shared/input/input";
import Button from "components/shared/button/button";

const PopupForm = ({ onBack, icon = true, onChange, title, className }) => {
  const [count, setCount] = useState("");
  const isValidCount = count && +count > 0;
  const classes = `input-wrapper ${className}`;
  const inputHandler = e => setCount(e.target.value);
  const clickHandler = () => isValidCount && onChange(+count);

  return (
    <div className={classes}>
      {icon ? (
        <i className="material-icons back" onClick={onBack}>
          keyboard_backspace
        </i>
      ) : null}
      <Input
        placeholder="Значение"
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

export default PopupForm;
