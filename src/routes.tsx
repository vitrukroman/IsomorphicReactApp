import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home";
import NotFoundPage from "./components/notFound";
import UsersList from "./containers/usersList";

export default () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/hi" render={() => <span>hid</span>} />
        <Route path="/users" component={UsersList} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
};
