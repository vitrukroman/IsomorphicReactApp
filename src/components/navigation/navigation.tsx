import React from "react";
import {Link} from "react-router-dom";

const styles = require("./navigation.css");
const menuIcon = require("./menuIcon.svg");

enum EUsage {
  forHeader = "forHeader",
  forFooter = "forFooter",
}

interface INavigationProps {
  useFor: EUsage;
}

interface INavigationState {
  isOpened: boolean;
}

class Navigation extends React.Component<INavigationProps, INavigationState> {
  public static use = EUsage;

  public constructor(props: INavigationProps) {
    super(props);

    this.state = {
      isOpened: false,
    };
  }

  public render() {
    return (
      <nav className={[
        styles.nav,
        styles[this.props.useFor],
        this.state.isOpened ? styles.menuOpened : "",
      ].join(" ")}>
        <img
          src={menuIcon}
          className={[
            styles.menuButton,
            styles[this.props.useFor],
          ].join(" ")}
          onClick={() => this.toggleMenu()}
        />
        {this.linkTo("Home", "/")}
        {this.linkTo("Users", "/users")}
        {this.linkTo("Admins", "/admins")}
      </nav>
    );
  }

  private linkTo(name: string, path: string) {
    return (
      <Link
        className={[
          styles.menuItem,
          styles[this.props.useFor],
          this.state.isOpened ? styles.menuOpened : "",
        ].join(" ")}
        to={path}
        onClick={() => this.closeMenu()}
      >{name}</Link>
    );
  }

  private toggleMenu() {
    this.setState((prevState: INavigationState) => ({
      isOpened: !prevState.isOpened,
    }));
  }


  private closeMenu() {
    this.setState({
      isOpened: false,
    });
  }
}

export default Navigation;
