import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchEditingUser } from "actions/userActions";
import PropTypes from "prop-types";
import "./logs.scss";

const Logs = ({ data = [] }) => {
  const isEmpty = !data.length;
  const dispatch = useDispatch();
  const { id } = useParams();

  if (isEmpty) return null;

  const clickHandler = ({ value, type, property, text }) => {
    if (!window.confirm(`Повторить ${text} ?`)) return;

    dispatch(fetchEditingUser({ id, value, type, property }, () => ({})));
  };

  const template = data.map(log => (
    <div className="log" key={log.id}>
      <div className="log__time">{log.date}</div>
      <div className="log__text">{log.text}</div>
      {log.type ? (
        <span
          className="material-icons log__replay"
          onClick={() => clickHandler(log)}
        >
          replay
        </span>
      ) : null}
    </div>
  ));

  return (
    <div className="user__logs">
      <h3 className="user__logs-title">Последние операции</h3>
      {template}
    </div>
  );
};

Logs.propTypes = {
  data: PropTypes.array
};

export default Logs;
