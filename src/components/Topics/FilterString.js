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
      (user) => user.includes(userInput) && results.push(user)
    );
    setFilteredArray(results);
  };

  return (
    <div className="puzzleBox filterStringPB">
      <h4>FilterString</h4>
      <span className="puzzleText">{JSON.stringify(unFilteredArray)}</span>
      <input className="inputLine"> onChange={getUserInputs}</input>
      <button className="confirmationButton"> onClick={clickedObject}</button>
      <span className="resultsBox filterStringRB">
        {JSON.stringify(filteredArray)}
      </span>
    </div>
  );
};

export default FilterString;
