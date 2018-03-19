import React from "react";
import Auth from "../../types/auth";
import Navigation from "../navigation/navigation";

const styles = require("./header.css");

interface IHeaderProps {
  auth: Auth;
  fetchCurrentUser: () => void;
}

class Header extends React.Component<IHeaderProps> {
  constructor(props: IHeaderProps) {
    super(props);

    this.props.fetchCurrentUser();
  }

  public render() {

    const authButton = this.props.auth.user
      ? <a className={styles.login} href="/api/logout">Logout</a>
      : <a className={styles.login} href="/api/auth/google">Login</a>;

    return (
      <div className={styles.header}>
        <Navigation useFor={Navigation.use.forHeader}/>
        {authButton}
      </div>
    );
  }
}

export default Header;
