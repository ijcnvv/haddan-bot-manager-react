import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUserById, onPathLeave } from "actions/userActions";
import Loader from "components/shared/loader/loader";
import Alert from "components/shared/alert/alert";
import Button from "components/shared/button/button";
import Logs from "./modules/logs";
import Players from "./modules/players";
import UserPopup from "./popups";
import "./user.scss";

const UserPage = () => {
  const dispatch = useDispatch();
  const { user, loading, loaded, error } = useSelector(({ user }) => user);
  const [isPopupShowed, setPopupShowing] = useState(false);
  const [popupType, setPopupType] = useState(null);
  const [editType, setEditType] = useState(null);
  const { id } = useParams();

  const isEmpty = !Object.keys(user).length;
  const noData = loaded && isEmpty;

  const showPopup = (type, editType = null) => {
    setPopupType(type);
    setEditType(editType);
    setPopupShowing(true);
  };

  const closePopup = () => {
    setPopupShowing(false);
    setPopupType(null);
    setEditType(null);
  };

  useEffect(() => {
    dispatch(fetchUserById(id));

    return () => dispatch(onPathLeave());
    // eslint-disable-next-line
  }, [id]);

  if (noData) return <div>Пользователя не существует</div>;

  return (
    <div className="user">
      <Loader loading={loading} />
      {error ? <Alert error={error} /> : null}

      {isEmpty ? null : (
        <div className="user__wrapper">
          <h2 className="user__title">
            <img
              className="user__icon"
              src={`/images/${user.network}.png`}
              alt="icon"
            />
            <span>{user.name}</span>
          </h2>
          <div className="user__email">{user.email}</div>
          <div
            className="user__row editable"
            onClick={() => showPopup("editUser", "cash")}
          >
            <i className="material-icons user__edit">edit</i>
            <span>Баланс {user.cash} руб.</span>
          </div>
          <div
            className="user__row editable"
            onClick={() => showPopup("editUser", "price")}
          >
            <i className="material-icons user__edit">edit</i>
            <span>Тариф {user.price} руб/день.</span>
          </div>
          <div
            className="user__row editable"
            onClick={() => showPopup("editUser", "discount")}
          >
            <i className="material-icons user__edit">edit</i>
            <span>Скидка {user.discount} %</span>
          </div>

          <div className="user__row">
            <i className="material-icons">update</i>
            <span>Обновлено - {user.last_update}</span>
          </div>
        </div>
      )}

      <Players data={user.players} />

      <Logs data={user.logs} />

      <Button
        className="btn-floating blue darken-3"
        onClick={() => showPopup("addPlayer")}
      >
        +
      </Button>

      {isPopupShowed ? (
        <UserPopup
          type={popupType}
          editType={editType}
          closePopup={closePopup}
        />
      ) : null}
    </div>
  );
};

export default UserPage;
