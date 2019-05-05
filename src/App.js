import React from "react";
import { Route, Switch } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={DashboardPage} />
    </Switch>
  );
}

export default App;
