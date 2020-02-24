import React, { useReducer } from "react";
import { CommonContext } from "./commonContext";
import { commonReducer } from "./commonReducer";
import {
  SET_UPDATES,
  SET_LOADING,
  SET_AUTH,
  SET_TOKEN,
  LOGOUT
} from "../../constants";
import {
  ajaxGetUpdates,
  ajaxAuthByToken,
  ajaxAuthByEmailAndPassword,
  ajaxLogout
} from "../../api";
import { getToken } from "../../utils/token";

export const CommonState = ({ children }) => {
  const initialState = {
    loading: false,
    updates: [],
    isAuth: false,
    token: getToken()
  };
  const [state, dispatch] = useReducer(commonReducer, initialState);

  const getUpdates = async () => {
    setLoading();
    return ajaxGetUpdates().then(payload =>
      dispatch({ type: SET_UPDATES, payload })
    );
  };

  const getAuthByToken = () => {
    return ajaxAuthByToken().then(() => dispatch({ type: SET_AUTH }));
  };

  const getAuthByEmailAndPassword = () => {
    setLoading();
    return ajaxAuthByEmailAndPassword().then(payload =>
      dispatch({ type: SET_TOKEN, payload })
    );
  };

  const logout = () => {
    setLoading();
    return ajaxLogout().then(() => dispatch({ type: LOGOUT }));
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

  const { updates, loading, token, isAuth } = state;

  return (
    <CommonContext.Provider
      value={{
        updates,
        loading,
        getUpdates,
        getAuthByToken,
        token,
        isAuth,
        getAuthByEmailAndPassword,
        logout
      }}
    >
      {children}
    </CommonContext.Provider>
  );
};
