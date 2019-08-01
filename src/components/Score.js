import React, { useState, useEffect } from "react";
import axios from "axios";

const Score = () => {
  const [score, setScore] = useState(0);

  useEffect(() => {
    axios
      .get(`https://dating-success.herokuapp.com/api/description`, {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo4LCJ1c2VybmFtZSI6ImIiLCJpYXQiOjE1NjQ2MDYzNTIsImV4cCI6MTU2NDYyNDM1Mn0.wqcwl9441kUjy0V4-c-Un3b6KHo7sVj5yxjBQV7hEgw"
        }
      })
      .then(response => {
        console.log("getting data", response.data);
        setScore(response.data.score);
      })
      .catch(error => {
        console.log("Page is down", error);
      });
  });
  console.log("my score", score);
  return <div>{score}</div>;
};

export default Score;
