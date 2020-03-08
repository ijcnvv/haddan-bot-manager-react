import React from "react";
import ListItem from "./listItem";

const UsersList = ({ users = [], filter = "", sortBy = "name" }) => {
  const usersFiltered = () => {
    const _filter = filter.trim().toLowerCase();

    if (!_filter) return users;

    return users.filter(({ name, email }) => {
      const _name = name.trim().toLowerCase();
      const _email = email.trim().toLowerCase();
      return _name.indexOf(_filter) !== -1 || _email.indexOf(_filter) !== -1;
    });
  };

  const sortedList = [...usersFiltered()].sort((a, b) => a[sortBy] - b[sortBy]);
  const list = sortedList.map(user => <ListItem user={user} key={user.id} />);

  return <div className="users__list">{list}</div>;
};

export default UsersList;
