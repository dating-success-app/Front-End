import React, { useState } from "react";
import { Form, Button, Header, Image } from "semantic-ui-react";
import "../App.css";
import axios from "axios";
import logo from "../images/logo.png";
import Score from "./Score";
import { Route } from "react-router-dom";

const Description = props => {
  const [input, setInput] = useState({
    description: ""
  });
  const [shortDescription, setShortDescription] = useState(false);

  const inputHandler = e => {
    console.log("target name", e.target.name);
    console.log("value", e.target.value);
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  //   const token =
  // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoyLCJ1c2VybmFtZSI6IkFsZXgiLCJpYXQiOjE1NjQ1OTkxNjgsImV4cCI6MTU2NDYxNzE2OH0.L1QrEiCubXJTYQD-D2UyJ1n7gROqj8UGRbAGFzusgsU";

  const submitHandler = e => {
    e.preventDefault();
    if (input.description.length < 10) {
      console.log("enter more info!");
      setShortDescription(true);
    } else {
      console.log("my input", input);
      axios
        .post(`https://dating-success.herokuapp.com/api/description`, input, {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo4LCJ1c2VybmFtZSI6ImIiLCJpYXQiOjE1NjQ2MDYzNTIsImV4cCI6MTU2NDYyNDM1Mn0.wqcwl9441kUjy0V4-c-Un3b6KHo7sVj5yxjBQV7hEgw"
          }
        })
        .then(response => {
          setInput(response.data);
          localStorage.setItem("token", response.data.token);
          console.log("Page is working", response.data);
        })
        .catch(error => {
          console.log("Page is down", error);
        });
      //   props.history.push("/score");

      setInput({
        description: ""
      });
    }
  };
  console.log("props", props);
  console.log("input", input);
  return (
    <div>
      <Form onSubmit={submitHandler}>
        <div className="logo">
          <Image src={logo} style={{ width: "175px" }} />
        </div>
        <div className="description">
          <div className="header">
            <Header as="h2" /> Give us a 5 star description about yourself!
          </div>
          <label htmlFor="description">
            {" "}
            <div>
              {shortDescription && (
                <div className="short">
                  <p>Your description is too short!</p>
                  <p>Try adding some more information about yourself!</p>
                </div>
              )}
            </div>
            <input
              type="text"
              value={input.description}
              onChange={inputHandler}
              placeholder="   Interests, hobbies, favorite TV show..."
              name="description"
            />
          </label>
        </div>
        <div className="button">
          <Button type="submit">Submit!</Button>
        </div>
      </Form>

      <Route path="/score" render={props => <Score {...props} />} />
    </div>
  );
};
export default Description;
