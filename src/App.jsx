import Player from "./components/Player.jsx";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player playerName="Player 1" playerSymbol="X"></Player>
          <Player playerName="Player 2" playerSymbol="O"></Player>
        </ol>
        GAME BOARD
      </div>
    </main>
  );
}

export default App;
