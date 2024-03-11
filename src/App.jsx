import { useState } from "react";

import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";

function derivedActivePlayer(playerTurnsList) {
  let activePlayer = "X";
  if (playerTurnsList.length > 0 && playerTurnsList[0].playerTurn === "X") {
    activePlayer = "O";
  }
  return activePlayer;
}

function App() {
  const [playerTurnsList, setPlayerTurnsList] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState("player 1");
  const activePlayer = derivedActivePlayer(playerTurnsList);

  function handleSelectSquare(rowIndex, colIndex) {
    setCurrentPlayer((curActivePlayer) =>
      curActivePlayer === "player 1" ? "player 2" : "player 1"
    );

    setPlayerTurnsList((prevTurn) => {
      const updatedTurns = [
        {
          square: { row: rowIndex, col: colIndex },
          playerTurn: activePlayer,
        },
        ...prevTurn,
      ];
      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            isActive={currentPlayer === "player 1"}
            playerName="Player 1"
            playerSymbol="X"
          ></Player>
          <Player
            isActive={currentPlayer === "player 2"}
            playerName="Player 2"
            playerSymbol="O"
          ></Player>
        </ol>
        <GameBoard
          onSelectedSquare={handleSelectSquare}
          playerTurns={playerTurnsList}
        ></GameBoard>
      </div>
      <Log turns={playerTurnsList}></Log>
    </main>
  );
}

export default App;
