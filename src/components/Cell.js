import style from "./global.module.css";

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
      onMouseDown={()=> false}
      onSelect={()=> false}
      onSelectCapture={()=> false}
    >
      {mine ? "" : hidden ? "" : BombCount ? BombCount : ""}
    </div>
  );
}

export default Cell;
