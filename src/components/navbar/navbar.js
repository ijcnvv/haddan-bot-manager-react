import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./navbar.scss";

const Navbar = () => {
  const { isAuth } = useSelector(({ common }) => common);
  const commonLinks = [
    { to: "/", label: "Главная", exact: true },
    { to: "/updates", label: "Обновления", exact: false }
  ];

  const linksRendered = commonLinks.map(({ to, label, exact }, index) => (
    <li className="header__list-item" key={index}>
      <NavLink to={to} className="header__link" exact={exact}>
        {label}
      </NavLink>
    </li>
  ));

  const dependedLinks = isAuth ? (
    <Fragment>
      <li className="header__list-item">
        <NavLink to="/users" className="header__link">
          Пользователи
        </NavLink>
      </li>
      <li className="header__list-item right logout">
        <NavLink to="/logout" className="header__link">
          <i className="material-icons">exit_to_app</i>
        </NavLink>
      </li>
    </Fragment>
  ) : (
    <li className="header__list-item right">
      <NavLink to="/auth" className="header__link">
        Вход
      </NavLink>
    </li>
  );

  return (
    <header className="header">
      <nav className="grey darken-4">
        <div className="nav-wrapper container">
          <ul className="header__list">
            {linksRendered}
            {dependedLinks}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
