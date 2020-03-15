import React from "react";
import CashPopup from "./modules/cash";

const EditPropertyPopup = ({ editType, ...rest }) => {
  const types = {
    cash: CashPopup,
    common: ""
  };
  const typeNames = {
    cash: "Баланс, руб.",
    price: "Тариф, руб/день",
    discount: "Скидка, %",
    vision: "Капчи, шт"
  };
  const title = typeNames[editType];
  const Component = types[editType || "common"];

  return (
    <div className="edit">
      <h3 className="edit__title">{title}</h3>
      <Component {...rest} />
    </div>
  );
};

export default EditPropertyPopup;
