"use client";

import { useState } from "react";

type Player = "X" | "O" | null;

const GRID_SIZE = 3;

export default function TicTacToe() {
  const [board, setBoard] = useState<Player[][]>(
    Array(GRID_SIZE)
      .fill(null)
      .map(() => Array(GRID_SIZE).fill(null))
  );
  const [currentPlayer, setCurrentPlayer] = useState<Player>("X");
  const [winner, setWinner] = useState<Player>(null);
  const [isDraw, setIsDraw] = useState(false);

  const checkWinner = (newBoard: Player[][]) => {
    // rows & columns
    for (let i = 0; i < GRID_SIZE; i++) {
      if (
        newBoard[i][0] &&
        newBoard[i][0] === newBoard[i][1] &&
        newBoard[i][1] === newBoard[i][2]
      ) {
        return newBoard[i][0];
      }
      if (
        newBoard[0][i] &&
        newBoard[0][i] === newBoard[1][i] &&
        newBoard[1][i] === newBoard[2][i]
      ) {
        return newBoard[0][i];
      }
    }
    // diagonals
    if (
      newBoard[0][0] &&
      newBoard[0][0] === newBoard[1][1] &&
      newBoard[1][1] === newBoard[2][2]
    ) {
      return newBoard[0][0];
    }
    if (
      newBoard[0][2] &&
      newBoard[0][2] === newBoard[1][1] &&
      newBoard[1][1] === newBoard[2][0]
    ) {
      return newBoard[0][2];
    }
    return null;
  };

  const handleClick = (row: number, col: number) => {
    if (board[row][col] || winner || isDraw) return;

    const newBoard = board.map((r) => r.slice());
    newBoard[row][col] = currentPlayer;
    setBoard(newBoard);

    const win = checkWinner(newBoard);
    if (win) {
      setWinner(win);
    } else if (newBoard.flat().every((cell) => cell !== null)) {
      setIsDraw(true); // board full & no winner
    } else {
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };

  const restartGame = () => {
    setBoard(
      Array(GRID_SIZE)
        .fill(null)
        .map(() => Array(GRID_SIZE).fill(null))
    );
    setCurrentPlayer("X");
    setWinner(null);
    setIsDraw(false);
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <div
        className="grid grid-cols-3 grid-rows-3 gap-0 border-4 border-black w-72 h-72"
        style={{ backgroundColor: "transparent" }}
      >
        {board.flatMap((row, rIdx) =>
          row.map((cell, cIdx) => (
            <div
              key={`${rIdx}-${cIdx}`}
              onClick={() => handleClick(rIdx, cIdx)}
              className={`flex items-center justify-center border border-black cursor-pointer`}
              style={{ fontSize: "3rem" }}
            >
              {cell === "X" && (
                <span style={{ color: "oklch(78.5% 0.115 274.713)" }}>X</span>
              )}
              {cell === "O" && <span className="text-gray-700">O</span>}
            </div>
          ))
        )}
      </div>

      {(winner || isDraw) && (
        <div className="mt-4 text-center">
          <p className="text-xl font-bold text-gray-800">
            {winner ? `${winner} Wins!` : "Draw!"}
          </p>
          <button
            className="mt-2 px-4 py-2 bg-gray-300 text-gray-900 rounded hover:bg-gray-400 transition"
            onClick={restartGame}
          >
            Restart
          </button>
        </div>
      )}
    </div>
  );
}
