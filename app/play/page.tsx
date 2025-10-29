"use client";

import Tile from "@/components/Tile";
import Image from "next/image";

function GamePage() {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-col min-h-screen w-2/3  items-center bg-blue-50">
          <h1 className="text-3xl font-bold py-2 my-2 mx-2">TIC-TAC-TOE</h1>

          <h1 className="text-lg">Are you ready ?</h1>
          <h1 className="text-lg mb-2">Choose your player 1 symbol</h1>

          <div className="flex gap-4">
            <button
              onClick={() => {}}
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
              onClick={() => {}}
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
              {Array.from({ length: 9 }, (_, index) => (
                <Tile index={index} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GamePage;
