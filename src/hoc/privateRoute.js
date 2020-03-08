import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import CommonContext from "../context/common/commonContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuth } = useContext(CommonContext);

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

export default PrivateRoute;
