import React from "react";
import "./logs.scss";

const Logs = ({ data = [] }) => {
  const isEmpty = !data.length;

  if (isEmpty) return null;

  const template = data.map(log => (
    <div className="log" key={log.id}>
      <div className="log__time">{log.date}</div>
      <div className="log__text">{log.text}</div>
    </div>
  ));

  return (
    <div className="user__logs">
      <h3 className="user__logs-title">Последние операции</h3>
      {template}
    </div>
  );
};

export default Logs;
