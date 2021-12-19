import React from 'react';
import './info.scss';

const list = [
  'Выбор класса персонажа',
  'Перемещение по ключевым локациям',
  'Автонападение на персонажей',
  'Фарм леса',
  'Фарм поляны',
  'Фарм шахты',
  'Медитация в храме',
  'Авточарки в кузне',
  'Варка элей в химке',
  'Игра с тараканами',
  'Фарм флорентов',
  'Бои с репоботами',
  'Бои с драконами',
  'Кач в цу и на заслонах',
  'Кач в лабе (с духами играет)',
  'Фарм сундуков в лабиринте',
  'Употребление всплесков, бодры и рунных',
  'Автоматический подбор дропа с возможностью исключения',
  'Быстрые эликсиры',
  'Лечение травм лтт и артами',
  'Настройка детального боя по ударам',
  'Перемещение замка',
  'Настройка расписания всех действий последовательно и по времени',
  'Отправка капч в телеграм и ответ на них',
  'Автоматическое распознование и ответ на капчи за отдельную плату',
  'Работает как на основе, так и на инкорнах',
  'Техническая поддержка и периодические обновления',
];

const listItem = (text, index) => (
  <li key={index}>
    <span role="img" aria-label="img">
      📌
    </span>
    &nbsp;{text}
  </li>
);

const InfoPage = () => (
  <div className="info-page">
    <a
      href="https://chrome.google.com/webstore/detail/haddan-extension/nnjejijoopnfgolmbmajjidnjmknilhj"
      target="_blank"
      rel="noopener noreferrer"
      className="info-page__link"
    >
      <img src="/images/icon_192.png" alt="" className="info-page__link-image" />
      <div className="info-page__link-label">
        <div>Haddan extension</div>
        <div className="info-page__link-sub-label">Ссылка на приложение</div>
      </div>
    </a>
    <h3>Функционал</h3>
    <ul>{list.map(listItem)}</ul>
  </div>
);

export default InfoPage;
