
import { useState } from 'react'
import useTicTacToe from '../hooks/use-tic-tac-toe';




function TicTacToe() {

 const{board,handleClick,calculatewinner,resetGame,getStatusMessage} = useTicTacToe();

  console.log(board);

  return (
   <div className="game">
    <div className="status">
      {getStatusMessage()}
    
    </div>

   <div className='board'>
    {board.map((b,index)=>{
      return( 
      <button 
        className="cell" 
        key={index} 
        onClick={() => handleClick(index)}
        disabled={b !==null}
       >
         {b}
         </button>
         );
    })}
    </div>
    <button className='reset-button' onClick={resetGame}>
        Reset Game
        </button>
   </div>
  );
}

export default TicTacToe;
