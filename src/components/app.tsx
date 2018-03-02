import React from "react";
import Header from "../containers/header";
import Routes from "../routes";

class App extends React.Component {
  public render() {
    return (
      <div>
        <Header />
        <Routes />
      </div>
    );
  }
}

export default App;
