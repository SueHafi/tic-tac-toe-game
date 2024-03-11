const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectedSquare, playerTurns}) {
  let boardData = initialGameBoard;

  for (const turn of playerTurns) {
    const { square, playerTurn } = turn;
    const { row, col } = square;

    boardData[row][col] = playerTurn;
  }

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
