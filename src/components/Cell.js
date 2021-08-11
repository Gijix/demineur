import style from "../global.module.css";
import React from 'react'

function Cell(prop) {
  const { mine, hidden, reveal, BombCount, flagged, setFlag } = prop;
  const classname = hidden
    ? flagged
      ? style.flagged
      : style.cellHidden
    : mine
    ? style.mine
    : style.cellVisible;
  return (
    <div
      onClick={reveal}
      onContextMenu={(e) => setFlag(e)}
      className={classname}
    >
      {mine ? "" : hidden ? "" : BombCount ? BombCount : ""}
    </div>
  );
}

export default Cell;
