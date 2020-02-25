import React, { Fragment, useEffect, useContext } from "react";
import CommonContext from "../../context/common/commonContext";

const Logout = props => {
  const { logout } = useContext(CommonContext);
  // eslint-disable-next-line
  useEffect(() => logout().then(() => props.history.push("/")), []);
  return <Fragment />;
};

export default Logout;
