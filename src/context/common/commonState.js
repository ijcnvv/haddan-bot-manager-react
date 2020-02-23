import React, { useReducer } from "react";
import { CommonContext } from "./commonContext";
import { commonReducer } from "./commonReducer";
import { SET_UPDATES, SET_LOADING } from "../../constants";
import { getUpdates } from "../../api";

export const CommonState = ({ children }) => {
  const initialState = {
    loading: false,
    updates: []
  };
  const [state, dispatch] = useReducer(commonReducer, initialState);

  const fetchUpdates = async () => {
    setLoading();
    const payload = await getUpdates();

    dispatch({ type: SET_UPDATES, payload });
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

  const { updates, loading } = state;

  return (
    <CommonContext.Provider value={{ updates, loading, fetchUpdates }}>
      {children}
    </CommonContext.Provider>
  );
};
