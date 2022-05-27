import React, { useState } from "react";

const Palindrome = () => {
  const { userInput, setUserInput } = useState("");
  const { palindrome, setPalindrome } = useState("");

  const getUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const checkPalindrome = () => {
    let forwards = userInput;
    let backwards = userInput;
    backwards = backwards.split("");
    backwards = backwards.reverse();
    backwards = backwards.join("");
    if (forwards === backwards) {
      setPalindrome("True");
    } else {
      setPalindrome("False");
    }
  };

  return (
    <div className="puzzleBox filterStringPB">
      <h4>Palindrome</h4>
      <input className="inputLine" onChange={getUserInput}></input>
      <button
        className="confirmationButton"
        onClick={checkPalindrome(userInput)}
      ></button>
      <span className="resultsBox">{palindrome}</span>
    </div>
  );
};

export default Palindrome;
