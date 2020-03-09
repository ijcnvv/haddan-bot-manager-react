import React, { useReducer } from "react";
import UsersContext from "./usersContext";
import UsersReducer from "./usersReducer";
import { SET_USERS_DATA, SET_USER_DATA, SET_LOADING } from "../../constants";
import { ajaxGetUsers, ajaxGetUserById } from "../../api";

const UsersState = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
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

  const getUserById = id => {
    setLoading();
    return ajaxGetUserById(id)
      .then(payload => dispatch({ type: SET_USER_DATA, payload }))
      .catch(showErrorMessage);
  };

  const showErrorMessage = msg => console.error(msg);

  const setLoading = () => dispatch({ type: SET_LOADING });

  const { users, user, loading, profit } = state;

  return (
    <UsersContext.Provider
      value={{
        users,
        user,
        loading,
        getUsers,
        getUserById,
        profit
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersState;
