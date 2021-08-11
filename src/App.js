import { useEffect, useState } from "react";
import Grid from "./components/Grid";
import StartGame from "./components/StartGame";
import Option from './components/Option'
import createGrid from "./createGrid";
import style from "./global.module.css";

function App() {
  const [size, setSize] = useState(16);
  const [totalBomb,setTotalBomb] = useState(40)
  const [bomb,setBomb] = useState(totalBomb)
  const [grid, setGrid] = useState(createGrid(size,bomb));
  const [game, setGame] = useState("");
  useEffect(()=> {
    console.log(bomb,size);
  },[bomb,size])
  return (
    <div className={style.appWrapper}>
      <div>
        <p>Mines : {bomb}</p>
        <StartGame setBomb={setBomb} size={size} totalBomb={totalBomb} setGame={setGame} game={game} setGrid={setGrid} />
        <Option setTotalBomb={setTotalBomb} setSize={setSize} />
      </div>
      <div className={style.gridWrapper}>
        {/* <p className={style.noPlaying}>You Win !!!</p> */}
        <Grid
          setBomb={setBomb}
          setGame={setGame}
          game={game}
          grid={grid}
          setGrid={setGrid}
        />
      </div>
    </div>
  );
}

export default App;
