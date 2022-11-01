import React, { useEffect } from 'react';
import {useState, useReducer} from 'react';

const Game = () => {
  useEffect(() => {
      
    }, [])
    
  const [column, setColumn] = useState(0);
  const [playerTurn, setPlayerTurn] = useState('P1')
  const [board, setBoard] = useState( [0, 0, 0, 0, 0, 0, 0,
                                      0, 0, 0, 0, 0, 0, 0, 
                                      0, 0, 0, 0, 0, 0, 0,
                                      0, 0, 0, 0, 0, 0, 0, 
                                      0, 0, 0, 0, 0, 0, 0,
                                      0, 0, 0, 0, 0, 0, 0,])
  
  
  
  //game logic
  function dropPiece(){
    for(let i = 5; i >= 0; i--){
        if(board[(i*7) + column] === 0){
              let slotIndex = (i*7) + column;
              if(playerTurn === 'P1'){
                updateBoard(slotIndex, 1);
                setPlayerTurn('P2');
                
                 
              }else if(playerTurn === 'P2'){
                updateBoard(slotIndex, 2)  
                setPlayerTurn('P1'); 
               
              }
              return;

          }else if(board[column] != 0){
              console.log("column full");
              return;
          }
      
      }
  }
  //updates the boards state
  const updateBoard = (slotIndex, piece) => {
    const newBoard = board.map((s, i) => {
      if(i === slotIndex) {
        return piece;
      }
      return s;
    });
    setBoard(newBoard);
    checkWin(newBoard, slotIndex, piece);
    console.log(newBoard);
  }

  //checks to see if piece is winning piece
  function checkWin(newBoard, slotIndex, piece) {
      //vertical wincheck
      for(let i=0; i <= 6; i++){
         console.log(i);
      }

      //horizontal wincheck

      //diagonal wincheck top right to middle
      
      //diagonal wincheck middle to bottom left

      //diagonal wincheck top left to middle, 

      //diagnoal wincheck middle to bottom right
  }

  function increment() {
      if(column < 6){
        setColumn(prevColumn => prevColumn + 1);
      }
  };

  function decrement() {
      if(column > 0) {
        setColumn(prevColumn => prevColumn - 1);
      }
  };
  
  return (
    <div className='Game'>
          <button onClick={decrement}>left</button><h1>{column}</h1><button onClick={increment}>right</button><button onClick={dropPiece}>submit</button>
    </div>
  )
}

export default Game