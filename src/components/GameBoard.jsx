function deriveGameBoard(playerTurns) {
  const boardData = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  playerTurns.forEach((turn) => {
    const { square, playerTurn } = turn;
    const { row, col } = square;
    boardData[row][col] = playerTurn;
  });

  return boardData;
}

export default function GameBoard({ onSelectedSquare, playerTurns }) {
  const boardData = deriveGameBoard(playerTurns);

  return (
    <ol id="game-board">
      {boardData.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((symbol, colIndex) => (
              <li key={colIndex}>
                <button
                  value={boardData}
                  onClick={() => onSelectedSquare(rowIndex, colIndex)}
                  disabled={symbol !== null}
                >
                  {symbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
