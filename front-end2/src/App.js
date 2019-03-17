import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App--Aside" />
        <div className="App--Form">
          <div className="PageSwitcher">
            <a href="#" className="PageSwitcher__Item ">
              Sign In
            </a>
            <a
              href="#"
              className="PageSwitcher__Item PageSwitcher__Item--Active"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
