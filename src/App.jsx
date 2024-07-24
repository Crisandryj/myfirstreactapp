import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Welcome from "./Greeting";
import Person from "./Person";
import React, { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Test title</h1>
      <Welcome></Welcome>
      <Person></Person>
      <svg>
        <circle cx="25" cy="75" r="20" stroke="green" strokeWidth="2" />
      </svg>
      <form>
        <input type="text" />
      </form>
    </>
  );
}

export default App;
