import React from "react";
import "./loader.scss";

const loader = props => {
  const classes = ["lds-wrapper"];
  if (props.abs) classes.push("abs");

  return (
    <div className={classes}>
      <div loader="lds-ring">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default loader;
