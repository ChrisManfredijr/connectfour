import React, { useEffect } from 'react';
import {useState} from 'react';
import Board from '../../components/Board';

const Game = () => {
  useEffect(() => {
      
    }, [])
    
  const [column, setColumn] = useState(0);
  const [playerTurn, setPlayerTurn] = useState('P1');
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

          }else if(board[column] !== 0){
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
      for(let c=0; c <= 6; c++){
        let count = 0; 
        for(let i=0; i <= 5; i++){
            if(newBoard[c + (i * 7)] === piece){
              count++;
              if(count === 4){
                console.log("win!");
                gameReset();
                return;
              }
            }else{
              count = 0;
            }
         }
      }

      //horizontal wincheck
      for(let r=0; r <= 5; r++){
        let count = 0;
        for(let i=0; i<=6; i++) {
          if(newBoard[(r * 7) + i] === piece){
            count++;
              if(count === 4){
                console.log("win");
                gameReset();
                return;
              }
          }else{
            count = 0;
          }
        }
      }
      //diagonal wincheck top left to middle
      for(let d=0; d <= 5; d++){
        let count = 0;
        for(let i=0; i<=d; i++){
            if(newBoard[d +(i *6)] === piece){
              count++;
               if(count === 4){
                console.log("win")
                gameReset();
                return;
               }
            }else{
              count = 0;
            }
        }
      };
      //diagonal wincheck middle to bottom right
      for(let d = 0; d <= 5; d++){
        let count = 0;
        for(let i = 5; i>=d; i--){
            if(newBoard[(6 + d) + (6*i)] === piece){
              count++;
               if(count === 4){
                console.log("win")
                gameReset();
                return;
               }
            }else{
              count = 0;
            }
        }
      }
      //diagonal wincheck top right to middle, 
      for(let d = 0; d<=5; d++){
        let count = 0;
        for(let i = 0; i<=d; i++){
           if(newBoard[(6-d) +(8 * i)] === piece){
            count++;
             if(count === 4){
              console.log("win")
              gameReset();
              return;
             }
          }else{
            count = 0;
          }
        }
      }
      //diagonal wincheck middle to bottom left
      for(let d = 0; d<=5; d++){
        let count = 0;
        
        for(let i = 5; i>=d; i--){
           if(newBoard[(8 * i) - d] === piece){
            count++;
             if(count === 4){
              console.log("win")
              gameReset();
              return;
             }
          }else{
            count = 0;
          }
        }
      }
  }


  function gameReset() {
      const blankBoard = [0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,];
        setBoard(blankBoard);

  };
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
      <Board boardArray={board}/>
    </div>
  )
}
//<button onClick={decrement}>left</button><h1>{column}</h1><button onClick={increment}>right</button><button onClick={dropPiece}>submit</button>
export default Game