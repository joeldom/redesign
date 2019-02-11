//dependancies
import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.scss";

//data
import Words from "./comp/part/Words.js";

//components
import NavMenu from "./comp/part/Nav";

//route links
import Home from "./pages/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavMenu />

        <Switch>
          <Route exact path="/" component={Home} />
          {/* WORK Route */}
          {/*
          <Route exact path="/work/interface" component={Interface} />

          <this.PrivateRoute exact path="/new-case" component={NewCasePage} />
          */}
        </Switch>
        <Words />
        {/*<Footer />*/}
      </div>
    );
  }
}

export default App;
