import React, { useState } from "react";

export default function Player({ isActive, playerName, playerSymbol }) {
  const [userName, setUserName] = useState(playerName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditButtonClick() {
    setIsEditing((isEditing) => !isEditing);
  }

  function handleUserInput(event) {
    const userInput = event.target.value;
    setUserName(userInput);
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing ? (
          <input
            className="player-name"
            onChange={handleUserInput}
            type="text"
            value={userName}
          />
        ) : (
          <span className="player-name">{userName}</span>
        )}
        <span className="player-symbol">{playerSymbol}</span>
      </span>
      <button onClick={handleEditButtonClick}>
        {isEditing ? "save" : "Edit"}
      </button>
    </li>
  );
}
