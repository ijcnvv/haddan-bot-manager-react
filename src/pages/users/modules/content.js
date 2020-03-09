import React, { useEffect, useContext, useState } from "react";
import UsersContext from "../../../context/users/usersContext";
import Loader from "../../../components/shared/loader/loader";
import Select from "../../../components/shared/select/select";
import Profit from "./profit";
import UsersList from "./usersList";
import Input from "../../../components/shared/input/input";
import "../users.scss";

const UsersContent = () => {
  const defaultSortBy = window.localStorage.getItem("sortBy") || "name";
  const { getUsers, loading, users, profit } = useContext(UsersContext);
  const [sortBy, setSortBy] = useState(defaultSortBy);
  const [filter, setFilter] = useState("");
  const sortList = { cash: "Баланс", name: "Имя" };

  const sortHandler = value => {
    window.localStorage.setItem("sortBy", value);
    setSortBy(value);
  };

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="users">
      <Loader loading={loading} />
      <Profit data={profit} />
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

export default UsersContent;
