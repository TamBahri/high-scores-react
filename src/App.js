import React, { useState } from "react";
import "./App.css";
import allCountryScores from "./dataCountry/allCountryScores";
import Card from "./Card";

function App() {
  allCountryScores.sort((a, b) => (a.name > b.name ? 1 : -1));

  const [descOrder, setDescOrder] = useState(false);
  const scores = allCountryScores.map((country) =>
    country.scores.map((scores) => scores.s)
  );
  console.log(scores);
  return (
    <div className="App">
      <header className="App-header">
        <div>
          {scores.map((country) => (
            <div className="score">
              <span>{Math.max(...country)}</span>
            </div>
          ))}
        </div>
        <h1>High Scores per Country</h1>
        <button
          onClick={() => {
            setDescOrder(!descOrder);
          }}
        >
          {descOrder ? "Descending" : "Ascending"}
        </button>
        {allCountryScores.map((country, index) => (
          <Card key={index} {...country} descOrder={descOrder} />
        ))}
      </header>
    </div>
  );
}

export default App;
