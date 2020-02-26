import React from "react";
import UsersState from "../../context/users/usersState";
import UsersContent from "./modules/content";

const UsersPage = () => {
  return (
    <UsersState>
      <UsersContent />
    </UsersState>
  );
};

export default UsersPage;
