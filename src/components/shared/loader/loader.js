import React, { Fragment } from "react";
import "./loader.scss";

const Loader = ({ abs = true, loading = true }) => {
  const classes = ["lds-wrapper"];
  if (abs) classes.push("abs");

  return (
    <Fragment>
      {loading ? (
        <div className={classes.join(" ")}>
          <div className="lds-ring">
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
      ) : null}
    </Fragment>
  );
};

export default Loader;
