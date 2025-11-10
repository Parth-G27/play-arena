"use client";

import Tile from "@/components/Tile";
import Image from "next/image";
import { useState } from "react";

// All 8 winning line index triplets
const WIN_LINES: number[][] = [
  [0,1,2],[3,4,5],[6,7,8], // rows
  [0,3,6],[1,4,7],[2,5,8], // cols
  [0,4,8],[2,4,6]          // diagonals
];

function getWinner(board: (boolean | null)[]): boolean | null {
  for (const [a,b,c] of WIN_LINES) {
    const v = board[a];
    if (v !== null && v === board[b] && v === board[c]) {
      return v; // true => X, false => O
    }
  }
  return null;
}

function GamePage() {
  console.log()
  const [crossMove, setCrossMove] = useState<boolean>(true);
  const [gameCrossArray, setGameCrossArray] = useState<(boolean | null)[]>(Array(9).fill(null));
  const winner = getWinner(gameCrossArray);
  const gameOver = winner !== null;

  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-col min-h-screen w-2/3 items-center bg-blue-50">
          <h1 className="text-3xl font-bold py-2 my-2 mx-2">TIC-TAC-TOE</h1>

          <h1 className="text-lg">Are you ready ?</h1>
          <h1 className="text-lg mb-2">Choose your player 1 symbol</h1>

          <div className="flex gap-4">
            <button
              onClick={() => {
                setCrossMove(true);
              }}
              className="w-16 h-16 p-2 border-2 border-gray-300 rounded-lg hover:bg-gray-100 transition-colors hover:cursor-pointer"
            >
              <Image
                src="/cross.svg"
                alt="cross"
                width={48}
                height={48}
                className="w-full h-full"
              />
            </button>
            <button
              onClick={() => {
                setCrossMove(false);
              }}
              className="w-16 h-16 p-2 border-2 border-gray-300 rounded-lg hover:bg-gray-100 transition-colors hover:cursor-pointer"
            >
              <Image
                src="/circle.svg"
                alt="circle"
                width={48}
                height={48}
                className="w-full h-full"
              />
            </button>
          </div>

          <div className="flex w-102 h-102 bg-blue-100 p-2 m-2 mt-6">
            <div className="w-full h-full grid grid-cols-3 gap-4">
              {gameCrossArray.map((_, index) => (
                <Tile
                  index={index}
                  key={index}
                  crossMove={crossMove}
                  setCrossMove={setCrossMove}
                  gameCrossArray={gameCrossArray}
                  setgameCrossArray={setGameCrossArray}
                />
              ))}
            </div>
          </div>

          <div className="mt-4 text-lg font-semibold">
            {gameOver ? (
              <span className="text-red-600">Game Over! Winner: {winner ? "Player 1 (X)" : "Player 2 (O)"}</span>
            ) : (
              <span>{crossMove ? "Player 1 (X)" : "Player 2 (O)"} Turn</span>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default GamePage;
