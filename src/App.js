import React from "react";
import "./css/Main.css";
import Login from "./pages/Login";

import { Switch, Route } from "react-router-dom";

import Main from "./pages/index";
import ChoosePlan from "./pages/ChoosePlan";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/choose-plan" component={ChoosePlan} />
      </Switch>
    </div>
  );
}

export default App;
