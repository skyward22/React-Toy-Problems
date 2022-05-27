import React, { useState } from "react";

const EvenAndOdd = () => {
  const [evenArray, setEvenArray] = useState([]);
  const [oddArray, setOddArray] = useState([]);
  const [userInput, setUserInput] = useState("");

  const inputChange = (e) => {
    setUserInput(e.target.value);
  };

  const clickEvenAndOdd = () => {
    const splitArray = userInput.split(",");
    setEvenArray([]);
    setOddArray([]);
    for (let i = 0; i < splitArray.length; i++) {
      const number = +splitArray[i].trim();
      if (number % 2 === 0) {
        setEvenArray((preValue) => [...preValue, number]);
      } else {
        setOddArray((preValue) => [...preValue, number]);
      }
    }
  };

  const makeString = (array) => {
    return `[${array.join(", ")}]`;
  };

  return (
    <div className="puzzleBox evenAndOddPB">
      <h4>Even and Odds</h4>
      <input className="inputLine" onChange={inputChange}></input>
      <button className="confirmationButton" onClick={clickEvenAndOdd}>
        Split
      </button>
      <span className="resultsBox">Evens {makeString(evenArray)}</span>
      <span className="resultsBox">Odds {makeString(oddArray)}</span>
    </div>
  );
};

export default EvenAndOdd;
