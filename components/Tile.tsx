import React, { JSX, useState } from "react";
import Image from "next/image";
export interface TileProps {
  index: number;
  crossMove: boolean;
}
function Tile(props: TileProps): JSX.Element {
  const { index, crossMove } = props;

  const [showMove, setshowMove] = useState<boolean>(false);
  return (
    <>
      <button onClick={() => {
        setshowMove(true);
      }} key={index} className="flex flex-col cursor-pointer justify-center items-center">
        <div className="flex flex-col w-20 h-20 sm:w-[120px] sm:h-[120px] justify-center items-center bg-blue-200">
          {showMove && (<>
          {crossMove ? (
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
                height={48}
                className="w-10 h-8 sm:w-16 sm:h-12"
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
