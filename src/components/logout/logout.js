import React, { Fragment, useEffect, useContext } from "react";
import CommonContext from "../../context/common/commonContext";

const Logout = props => {
  const { logout } = useContext(CommonContext);

  useEffect(() => {
    logout().then(() => props.history.push("/"));
    // eslint-disable-next-line
  }, []);
  return <Fragment />;
};

export default Logout;
