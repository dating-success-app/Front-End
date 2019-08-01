import React, { useState } from "react";
import { Form, Button, Header, Image } from "semantic-ui-react";
import "../App.css";
import axios from "axios";
import logo from "../images/logo.png";
import { Route } from "react-router-dom";

const Description = props => {
  const [input, setInput] = useState({
    description: ""
  });
  const [shortDescription, setShortDescription] = useState(false);
  const [score, setScore] = useState(0);

  const inputHandler = e => {
    console.log("target name", e.target.name);
    console.log("value", e.target.value);
    setInput({ ...input, [e.target.name]: e.target.value });
  };

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
              "eyJzdWJqZWN0IjoxMSwidXNlcm5hbWUiOiJkb2dzIiwiaWF0IjoxNTY0NjgxODgwLCJleHAiOjE1NjQ2OTk4ODB9.6W-w2bbUB04KQ_36DRxJf4p_uQKs5IZERxcE1-nw9KE"
          }
        })
        .then(response => {
          setInput(response.data);
          localStorage.setItem("token", response.data.token);
          console.log("Page is working", response.data);
          setScore(response.data.score);
        })
        .catch(error => {
          console.log("Page is down", error);
        });

      setInput({
        description: ""
      });
    }
  };
  console.log("props", props);
  console.log("input", input);
  console.log("my score", score);
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
      <div className="score">Congrats! Your score is: {score}</div>
    </div>
  );
};
export default Description;
