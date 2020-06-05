import React from "react";
import ScoreNames from "./ScoreNames";
import Score from "./Score";

const Card = ({ name, scores, descOrder }) => {
  const sortedScores = descOrder
    ? [...scores].sort((a, b) => (a.s < b.s ? -1 : 1))
    : [...scores].sort((a, b) => (a.s > b.s ? -1 : 1));
  console.log(scores);
  return (
    <div>
      <div className="card-country">
        <h2>HIGH SCORES: {name}</h2>
        <div className="card-details">
          {sortedScores.map((score, index) => (
            <div key={index} className="card-scores">
              <ScoreNames scoreName={score} />
              <Score score={score} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
