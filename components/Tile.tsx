import React, { JSX, useState } from "react";
import Image from "next/image";
export interface TileProps {
  index: number;
  crossMove: boolean | null;
  setCrossMove: React.Dispatch<React.SetStateAction<(boolean)>>;
  gameCrossArray: Array<boolean | null>;
  setgameCrossArray: React.Dispatch<React.SetStateAction<(boolean | null)[]>>;
}

function Tile(props: TileProps): JSX.Element {
  const { index, crossMove, setCrossMove, gameCrossArray, setgameCrossArray } = props;

  return (
    <>
      <button onClick={() => {
        // Only allow click if tile is empty (null)
        if (gameCrossArray[index] === null) {
          setgameCrossArray((prevArray) => {
            const newArray = [...prevArray];
            newArray[index] = crossMove ? true : false;
            return newArray; 
          });

          setCrossMove(!crossMove);
        }
       

      }} key={index} className="flex flex-col cursor-pointer justify-center items-center">
        <div className="flex flex-col w-20 h-20 sm:w-[120px] sm:h-[120px] justify-center items-center bg-blue-200">
          {(gameCrossArray[index] != null) && (<>
          {gameCrossArray[index] ? (
            <>
              <Image
                src="/cross.svg"
                alt="cross"
                width={64}
                height={64}
                className="w-10 h-10 sm:w-16 sm:h-16"
              />
            </>
          ) : (
            <>
              <Image
                src="/circle.svg"
                alt="circle"
                width={64}
                height={64}
                className="w-10 h-10 sm:w-16 sm:h-16"
              />
            </>
          )}
          </>)}
        </div>
      </button>
    </>
  );
}

export default Tile;
