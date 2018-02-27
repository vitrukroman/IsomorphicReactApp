import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/home";
import UsersList from "./containers/usersList";

export default () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/hi" render={() => <span>hid</span>} />
      <Route path="/users" component={UsersList} />
    </div>
  );
};
