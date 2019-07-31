import React from "react";
import "./App.css";
import { Description } from "./components/Form";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="Form">
        <Description />
        <Route path="" />
        <Route path="" />
      </div>
    </div>
  );
}
export default App;
