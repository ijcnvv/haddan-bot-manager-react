import React, { useReducer } from "react";
import CommonContext from "./commonContext";
import CommonReducer from "./commonReducer";
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
import { getToken, saveToken } from "../../utils/token";

const CommonState = ({ children }) => {
  const initialState = {
    loading: false,
    updates: [],
    isAuth: false,
    token: getToken()
  };
  const [state, dispatch] = useReducer(CommonReducer, initialState);

  const getUpdates = () => {
    setLoading();
    return ajaxGetUpdates()
      .then(payload => dispatch({ type: SET_UPDATES, payload }))
      .catch(showErrorMessage);
  };

  const getAuthByToken = () => {
    setLoading();
    return ajaxAuthByToken()
      .then(() => dispatch({ type: SET_AUTH }))
      .catch(showErrorMessage)
      .finally(() => setLoading(false));
  };

  const getAuthByEmailAndPassword = ({ email, password }) => {
    setLoading();
    return ajaxAuthByEmailAndPassword({ email, password })
      .then(({ token }) => {
        saveToken(token);
        dispatch({ type: SET_TOKEN, payload: token });
      })
      .catch(showErrorMessage)
      .finally(() => setLoading(false));
  };

  const logout = () => {
    setLoading();
    return ajaxLogout()
      .then(() => dispatch({ type: LOGOUT }))
      .catch(showErrorMessage);
  };

  const showErrorMessage = msg => console.error(msg);

  const setLoading = (payload = true) =>
    dispatch({ type: SET_LOADING, payload });

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

export default CommonState;
