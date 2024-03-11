import { useState } from "react";

import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
import { win_combinations } from "./win_combinations.jsx";

function derivedActivePlayer(playerTurnsList) {
  let activePlayer = "X";
  if (playerTurnsList.length > 0 && playerTurnsList[0].playerTurn === "X") {
    activePlayer = "O";
  }
  return activePlayer;
}

function App() {
  const [playerTurnsList, setPlayerTurnsList] = useState([]);

  const activePlayer = derivedActivePlayer(playerTurnsList);

  function handleSelectSquare(rowIndex, colIndex) {
    setPlayerTurnsList((prevTurns) => {
      const updatedTurns = [
        {
          square: { row: rowIndex, col: colIndex },
          playerTurn: activePlayer,
        },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            isActive={activePlayer === "X"}
            playerName="Player 1"
            playerSymbol="X"
          />
          <Player
            isActive={activePlayer === "O"}
            playerName="Player 2"
            playerSymbol="O"
          />
        </ol>
        <GameBoard
          onSelectedSquare={handleSelectSquare}
          playerTurns={playerTurnsList}
        />
      </div>
      <Log turns={playerTurnsList} />
    </main>
  );
}

export default App;
