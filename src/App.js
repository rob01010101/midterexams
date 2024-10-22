import React, { useState, useEffect } from 'react';
import './App.css';

const talentList = [
  "Being On Time",
  "Making An Effort",
  "Being High Energy",
  "Having A Positive Attitude",
  "Being Passionate",
  "Using Good Body Language",
  "Being Coachable",
  "Doing A Little Extra",
  "Being Prepared",
  "Having A Strong Work Ethic"
];

const App = () => {
  const [displayText, setDisplayText] = useState("10 Things That Require Zero Talent");
  const fullName = "Robby Pineda"; // Replace with your full name

  const handleKeyPress = (event) => {
    const key = event.key.toUpperCase();
    if (key >= '1' && key <= '9') {
      const index = parseInt(key) - 1; // Convert '1'-'9' to 0-8 index
      setDisplayText(talentList[index]);
    } else if (key === '0') {
      setDisplayText(talentList[9]); // Handle '0' key separately
    } else if (key === 'R') {
      setDisplayText("10 Things That Require Zero Talent");
    } else if (key === 'N') {
      setDisplayText(fullName.toUpperCase());
    }
  };

  const handleButtonClick = (index) => {
    setDisplayText(talentList[index]);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{fullName} - IT3A</h1>
        <h2>{displayText}</h2>
        <div className="button-container">
          {talentList.map((talent, index) => (
            <button key={index} onClick={() => handleButtonClick(index)} className="talent-button">
              {index + 1} - {talent}
            </button>
          ))}
        </div>
        <button onClick={() => setDisplayText("10 Things That Require Zero Talent")} className="reset-button">RESET</button>
        <button onClick={() => setDisplayText(fullName.toUpperCase())} className="name-button">NAME</button>
      </header>
    </div>
  );
};

export default App;
