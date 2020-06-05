import React from "react";

const ScoreNames = (props) => {
  return (
    <div className="score-name">
      <h3>{props.scoreName.n.toUpperCase()}</h3>
    </div>
  );
};

export default ScoreNames;
