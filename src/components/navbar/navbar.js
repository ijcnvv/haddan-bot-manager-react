import React, { Fragment, useContext } from "react";
import { NavLink } from "react-router-dom";
import CommonContext from "../../context/common/commonContext";
import "./navbar.scss";

const Navbar = () => {
  const { isAuth } = useContext(CommonContext);
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
