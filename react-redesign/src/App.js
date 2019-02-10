import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "./pages/Home";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<Nav />*/}
        <Switch>
          <Route exact path="/" component={Home} />
          {/* WORK Route */}
          {/*
          <Route exact path="/work/interface" component={Interface} />

          <this.PrivateRoute exact path="/new-case" component={NewCasePage} />
          */}
        </Switch>
        {/*<Footer />*/}
      </div>
    );
  }
}

export default App;
