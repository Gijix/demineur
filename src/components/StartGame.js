import createGrid from '../createGrid'
import style from '../global.module.css'


export default function StartGame({setBomb,setGrid,game,setGame,size,totalBomb}){
    const buttonName = game !== "playing" ? "start game" : "restart the game"
    const restart = () => {
        setGame("playing")
        setBomb(totalBomb)
        setGrid(createGrid(size,totalBomb))
    }
    return(<button className={style.startButton} onClick={restart}>{buttonName}</button>)
}