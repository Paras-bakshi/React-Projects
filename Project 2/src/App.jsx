import { useState } from "react"
import Player from "./components/Players"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./WinningCombinations";

const initialBoard=[
  [null,null,null],
  [null,null,null],
  [null,null,null]
];


function App() {
  
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer]=useState("X");
  // const [hasWinner, setHasWinner]= useState(false);

  let gameBoard=initialBoard;

  for(const turn of gameTurns)
  {
      const{square,player}=turn;
      const{row,col}=square;
  
      gameBoard[row][col]=player;
  }
  
let winner=null;

  for(const combinations of WINNING_COMBINATIONS)
  {
    const firstSquareSymbol =gameBoard[combinations[0].row][combinations[0].column];
    const secondSquareSymbol=gameBoard[combinations[1].row][combinations[1].column];
    const thirdSquareSymbol=gameBoard[combinations[2].row][combinations[2].column];

    if(firstSquareSymbol &&
      firstSquareSymbol===secondSquareSymbol &&
      firstSquareSymbol===thirdSquareSymbol
    )
    {
      winner=firstSquareSymbol;
    }

  }

  function handleSelectSquare(rowIndex,colIndex)
  {
    setActivePlayer((curActivePlayer)=> curActivePlayer==="X"? "0" : "X");
    
    setGameTurns(prevTurns=>{
      let currentPlayer="X";

      if(prevTurns.length>0  && prevTurns[0].player==="X")
      {
        currentPlayer="0";
      }

      const updatedTurns=[{square:{row:rowIndex,col:colIndex}, player:currentPlayer}, ...prevTurns,];
      return updatedTurns;
    });

  }

  return (
    <>
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer==="X"}/>
          <Player initialName="Player 2" symbol="0" isActive={activePlayer==="0"}/>
        </ol>
        { winner&& <p>You Won, {winner}</p>}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}/>
      </div>
      
      <Log turns={gameTurns}></Log>
    </main>
    </>
  )
}

export default App
