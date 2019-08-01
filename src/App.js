import React from "react";
import "./App.css";
import Description from "./components/Form";
import { Route } from "react-router-dom";
import RegistrationForm from "./components/Registration";
import Signin from "./components/Signin";
import SiteTabs from "./components/SiteTabs";

function App() {
  return (
    <div className="App">
      <div className="Form">
        <Route
          exact
          path="/"
          render={props => <RegistrationForm {...props} />}
        />
        <Route
          exact
          path="/description"
          render={props => <Description {...props} />}
        />
        <Route exact path="/signin" render={props => <Signin {...props} />} />
      </div>
    </div>
  );
}
export default App;
