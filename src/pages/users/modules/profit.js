import React, { Fragment } from "react";

const Profit = ({ data }) => {
  const isProfit = !!Object.keys(data).length;

  const profitTitle = isProfit
    ? `Активных пользователей ${data.count}, 
    доход ${parseInt(data.profit, 10)} руб/день`
    : "";

  return <Fragment>{isProfit ? <p>{profitTitle}</p> : null}</Fragment>;
};

export default Profit;
