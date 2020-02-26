import React, { useEffect, useContext } from "react";
import UsersContext from "../../../context/users/usersContext";
import Loader from "../../../components/shared/loader/loader";
import Profit from "./profit";

const UsersPage = () => {
  const { getUsers, loading, users, profit } = useContext(UsersContext);

  // eslint-disable-next-line
  useEffect(() => {
    getUsers();
  }, []);

  const isProfit = !!Object.keys(profit).length;

  const profitTitle = isProfit
    ? `Активных пользователей ${profit.count}, 
    доход ${parseInt(profit.profit, 10)} руб/день`
    : "";

  return (
    <div className="users">
      <Loader loading={loading} />
      <Profit data={profit} />
    </div>
  );
};

export default UsersPage;
