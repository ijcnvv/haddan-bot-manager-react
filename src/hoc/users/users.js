import React from "react";
import UsersState from "../../context/users/usersState";

const Users = ({ children }) => {
  return <UsersState>{children}</UsersState>;
};

export default Users;
