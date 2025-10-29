import React, { JSX } from "react";

export interface TileProps {
  index: number;
}
function Tile(props: TileProps): JSX.Element {
  const { index } = props;
  return (
    <>
      <button key={index} className="cursor-pointer">
        <div className="w-full h-full bg-blue-200">
            
        </div>
      </button>
    </>
  );
}

export default Tile;
