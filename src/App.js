import React, { useEffect, useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "./hoc/layout";
import PrivateRoute from "./hoc/privateRoute";
import InfoPage from "./pages/info/info";
import UpdatesPage from "./pages/updates/updates";
import AuthPage from "./pages/auth/auth";
import UsersPage from "./pages/users/users";
import UserPage from "./pages/user/user";
import Logout from "./components/logout/logout";
import CommonContext from "./context/common/commonContext";
import "./App.scss";

const App = () => {
  // const { isAuth, token, getAuthByToken } = useContext(CommonContext);

  // useEffect(() => {
  //   if (!isAuth && token) {
  //     getAuthByToken();
  //   }
  //   // eslint-disable-next-line
  // }, []);

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
