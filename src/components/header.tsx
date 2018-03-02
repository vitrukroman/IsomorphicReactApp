import React from "react";
import { Link } from "react-router-dom";
import IUser from "../types/user";

interface IHeaderProps {
  auth: IUser | null;
  fetchCurrentUser: () => void;
}
class Header extends React.Component<IHeaderProps> {
  constructor(props: IHeaderProps) {
    super(props);

    this.props.fetchCurrentUser();
  }

  public render() {

    const authButton = this.props.auth
      ? <a href="/api/logout">Logout</a>
      : <a href="/api/auth/google">Login</a>;

    return (
      <div>
        <div>
          <Link to="/">React SSR</Link>
          <Link to="/users">Users</Link>
          <Link to="/admins">Admins</Link>
          {authButton}
        </div>
      </div >
    );
  }
}

export default Header;
