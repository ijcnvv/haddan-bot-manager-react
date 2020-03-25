import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import Input from "components/shared/input/input";
import Button from "components/shared/button/button";
import Loader from "components/shared/loader/loader";
import { fetchAuthByEmailAndPassword } from "actions/commonActions";
import "./auth.scss";

const AuthPage = () => {
  const { register, handleSubmit, errors } = useForm();
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const { loading, isAuth } = useSelector(({ common }) => common);
  const from = location.state && location.state.from.pathname;
  const isFormHidden = isAuth || (from && loading);

  const onFormSubmit = ({ email, password }) => {
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
          <form className="auth__form" onSubmit={handleSubmit(onFormSubmit)}>
            <Input
              type="email"
              label="Email"
              placeholder="Введите email"
              name="email"
              register={register({ required: "Email is required" })}
              error={errors.email}
            />
            <Input
              type="password"
              name="password"
              label="Пароль"
              placeholder="Введите пароль"
              register={register({ required: "Password is required" })}
              error={errors.password}
            />
            <Button
              type="submit"
              className="waves-effect waves-light btn grey darken-4"
            >
              <i className="material-icons left">lock</i>
              Вход
            </Button>
          </form>
          <div className="red-text text-lighten-2 card__error"></div>
        </div>
      )}
    </div>
  );
};

export default AuthPage;
