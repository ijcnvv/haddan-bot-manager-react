import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ Component, ...rest }) => {
  const { isAuth } = useSelector(({ common }) => common);

  return (
    <Route
      {...rest}
      render={props =>
        isAuth ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/auth", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  Component: PropTypes.func.isRequired
};

export default PrivateRoute;
