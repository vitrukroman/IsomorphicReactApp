import React from "react";
import { Redirect } from "react-router";

interface IRequireAuthProps {
  isAuthenticated: boolean;
}

class RequireAuth extends React.Component<IRequireAuthProps> {
  public render() {
    return this.props.isAuthenticated
      ? this.props.children
      : <Redirect to="/" />;
  }
}

export default RequireAuth;
