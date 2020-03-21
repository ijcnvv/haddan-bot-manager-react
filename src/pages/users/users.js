import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../actions";
import { getStorageSortBy, setStorageSortBy } from "../../utils/sort";

import Loader from "../../components/shared/loader/loader";
import Select from "../../components/shared/select/select";
import Input from "../../components/shared/input/input";
import Profit from "./modules/profit";
import UsersList from "./modules/usersList";
import "./users.scss";

const UsersPage = () => {
  const dispatch = useDispatch();
  const { loading, users } = useSelector(({ users }) => users);
  const [sortBy, setSortBy] = useState(getStorageSortBy());
  const [filter, setFilter] = useState("");
  const sortList = { cash: "Баланс", name: "Имя" };

  const sortHandler = value => {
    setStorageSortBy(value);
    setSortBy(value);
  };

  useEffect(() => {
    dispatch(fetchUsers());
    // eslint-disable-next-line
  }, []);

  return (
    <div className="users">
      <Loader loading={loading} />
      <Profit />
      <div className="users__filters">
        <Input
          value={filter}
          onChange={e => setFilter(e.target.value)}
          classes="users__filter"
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
    </div>
  );
};

export default UsersPage;
