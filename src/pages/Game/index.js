import React, { useEffect } from 'react';
import {useState, useReducer} from 'react';

const Game = () => {
  useEffect(() => {
      start();
    }, [])
    
  const [column, setColumn] = useState(0);
  const [playerTurn, setPlayerTurn] = useState('P1')

  function reducer(state, action){
    switch (action.type) {
      case 'playerOne':
        return;
      case 'playerTwo':
        return;
      case 'start':
        return;
      case 'reset':
        return; 
      
    }
  }

  function start(){
    dispatch({type: 'start'});
  }
  
  const [state, dispatch] = useReducer(reducer, 
    {
      board: [0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 
              0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0, 
              0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0, 0,],
      playerOne: 1,
      playerTwo: 2,
      playerOneScore: 0,
      playerTwoScore: 0,
    }
    
    );
  
  //test board
  var board = [0, 0, 0, 0, 0, 0, 0,
                 0, 0, 0, 0, 0, 0, 0, 
                 0, 0, 0, 0, 0, 0, 0,
                 0, 0, 0, 0, 0, 0, 0, 
                 0, 0, 0, 0, 0, 0, 0,
                 0, 0, 0, 0, 0, 0, 0,];

  //game logic
  

  function dropPiece(){
      for(let i = 5; i >= 0; i--){
          if(board[(i*7) + column] === 0){
              if(playerTurn === 'P1'){
                  board[(i*7) + column] = 1;
                  setPlayerTurn('P2');
                  console.log(board);
              }else if(playerTurn === 'P2'){
                  board[(i*7) + column] = 2;
                  setPlayerTurn('P1');
                  console.log(board);
              }
              checkWin();
              return;
          }
      }
  }

  function checkWin() {
      
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