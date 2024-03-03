import React from "react";
import logo from "./logo.svg";
import "./App.css";
import GlobalStyle from "./styles/global";

function App() {
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
        <div style={{ fontSize: "10rem" }}>안녕하세요</div>
      </header>
    </div>
  );
}

export default App;
