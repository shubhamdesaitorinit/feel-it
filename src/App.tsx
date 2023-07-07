import React from "react";
import logo from "./logo.svg";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <div>
      <img src={logo} alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React with
      </a>
      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        Go Home
      </button>
    </div>
  );
}

export default App;
