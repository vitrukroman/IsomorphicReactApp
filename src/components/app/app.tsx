import React from "react";
import Header from "../../containers/header";
import Routes from "../routes";
import Navigation from "../navigation/navigation";

const styles = require("./app.css");

class App extends React.Component {
  public render() {
    return (
      <div className={styles.app}>
        <header><Header/></header>
        <aside>Aside 1</aside>
        <main><Routes/></main>
        <aside>Aside 2</aside>
        <footer>
          <Navigation useFor={Navigation.use.forFooter}/>
        </footer>
      </div>
    );
  }
}

export default App;
