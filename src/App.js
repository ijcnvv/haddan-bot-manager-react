import React, { useEffect, useContext } from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/layout";
import InfoPage from "./pages/info/info";
import UpdatesPage from "./pages/updates/updates";
import { CommonContext } from "./context/common/commonContext";
import "./App.scss";

const App = () => {
  const { isAuth, token, getAuthByToken } = useContext(CommonContext);

  useEffect(() => {
    if (!isAuth && token) {
      getAuthByToken();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={InfoPage} />
        <Route path="/updates" component={UpdatesPage} />
      </Switch>
    </Layout>
  );
};

export default App;
