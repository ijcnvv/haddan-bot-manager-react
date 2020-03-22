import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "actions/usersActions";
import { getStorageSortBy, setStorageSortBy } from "utils/sort";

import Loader from "components/shared/loader/loader";
import Select from "components/shared/select/select";
import Input from "components/shared/input/input";
import Button from "components/shared/button/button";
import Alert from "components/shared/alert/alert";
import Profit from "./modules/profit";
import UsersList from "./modules/usersList";
import AddUserPopup from "./modules/addUserPopup";
import "./users.scss";

const UsersPage = () => {
  const dispatch = useDispatch();
  const { loading, users, error } = useSelector(({ users }) => users);
  const [sortBy, setSortBy] = useState(getStorageSortBy());
  const [filter, setFilter] = useState("");
  const [isAddUserPopupShowed, toggleShowingPopup] = useState(false);
  const sortList = { cash: "Баланс", name: "Имя" };

  const sortHandler = value => {
    setStorageSortBy(value);
    setSortBy(value);
  };

  const showPopup = () => toggleShowingPopup(true);
  const closePopup = () => toggleShowingPopup(false);

  useEffect(() => {
    dispatch(fetchUsers());
    // eslint-disable-next-line
  }, []);

  return (
    <div className="users">
      {error ? <Alert error={error} /> : null}
      <Loader loading={loading} />
      <Profit />
      <div className="users__filters">
        <Input
          value={filter}
          onChange={e => setFilter(e.target.value)}
          className="users__filter"
          label="Фильтр по имени/email"
          placeholder="Введите имя"
        />
        <Select
          value={sortBy}
          onChange={sortHandler}
          list={sortList}
          label="Сортировка"
        />
      </div>
      <UsersList users={users} sortBy={sortBy} filter={filter} />
      {isAddUserPopupShowed ? <AddUserPopup closePopup={closePopup} /> : null}
      <Button onClick={showPopup} className="btn-floating">
        +
      </Button>
    </div>
  );
};

export default UsersPage;
