import React, { useState, useEffect } from "react";

const Score = () => {
  const [score, setScore] = useState(0);

  //   useEffect(() => {
  //     axios
  //       .get(`https://dating-success.herokuapp.com/api/description`)
  //       .then(response => {
  //         setScore(response.data);
  //       })
  //       .catch(error => {
  //         console.log("Page is down", error);
  //       });
  //   });

  return <div>{score}</div>;
};

export default Score;
