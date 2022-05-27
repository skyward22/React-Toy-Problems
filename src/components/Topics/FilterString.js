import React, { useState } from "react";

const FilterString = () => {
  const [unFilteredArray] = useState([
    "James",
    "Jessica",
    "Melody",
    "Tyler",
    "Blake",
    "Jennifer",
    "Mark",
    "Maddy",
  ]);
  const [userInput, setUserInput] = useState("");
  const [filteredArray, setFilteredArray] = useState([]);

  const getUserInputs = (e) => {
    setUserInput(e.target.value);
  };

  const clickedObject = () => {
    let results = [];
    unFilteredArray.map(
      (person) => person.includes(userInput) && results.push(person)
    );
    setFilteredArray(results);
  };

  return (
    <div className="puzzleBox filterStringPB">
      <h4>FilterString</h4>
      <span className="puzzleText">{unFilteredArray}</span>
      <input className="inputLine" onChange={getUserInputs}></input>
      <button className="confirmationButton" onClick={clickedObject}>
        Filter
      </button>
      <span className="resultsBox filterStringRB">
        Filtered String: {filteredArray}
      </span>
    </div>
  );
};

export default FilterString;
