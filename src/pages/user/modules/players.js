import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDeletePlayer, fetchResetPlayer } from "actions/userActions";
import "./players.scss";

const Players = ({ data = [] }) => {
  const isEmpty = !data.length;
  const dispatch = useDispatch();
  const { id } = useParams();

  if (isEmpty) return null;

  const deleteHandler = (player_id) => {
    if (!window.confirm(`Удалить ${player_id}?`)) return;
    dispatch(fetchDeletePlayer({ id, player_id }));
  };

  const resetHandler = (player_id) => {
    if (!window.confirm(`Сбросить инкорны ${player_id}?`)) return;
    dispatch(fetchResetPlayer({ id, player_id }));
  };

  const list = data.map((id) => (
    <div className="player" key={id}>
      <span>{id}</span>
      <i
        className="material-icons player__reset"
        onClick={() => resetHandler(id)}
      >
        undo
      </i>
      <i
        className="material-icons player__delete"
        onClick={() => deleteHandler(id)}
      >
        delete
      </i>
    </div>
  ));

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
  data: PropTypes.array,
};

export default Players;
