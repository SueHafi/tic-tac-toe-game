export default function GameBoard({ onSelectedSquare, renderGameBoard }) {
  const boardData = renderGameBoard();

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
