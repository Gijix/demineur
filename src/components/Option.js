import { useRef } from "react";
import style from "../global.module.css";

export default function Option({ setSize, setTotalBomb }) {
  const bombInput = useRef(null);
  const sizeInput = useRef(null);
  const changeValue = (ref) => {
    ref.current.id === "bomb"
      ? setTotalBomb(parseInt(ref.current.value))
      : setSize(parseInt(ref.current.value));
  };
  const checkNum = (e) => {
    if (!/[0-9]/.test(e.key) && e.key !== "Backspace") {
      e.preventDefault();
    }
  };
  return (
    <div className={style.optionWrapper}>
      <label>
        Mine :{" "}
        <button onClick={() => changeValue(bombInput)}>Reset bomb</button>
        <input onKeyDown={checkNum} type="text" id="bomb" ref={bombInput} />
      </label>
      <label>
        Size :{" "}
        <button onClick={() => changeValue(sizeInput)}>Reset size</button>
        <input onKeyDown={checkNum} type="text" id="size" ref={sizeInput} />
      </label>
    </div>
  );
}
