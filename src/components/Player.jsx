import React, { useState } from "react";
import "./Player.css";
export default function Player({ playerName, playerSymbol }) {
  const [userName, setUserName] = useState(playerName);
  const [isVisible, setIsVisible] = useState(false);
  function handlePlayerName() {
    setIsVisible(true);
  }

  function handleUserInput(event) {
    const userInput = event.target.value;
    setUserName(userInput);
  }
  return (
    <li>
      <span className="player">
        <span className="player-name">
          <input
            className={isVisible ? "" : "hidden"}
            onChange={handleUserInput}
            type="text"
            value={userName}
          />
        </span>
        <span className="player-symbol">{playerSymbol}</span>
      </span>
      <button onClick={handlePlayerName}>Edit</button>
    </li>
  );
}
