import React, { useEffect, useContext, useState } from "react";
import UsersContext from "../../../context/users/usersContext";
import Loader from "../../../components/shared/loader/loader";
import Select from "../../../components/shared/select/select";
import Profit from "./profit";

const UsersPage = () => {
  const { getUsers, loading, users, profit } = useContext(UsersContext);
  const [sortBy, setSortBy] = useState("name");

  const sortList = { cash: "Баланс", name: "Имя" };

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="users">
      <Loader loading={loading} />
      <Profit data={profit} />
      <Select
        value={sortBy}
        onChange={setSortBy}
        list={sortList}
        label="Сортировка"
      />
    </div>
  );
};

export default UsersPage;
