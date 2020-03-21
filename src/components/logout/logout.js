import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchLogout } from "../../actions";

const Logout = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { isAuth } = useSelector(({ common }) => common);

  useEffect(() => {
    dispatch(fetchLogout());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!isAuth) history.push("/");
  }, [isAuth, history]);
  return <Fragment />;
};

export default Logout;
