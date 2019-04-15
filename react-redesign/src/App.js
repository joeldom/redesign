//dependancies
import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.scss";

//components
import NavMenu from "./comp/part/Nav";

//route links
import Home from "./pages/Home";
import About from "./pages/About";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavMenu />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
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
