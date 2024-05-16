import React from "react";
import { HashRouter as Router, Switch, Route, useHistory, Link, Redirect } from "react-router-dom";
import Detail from "./Detail";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const history = useHistory();
  const handleClick = () => history.push("/detail?page=1");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <button className="button" onClick={handleClick}>
          点我去详情页
        </button>
      </header>
    </div>
  );
}

export default App;
