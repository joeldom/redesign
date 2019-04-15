import React, { Component } from "react";
import logo from "../img/logo.svg";

//data
import Words from "../comp/part/Words.js";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <header className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <p>
            Edit <code>src/Home.jsx</code> and save to reload.
          </p>
          <a
            className="Home-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Words />
      </div>
    );
  }
}

export default Home;
