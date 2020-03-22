import React, { useState } from "react";
import Button from "components/shared/button/button";
import PopupForm from "../../form";
import "./cash.scss";

const CashPopup = ({ onChange }) => {
  const [path, setPath] = useState(null);
  const defaultValue = 300;
  const title = `+ ${defaultValue} руб`;

  if (!path) {
    return (
      <div className="cash-wrapper">
        <Button className="btn" onClick={() => setPath("add")}>
          Добавить
        </Button>
        <Button className="btn-flat" onClick={() => setPath("edit")}>
          Редактировать
        </Button>
      </div>
    );
  }

  if (path === "add") {
    return (
      <div className="cash-wrapper">
        <i className="material-icons back" onClick={() => setPath(null)}>
          keyboard_backspace
        </i>
        <Button className="btn" onClick={() => onChange("add", defaultValue)}>
          {title}
        </Button>
        <Button className="btn-flat" onClick={() => setPath("add-other")}>
          Другое
        </Button>
      </div>
    );
  }

  if (path === "add-other") {
    return (
      <PopupForm
        className="cash-wrapper"
        onBack={() => setPath("add")}
        onChange={count => onChange("add", count)}
        title="Добавить"
      />
    );
  }

  return (
    <PopupForm
      className="cash-wrapper"
      onBack={() => setPath(null)}
      onChange={count => onChange("set", count)}
      title="Задать"
    />
  );
};

export default CashPopup;
