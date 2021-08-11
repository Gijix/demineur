import Cell from "./Cell";
import style from "../global.module.css";
import React from "react";

export default function Grid({ grid, setGrid, game, setGame, setBomb }) {
  const checkGrid = () => {
    if (
      grid.every((col) =>
        col.every(
          (cas) => (cas.hidden && cas.mine) || (!cas.hidden && !cas.mine)
        )
      )
    ) {
      setGame("Win");
    }
  };
  const reveal = (x, y) => {
    let clonedGrid = [...grid];
    if (clonedGrid[x][y].hidden) {
      clonedGrid[x][y].hidden = false;
      if (grid[x][y].mine) {
        grid.forEach((col, j) =>
          col.forEach((cas, i) => {
            reveal(i, j);
          })
        );
        setGrid(clonedGrid);
        setGame("Loose");
      } else {
        setGrid(clonedGrid);
        if (clonedGrid[x][y].BombCount === 0) {
          clonedGrid[x][y].adj.forEach((coor) => reveal(coor.x, coor.y));
        }
      }
    }
    checkGrid();
  };
  const setFlag = (e, j, i) => {
    e.preventDefault();
    let clonedGrid = [...grid];
    clonedGrid[j][i].flagged = !clonedGrid[j][i].flagged;
    setGrid(clonedGrid);
    clonedGrid[j][i].flagged
      ? setBomb((prev) => prev - 1)
      : setBomb((prev) => prev + 1);
  };
  return (
    <div className={style.grid}>
      {grid.map((col, j) => {
        return col.map((cas, i) => {
          return (
            <Cell
              reveal={() => reveal(j, i)}
              setFlag={(e) => setFlag(e, j, i)}
              content={cas.content}
              hidden={cas.hidden}
              flagged={cas.flagged}
              mine={cas.mine}
              BombCount={cas.BombCount}
              key={i}
            />
          );
        });
      })}
    </div>
  );
}
