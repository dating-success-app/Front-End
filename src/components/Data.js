import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.scss";

const Data = () => {
  //not passing any props bc i am using function components
  const [bio, setBio] = useState();

  useEffect(() => {
    axios
      .post(
        `https://https://dating-success.herokuapp.com/something`, {}
      )
      .then(response => {
        setBio(response.data);

        console.log(response.data);
      });
  }, []);

  return (
    <div className="App">
      <h2>{bio}</h2>
    </div>
  );
};
export default Data;
