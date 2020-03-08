import React from "react";
import "./listItem.scss";

const User = ({ user }) => {
  return (
    <div className="list-item">
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
