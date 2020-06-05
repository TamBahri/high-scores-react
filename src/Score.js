import React from "react";

const Score = (props) => {
  return (
    <div className="score">
      <h3>{props.score.s}</h3>
    </div>
  );
};

export default Score;
