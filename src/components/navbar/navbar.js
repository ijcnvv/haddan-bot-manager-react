import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./navbar.scss";

const Navbar = () => {
  const [open, toggleOpen] = useState(false);
  const { isAuth } = useSelector(({ common }) => common);
  const commonLinks = [
    { to: "/", label: "Главная", exact: true },
    { to: "/price", label: "Стоимость", exact: false },
    { to: "/updates", label: "Обновления", exact: false },
  ];

  const menuClickHandler = () => {
    toggleOpen(true);
  };

  const navClickHandler = (e) => {
    if (e.target !== e.currentTarget) return;
    toggleOpen(false);
  };

  const linksRendered = commonLinks.map(({ to, label, exact }, index) => (
    <li className="header__list-item" key={index}>
      <NavLink
        to={to}
        className="header__link"
        exact={exact}
        onClick={navClickHandler}
      >
        {label}
      </NavLink>
    </li>
  ));

  const dependedLinks = isAuth ? (
    <Fragment>
      <li className="header__list-item">
        <NavLink to="/users" className="header__link" onClick={navClickHandler}>
          Пользователи
        </NavLink>
      </li>
      <li className="header__list-item right logout">
        <NavLink
          to="/logout"
          className="header__link"
          onClick={navClickHandler}
        >
          <i className="material-icons">exit_to_app</i>
        </NavLink>
      </li>
    </Fragment>
  ) : (
    <li className="header__list-item right">
      <NavLink to="/auth" className="header__link" onClick={navClickHandler}>
        Вход
      </NavLink>
    </li>
  );

  const navClassName = ["header__nav"];

  if (open) {
    navClassName.push("open");
  }

  return (
    <header className="header">
      <nav className="grey darken-4">
        <div className="container">
          <div className="header__menu" onClick={menuClickHandler}>
            <i className="material-icons">menu</i>
          </div>
          <div className={navClassName.join(" ")} onClick={navClickHandler}>
            <div className="nav-wrapper">
              <ul className="header__list">
                {linksRendered}
                {dependedLinks}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
