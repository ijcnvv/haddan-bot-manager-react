import React, { useEffect, useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/layout/layout";

import InfoPage from "./pages/info/info";
import UpdatesPage from "./pages/updates/updates";
import AuthPage from "./pages/auth/auth";
import UsersPage from "./pages/users/users";
import Logout from "./components/logout/logout";

import CommonContext from "./context/common/commonContext";
import "./App.scss";

const App = () => {
  const { isAuth, token, getAuthByToken } = useContext(CommonContext);
  const routes = isAuth ? (
    <Switch>
      <Route path="/updates" component={UpdatesPage} />
      <Route path="/users" component={UsersPage} />
      <Route path="/logout" component={Logout} />
      <Route path="/" exact component={InfoPage} />
      <Redirect to="/" />
    </Switch>
  ) : (
    <Switch>
      <Route path="/updates" component={UpdatesPage} />
      <Route path="/auth" component={AuthPage} />
      <Route path="/" exact component={InfoPage} />
      <Redirect to="/" />
    </Switch>
  );

  useEffect(() => {
    if (!isAuth && token) {
      getAuthByToken();
    }
    // eslint-disable-next-line
  }, []);

  return <Layout>{routes}</Layout>;
};

export default App;
