import React from "react";
import {Route, Switch} from "react-router-dom";
import AdminsList from "../containers/adminsList";
import UsersList from "../containers/usersList";
import Home from "./home";
import NotFoundPage from "./notFound";

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
