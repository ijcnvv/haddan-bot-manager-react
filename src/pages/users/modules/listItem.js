import React from "react";
import { useHistory } from "react-router-dom";
import "./listItem.scss";

const User = ({ user }) => {
  const history = useHistory();

  const clickHandler = () => {
    history.push(`/users/${user.id}`);
  };

  return (
    <div className="list-item" onClick={clickHandler}>
      <img
        className="list-item__icon"
        src={`/images/${user.network}.png`}
        alt="icon"
      />
      <div className="list-item__title">
        <div className="list-item__name">{user.name}</div>
        {user.email ? (
          <div className="list-item__email">({user.email})</div>
        ) : null}
      </div>
      <div className="list-item__cash">{user.cash} руб.</div>
    </div>
  );
};

export default User;
