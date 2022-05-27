import React, { useState } from "react";

const Palindrome = () => {
  const [userInput, setUserInput] = useState("");
  const [palindrome, setPalindrome] = useState("");

  const getUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const checkPalindrome = () => {
    const backwards = [...userInput].reverse().join("");
    setPalindrome(userInput === backwards ? "TRUE" : "FALSE");
  };

  return (
    <div className="puzzleBox filterStringPB">
      <h4>Palindrome</h4>
      <input className="inputLine" onChange={getUserInput}></input>
      <button className="confirmationButton" onClick={checkPalindrome}>
        Check Palindrome
      </button>
      <span className="resultsBox">Palindrome: {palindrome}</span>
    </div>
  );
};

export default Palindrome;
