import { useState } from "react";
import Grid from "./components/Grid";
import StartGame from './components/StartGame'
import createGrid  from './createGrid'

function App() {
  const [grid,setGrid] = useState(createGrid())
  const [game,setGame] = useState("")
  
  return (
    <div>
      <StartGame setGame={setGame} game={game} setGrid={setGrid} />
      <Grid setGame={setGame} game={game} grid={grid} setGrid={setGrid} />
      <p>{game}</p>
      </div>
  );
}

export default App;
