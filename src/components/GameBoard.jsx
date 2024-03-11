const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

import React, { useState } from "react";

export default function GameBoard({ activePlayer, onSelectedSquare }) {
  const [boardData, setBoardData] = useState(initialGameBoard);

  function handleSquareClick(rowIndex, colIndex) {
    setBoardData((previousBoardData) => {
      const updatedBoardData = [
        ...previousBoardData.map((innerArray) => [...innerArray]),
      ];
      if (activePlayer === "player 1") {
        updatedBoardData[rowIndex][colIndex] = "X";
      } else {
        updatedBoardData[rowIndex][colIndex] = "O";
      }
      return updatedBoardData;
    });

    onSelectedSquare();
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
                  onClick={() => handleSquareClick(rowIndex, colIndex)}
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
