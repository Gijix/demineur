import createGrid from '../createGrid'


export default function StartGame({setGrid,game,setGame}){
    const buttonName = game !== "playing" ? "start game" : "restart the game"
    const restart = () => {
        setGame("playing")
        setGrid(createGrid())
    }
    return(<button onClick={restart}>{buttonName}</button>)
}