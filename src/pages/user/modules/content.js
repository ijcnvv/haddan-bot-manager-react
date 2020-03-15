import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import UsersContext from "../../../context/users/usersContext";
import Logs from "./logs";
import Loader from "../../../components/shared/loader/loader";
import Popup from "../popups";

const UserContent = () => {
  const [loaded, setLoaded] = useState(false);
  const [isPopupShowed, setPopupShowing] = useState(false);
  const [popupType, setPopupType] = useState(null);
  const [editType, setEditType] = useState(null);

  const { user, getUserById, loading } = useContext(UsersContext);
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
    getUserById(id).then(() => setLoaded(true));
    // eslint-disable-next-line
  }, []);

  if (noData) return <div>Пользователя не существует</div>;

  return (
    <div className="user">
      <Loader loading={loading} />

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
          <div
            className="user__row editable"
            onClick={() => showPopup("editUser", "cash")}
          >
            <i className="material-icons user__edit">edit</i>
            <span>Баланс {user.cash} руб.</span>
          </div>
          <div className="user__row">
            <i className="material-icons user__edit">edit</i>
            <span>Тариф {user.price} руб/день.</span>
          </div>
          <div className="user__row">
            <i className="material-icons user__edit">edit</i>
            <span>Скидка {user.discount} %</span>
          </div>
          <div className="user__row space">
            <i className="material-icons user__edit">edit</i>
            <span>Капчи {user.vision} шт.</span>
          </div>
          <div className="user__row">
            <i className="material-icons">people</i>
            <span>Персонажей - {user.players}</span>
          </div>
          <div className="user__row">
            <i className="material-icons">update</i>
            <span>Обновлено - {user.last_update}</span>
          </div>
        </div>
      )}

      <Logs data={user.logs} />

      {isPopupShowed ? (
        <Popup type={popupType} editType={editType} closePopup={closePopup} />
      ) : null}
    </div>
  );
};

export default UserContent;
