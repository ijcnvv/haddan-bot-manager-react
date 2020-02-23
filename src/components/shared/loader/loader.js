import React from "react";
import "./loader.scss";

const Loader = ({ abs = true }) => {
  const classes = ["lds-wrapper"];
  if (abs) classes.push("abs");

  return (
    <div className={classes.join(" ")}>
      <div className="lds-ring">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default Loader;
