import React from "react";
import "./App.css";
import { Description } from "./components/Form";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="Form">
        <Description />
        {/* <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} /> */}
        {/* <Route path="/Form" component={Form} /> */}
      </div>
    </div>
  );
}
export default App;
