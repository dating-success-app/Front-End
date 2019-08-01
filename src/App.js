import React from "react";
import "./App.css";
import Description from "./components/Form";
import { Route } from "react-router-dom";
import RegistrationForm from './components/Registration';
import Signin from './components/Signin';

function App() {
  return (
    <div className="App">
      <div className="Form">
        {/* <Description /> */}
        {/* <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} /> */}
        {/* <Route path="/Form" component={Form} /> */}
        <Route exact path="/register" render={props => <RegistrationForm {...props} />} />
        <Route exact path="/description" render={props => <Description {...props} />} />
        <Route exact path="/login" render={props => <Signin {...props} />} />
      </div>
    </div>
  );
}
export default App;
