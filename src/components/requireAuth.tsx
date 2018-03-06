import React from "react";

interface IRequireAuthProps {
  isAuthenticated: boolean;
}

class RequireAuth extends React.Component<IRequireAuthProps> {
  public render() {
    return this.props.isAuthenticated
      ? this.props.children
      : <div>Not Authorized</div>;
  }
}

export default RequireAuth;
