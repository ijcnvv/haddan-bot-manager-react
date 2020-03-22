import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchEditingUser } from "actions/userActions";
import Loader from "components/shared/loader/loader";
import CashPopup from "./modules/cash";
import "./edit.scss";

const EditPropertyPopup = ({ editType, closePopup, ...rest }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector(({ user }) => user);
  const { id } = useParams();
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

  const onChangeHandler = (type, value) => {
    dispatch(
      fetchEditingUser({ id, property: editType, type, value }, closePopup)
    );
  };

  return (
    <div className="edit">
      <Loader loading={loading} />
      <h3 className="edit__title">{title}</h3>
      <Component {...rest} onChange={onChangeHandler} />
    </div>
  );
};

export default EditPropertyPopup;
