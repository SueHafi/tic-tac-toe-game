import { useState } from "react";

import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";

function App() {
  const [currentPlayer, setCurrentPlayer] = useState("player 1");

  function handleSelectSquare() {
    setCurrentPlayer((curActivePlayer) =>
      curActivePlayer === "player 1" ? "player 2" : "player 1"
    );
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
          activePlayer={currentPlayer}
          onSelectedSquare={handleSelectSquare}
        ></GameBoard>
      </div>
    </main>
  );
}

export default App;
