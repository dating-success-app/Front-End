import React, { useState } from "react";
import { Form, Button, Header, Image } from "semantic-ui-react";
import "../App.css";
import axios from "axios";
import heart from "../images/heart.jpg";

const Description = props => {
  const [input, setInput] = useState({
    description: ""
  });
  const [shortDescription, setShortDescription] = useState(false);
  const [score, setScore] = useState(null);

  const inputHandler = e => {
    console.log("target name", e.target.name);
    console.log("value", e.target.value);
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const token = localStorage.getItem('token');

  const submitHandler = e => {
    e.preventDefault();
    if (input.description.length < 10) {
      console.log("enter more info!");
      setShortDescription(true);
    } else {
      axios
      .post(`https://dating-success.herokuapp.com/api/description`, input, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`
        }
      })
        .then(response => {
          setInput(response.data);
          // localStorage.setItem("token", token);
          console.log("Page is working", response.data);
          setScore(response.data.score);
        })
        .catch(error => {
          console.log("Page is down", error);
        });
        // props.history.push('/greet/Luke')
        // history.push("/score")

      setInput({
        description: ""
      });
    }
  };
  console.log("props", props);
  console.log("input", input);
  return (
    <Form onSubmit={submitHandler}>
      <div className="header">
        <Header as="h2">
          <Image circular src={heart} style={{ width: "75px" }} /> Give us a 5
          star description about yourself!
        </Header>
      </div>
      <div className="description">
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
  );
};
export default Description;