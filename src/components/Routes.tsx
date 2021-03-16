import React from "react";
import { Switch, Route } from "react-router-dom";

// Components
import QuizView from "../components/pages/QuizView";
import NoMatchView from "../components/pages/NoMatchView";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={QuizView} />
      <Route path="*" component={NoMatchView} />
    </Switch>
  );
};

export default Routes;
