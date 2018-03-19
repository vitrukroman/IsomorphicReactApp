import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "./home";
import NotFoundPage from "./notFound";
import AdminsList from "../containers/adminsList";
import UsersList from "../containers/usersList";

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/hi" render={() => <span>hid</span>}/>
      <Route path="/users" component={UsersList}/>
      <Route path="/admins" component={AdminsList}/>
      <Route component={NotFoundPage}/>
    </Switch>
  );
};
