import React from "react";
import Button from "components/shared/button/button";

const Choice = ({ setPath }) => {
  return (
    <div className="wrapper">
      <Button className="btn" onClick={() => setPath("add")}>
        Добавить
      </Button>
      <Button className="btn-flat" onClick={() => setPath("edit")}>
        Редактировать
      </Button>
    </div>
  );
};

export default Choice;
