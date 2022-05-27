import React, { useState } from "react";

const FilterObject = () => {
  const [unFilteredArray] = useState([
    { "name": "Jimmy Joe", "title": "Hack0r", "age": 12 },
    { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" },
    { "name": "Carly Armstrong", "title": "CEO" },
  ]);
  const [userInput, setUserInput] = useState("");
  const [filteredArray, setFilteredArray] = useState([]);

  const getUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const clickObject = () => {
    setFilteredArray([]);
    for (let i = 0; i < unFilteredArray.length; i++) {
      const element = unFilteredArray[i];
      if (element[userInput]) {
        setFilteredArray((preValue) => [...preValue, element]);
      }
    }
  };

  return (
    <div className="puzzleBox filterObjectPB">
      <h4>Filter Object</h4>
      <span className="puzzleText">{JSON.stringify(unFilteredArray)}</span>
      <input className="inputLine" onChange={getUserInput}></input>
      <button className="confirmationButton" onClick={clickObject}></button>
      <span className="resultBox filterObjectRB">
        {JSON.stringify(filteredArray)}
      </span>
    </div>
  );
};

export default FilterObject;
