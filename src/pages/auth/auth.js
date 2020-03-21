import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import Input from "../../components/shared/input/input";
import Loader from "../../components/shared/loader/loader";
import { fetchAuthByEmailAndPassword } from "../../actions";
import "./auth.scss";

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const { loading, isAuth } = useSelector(({ common }) => common);
  const from = location.state && location.state.from.pathname;
  const isFormHidden = isAuth || (from && loading);

  const onFormSubmit = e => {
    e.preventDefault();
    dispatch(fetchAuthByEmailAndPassword({ email, password }));
  };

  useEffect(() => {
    if (isAuth) history.push(from ? from : "/users");
  }, [isAuth, from, history]);

  return (
    <div className="card auth-card">
      <Loader loading={loading} />
      {isFormHidden ? null : (
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
