import React, { useState } from "react";

const Sum = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [sum, setSum] = useState(null);

  const updateNumber1 = (value) => {
    setNumber1(value);
  };
  const updateNumber2 = (value) => {
    setNumber2(value);
  };

  const add = () => {
    let newSum = +number1 + +number2;
    setSum(newSum);
  };

  return (
    <div className="puzzleBox sumPB">
      <h4>Sum</h4>
      <input className="inputLine" onChange={updateNumber1}></input>
      <input className="inputLine" onChange={updateNumber2}></input>
      <button className="confirmationButton" onClick={add}></button>
      <span className="resultsBox">Sum: {sum}</span>
    </div>
  );
};

export default Sum;
