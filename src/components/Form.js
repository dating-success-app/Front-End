import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import "../App.css";
import axios from "axios";

export const Description = props => {
  const [input, setInput] = useState({
    description: ""
  });

  const inputHandler = e => {
    console.log("target name", e.target.name);
    console.log("value", e.target.value);
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = e => {
    e.preventDefault();
    axios
      .post(
        `https://dating-success.herokuapp.com/api/auth/description`,
        input.description
      )
      .then(response => {
        setInput(response.data);

        console.log("Page is working", response.data);
      })
      .catch(error => {
        console.log("Page is down", error);
      });

    setInput({
      description: ""
    });
  };
  console.log("props", props);
  console.log("input", input);
  return (
    <Form onSubmit={submitHandler}>
      <div className="header">
        <h2>Give us a 5 star description about yourself!</h2>
      </div>
      <div>
        <label htmlFor="description">
          description:{" "}
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
  );
};
