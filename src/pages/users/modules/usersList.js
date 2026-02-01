import React from 'react';
import ListItem from './listItem';
import PropTypes from 'prop-types';

const UsersList = ({ users = [], filter = '', sortBy = 'name' }) => {
  const usersFiltered = () => {
    const _filter = filter.trim().toLowerCase();

    if (!_filter) return users;

    return users.filter(({ name, email, players, tgid }) => {
      const _name = name.trim().toLowerCase();
      const _email = email?.trim().toLowerCase() || '';
      
      return [
        _name.indexOf(_filter) !== -1, 
        _email.indexOf(_filter) !== -1,
        players.indexOf(+_filter) !== -1,
        tgid === +_filter,
      ].some(Boolean);
    });
  };

  const sortedList = [...usersFiltered()].sort((a, b) => b[sortBy] - a[sortBy]);
  const list = sortedList.map((user) => <ListItem user={user} key={user.id} />);

  return <div className="users__list">{list}</div>;
};

UsersList.propTypes = {
  users: PropTypes.array.isRequired,
  filter: PropTypes.string,
  sortBy: PropTypes.string.isRequired,
};

export default UsersList;
