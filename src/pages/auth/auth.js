import React from "react";
import "./auth.scss";

const AuthPage = () => {
  return (
    <div className="card auth-card">
      <div className="card-content">
        <div className="card-title">Авторизация</div>
        <form className="auth__form">
          <div className="input-field auth__field">
            <input
              placeholder="Введите email"
              id="email"
              type="email"
              className="validate"
              required
            />
            <label htmlFor="email" className="active">
              Email
            </label>
          </div>
          <div className="input-field auth__field">
            <input
              placeholder="Введите пароль"
              id="password"
              type="password"
              className="validate"
              required
            />
            <label htmlFor="password" className="active">
              Пароль
            </label>
          </div>
          <button
            type="submit"
            className="waves-effect waves-light btn grey darken-4"
          >
            <i className="material-icons left">lock</i>
            Вход
          </button>
        </form>
        <div className="red-text text-lighten-2 card__error"></div>
      </div>
    </div>
  );
};

export default AuthPage;
