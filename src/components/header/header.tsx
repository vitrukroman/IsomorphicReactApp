import React from "react";
import config from "../../config";
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
      ? <a className={styles.login} href={`${config.API_URL}logout`}>Logout</a>
      : <a className={styles.login} href={`${config.API_URL}auth/google`}>Login</a>;

    return (
      <div className={styles.header}>
        <Navigation useFor={Navigation.use.forHeader}/>
        {authButton}
      </div>
    );
  }
}

export default Header;
