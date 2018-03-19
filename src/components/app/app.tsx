import React from "react";
import Header from "../../containers/header";
import Navigation from "../navigation/navigation";
import Routes from "../routes";

const styles = require("./app.css");

class App extends React.Component {
  public render() {
    return (
      <div className={styles.app}>
        <header className={styles.header}><Header/></header>
        <aside className={styles.aside}/>
        <main className={styles.main}><Routes/></main>
        <aside className={styles.aside}/>
        <footer className={styles.footer}>
          <Navigation useFor={Navigation.use.forFooter}/>
        </footer>
      </div>
    );
  }
}

export default App;
