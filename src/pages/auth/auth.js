import React, { useState, useContext, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import Input from "../../components/shared/input/input";
import Loader from "../../components/shared/loader/loader";
import CommonContext from "../../context/common/commonContext";
import "./auth.scss";

const AuthPage = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { getAuthByEmailAndPassword, isAuth, loading } = useContext(
    CommonContext
  );
  const location = useLocation();
  const history = useHistory();
  const from = location.state && location.state.from.pathname;

  const onFormSubmit = e => {
    e.preventDefault();
    getAuthByEmailAndPassword({ email, password });
  };

  useEffect(() => {
    if (isAuth) {
      history.push(from ? from : "/users");
    }
  }, [isAuth, from, history]);

  return (
    <div className="card auth-card">
      <Loader loading={loading} />
      {from && loading ? null : (
        <div className="card-content">
          <div className="card-title">Авторизация</div>
          <form className="auth__form">
            <Input
              type="email"
              label="Email"
              placeholder="Введите email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <Input
              type="password"
              label="Пароль"
              placeholder="Введите пароль"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="waves-effect waves-light btn grey darken-4"
              onClick={onFormSubmit}
            >
              <i className="material-icons left">lock</i>
              Вход
            </button>
          </form>
          <div className="red-text text-lighten-2 card__error"></div>
        </div>
      )}
    </div>
  );
};

export default AuthPage;
