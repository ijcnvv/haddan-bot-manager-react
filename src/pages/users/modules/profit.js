import React, { Fragment } from "react";
import { useSelector } from "react-redux";

const Profit = () => {
  const { profit } = useSelector(({ users }) => users);
  const isProfit = !!Object.keys(profit).length;

  const profitTitle = isProfit
    ? `Активных пользователей ${profit.count}, 
    доход ${parseInt(profit.profit, 10)} руб/день`
    : "";

  return <Fragment>{isProfit ? <p>{profitTitle}</p> : null}</Fragment>;
};

export default Profit;
