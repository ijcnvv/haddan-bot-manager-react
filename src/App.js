import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/layout";
import InfoPage from "./pages/info/info";
import UpdatesPage from "./pages/updates/updates";
import "./App.scss";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={InfoPage} />
        <Route path="/updates" component={UpdatesPage} />
      </Switch>
    </Layout>
  );
}

export default App;
