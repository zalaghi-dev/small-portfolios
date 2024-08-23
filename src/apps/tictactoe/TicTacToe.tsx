import { useState } from "react";

type SquareValue = "X" | "O" | null;

const Square = ({
  value,
  onClick,
}: {
  value: SquareValue;
  onClick: () => void;
}) => {
  return (
    <button
      className="w-16 h-16 focus:ring-red-800 bg-gradient-to-br from-pink-500 to-red-700 border-2 border-pink-400 text-2xl items-center justify-center flex transition-all ease-in duration-75 hover:scale-105 focus:scale-100 active:scale-95 focus:ring-2 size-12 hover:bg-gradient-to-bl focus:outline-none font-medium rounded-lg"
      onClick={onClick}
    >
      {value}
    </button>
  );
};

// Board Component
const Board = () => {
  const [squares, setSquares] = useState<SquareValue[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (index: number) => {
    if (calculateWinner(squares) || squares[index]) {
      return;
    }

    const newSquares = squares.slice();
    newSquares[index] = isXNext ? "X" : "O";
    setSquares(newSquares);
    setIsXNext(!isXNext);
  };

  const renderSquare = (index: number) => {
    return <Square value={squares[index]} onClick={() => handleClick(index)} />;
  };

  const winner = calculateWinner(squares);
  let status;
  winner
    ? (status = `Winner: ${winner}`)
    : squares.every(Boolean)
    ? (status = "Draw")
    : (status = `Player: ${isXNext ? "X" : "O"}`);

  return (
    <div>
      <div className="my-5 flex items-center justify-center gap-0 text-center text-xl font-bold">
        {status}
        {!status.startsWith("Player") && (
          <button
            className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none  focus:ring-purple-800 font-medium rounded-lg text-sm px-3 py-0.5 text-center my-0 mx-2"
            type="button"
            onClick={() => {
              setSquares(Array(9).fill(null));
              setIsXNext(true);
            }}
          >
            Reset
          </button>
        )}
      </div>
      <div className="grid grid-cols-3 gap-2">
        {Array.from(Array(9).keys()).map((n) => renderSquare(n))}
      </div>
    </div>
  );
};

// Calculate the winner
function calculateWinner(squares: SquareValue[]): SquareValue {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const TicTacToe = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
};

export default TicTacToe;
