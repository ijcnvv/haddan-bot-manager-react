import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
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

User.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    network: PropTypes.string.isRequired,
    cash: PropTypes.number.isRequired
  })
};

export default User;
