import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchAuthByToken } from "./actions/commonActions";
import Layout from "./hoc/layout";
import PrivateRoute from "./hoc/privateRoute";
import InfoPage from "./pages/info/info";
import UpdatesPage from "./pages/updates/updates";
import AuthPage from "./pages/auth/auth";
import UsersPage from "./pages/users/users";
import UserPage from "./pages/user/user";
import Logout from "./components/logout/logout";
import "./App.scss";

const App = () => {
  const { isAuth, token } = useSelector(({ common }) => common);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAuth && token) {
      dispatch(fetchAuthByToken(token));
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Layout>
      <Switch>
        <PrivateRoute path="/users/:id" component={UserPage} />
        <PrivateRoute path="/users" exact component={UsersPage} />
        <Route path="/updates" component={UpdatesPage} />
        <Route path="/logout" component={Logout} />
        <Route path="/auth" component={AuthPage} />
        <Route path="/" exact component={InfoPage} />
        <Redirect to="/" />
      </Switch>
    </Layout>
  );
};

export default App;
