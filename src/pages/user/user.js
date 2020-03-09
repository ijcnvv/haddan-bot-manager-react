import React from "react";
import UsersState from "../../context/users/usersState";
import UsersContent from "./modules/content";
import "./user.scss";

const UsersPage = () => {
  return (
    <UsersState>
      <UsersContent />
    </UsersState>
  );
};

export default UsersPage;
