import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";

const navbar = props => (
  <header className="header">
    <nav className="grey darken-4">
      <div className="nav-wrapper container">
        <ul className="header__list">
          <li className="header__list-item">
            <NavLink to="/" className="header__link" exact>
              Главная
            </NavLink>
          </li>
          <li className="header__list-item">
            <NavLink to="/updates" className="header__link">
              Обновления
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default navbar;
