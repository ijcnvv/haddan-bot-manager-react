import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchEditingUser } from "actions/userActions";
import PropTypes from "prop-types";
import Loader from "components/shared/loader/loader";
import CaptchaPopup from "../editCaptcha";
import CashPopup from "../editCash";
import CommonPopup from "../editSimple";
import "./edit.scss";

const EditPropertyPopup = ({ editType, closePopup, ...rest }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector(({ user }) => user);
  const { id } = useParams();
  const types = {
    cash: { Component: CashPopup, title: "Баланс, руб." },
    price: { Component: CommonPopup, title: "Тариф, руб/день" },
    discount: { Component: CommonPopup, title: "Скидка, %" },
    vision: { Component: CaptchaPopup, title: editType === "add" ? "Капчи, руб" : "Капчи, шт" },
  };
  const { Component, title } = types[editType];

  const onChangeHandler = (type, value) => {
    dispatch(
      fetchEditingUser({ id, property: editType, type, value }, closePopup)
    );
  };

  return (
    <div className="edit">
      <Loader loading={loading} />
      <h3 className="edit__title">{title}</h3>
      <Component {...rest} onChange={onChangeHandler} property={editType} />
    </div>
  );
};

EditPropertyPopup.propTypes = {
  editType: PropTypes.string.isRequired,
  closePopup: PropTypes.func.isRequired,
};

export default EditPropertyPopup;
