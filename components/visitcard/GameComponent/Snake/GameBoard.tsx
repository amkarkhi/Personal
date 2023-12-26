"use client";
import { colors } from "@/assets/colors";
import React, { useState } from "react";
import "./GameBoard.modules.css";

type posType = {
  x: number;
  y: number;
};

// enum movementType {
//   left = 0,
//   right = 1,
//   top = 2,
//   bottom = 3,
// }

const GameBoard = () => {
  const WIDTH = 500;
  const [snakebar, _setsnakebar] = useState<posType[]>([{ x: 0, y: 0 }]);
  // const [score, setscore] = useState<posType>({ x: 0, y: 0 });
  // const [loading, setloading] = useState<boolean>(true);
  // const [lastMove, setlastmove] = useState<movementType>(movementType.right);

  // useEffect(() => {
  //    const t = setInterval(() => {
  //       setsnakebar((oldOne) => accendMOvement(oldOne, lastMove))
  //    }, 100)
  //    return () => clearInterval(t)
  // }, [ lastMove])

  return (
    <div
      style={{
        position: "relative",
        width: WIDTH,
        aspectRatio: "1 / 1",
        content: "",
        background: colors.Beige,
      }}
    >
      {snakebar.map((i, idx) => (
        <span
          key={`snake_bar_${idx}`}
          id='snakebar'
          style={{ left: i.x, top: i.y }}
        />
      ))}
      <span
        id='score'
        style={{ left: 60, top: 60 }}
        className='animate-pulse'
      />
    </div>
  );

  //    function accendMOvement(bars: posType[], movement: movementType): posType[] {
  //       let lastPos = pos[0]
  //          switch (movement) {
  //             case movementType.top:
  //                break;
  //             case movementType.bottom:
  //                break;
  //             case movementType.left:
  //                break;
  //             case movementType.right:
  //             default:
  //                break;
  //          }
  //          return [lastPos];
  //       })
  //    }
};

export default GameBoard;
