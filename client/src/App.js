import React, { Component } from "react";
import axios from "axios";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import "./App.css";

class App extends Component {

  componentDidMount() {
    console.log('consoleDidMount did run');
    axios.get("saved")
      .then(response => {
        console.log(response);
      })
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Jumbotron />
        <p className="App-intro">
          ATTEMPT #2 - Hello World, To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
