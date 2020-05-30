import React from "react";

const PricePage = () => {
  return (
    <>
      <div className="section">
        <h3>Стоимость</h3>
        <p>
          Подключение&nbsp;
          <strong>500 руб.</strong>, которые сразу поступают на баланс.
        </p>
        <p>
          Стоимость подписки&nbsp;
          <strong>10 руб/день</strong>
        </p>
        <p>
          Стоимость автоматического распознавания капч&nbsp;
          <strong>$5 за 1000 запросов</strong>
        </p>
      </div>
      <div className="section">
        <h3>Скидки</h3>
        <p>
          Оплата за полгода вперед и более, а также подключение каждого мульта
          добавляет скидку&nbsp;
          <strong>10%</strong> на ежедневное списание, но не более 50% суммарно.
        </p>
      </div>
      <div className="section">
        <h3>Акции</h3>
        <p>
          <strong>Кэшбэк 10%</strong> - подключи друга к боту и получай 10% на
          свой счет за его пополнение баланса.
        </p>
      </div>
    </>
  );
};

export default PricePage;
