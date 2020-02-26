import React, { useReducer } from "react";
import UsersContext from "./usersContext";
import UsersReducer from "./usersReducer";
import { SET_USERS_DATA, SET_LOADING } from "../../constants";
import { ajaxGetUsers } from "../../api";

const UsersState = ({ children }) => {
  const initialState = {
    users: [],
    loading: false,
    profit: {}
  };

  const [state, dispatch] = useReducer(UsersReducer, initialState);

  const getUsers = () => {
    setLoading();
    return ajaxGetUsers()
      .then(payload => dispatch({ type: SET_USERS_DATA, payload }))
      .catch(showErrorMessage);
  };

  const showErrorMessage = msg => console.error(msg);

  const setLoading = () => dispatch({ type: SET_LOADING });

  const { users, loading, profit } = state;

  return (
    <UsersContext.Provider
      value={{
        users,
        loading,
        getUsers,
        profit
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersState;
