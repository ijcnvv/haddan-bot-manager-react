import React from "react";
import PropTypes from "prop-types";

const Players = ({ data = [] }) => {
  const isEmpty = !data.length;

  if (isEmpty) return null;

  const list = data.map(id => <p key={id}>{id}</p>);

  return (
    <div className="user__section">
      <h3 className="user__sub-title">
        <i className="material-icons">people</i>
        <span>Персонажи</span>
      </h3>
      {list}
    </div>
  );
};

Players.propTypes = {
  data: PropTypes.array
};

export default Players;
