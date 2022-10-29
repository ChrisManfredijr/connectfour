import React from 'react';
import Board from '../../components/Board';
import {useState, useReducer} from 'react';

const Game = () => {
  function reducer(state, action){
    switch (action.type) {
      case 'playerOne':
        return;
      case 'playerTwo':
        return;
      case 'start':
        console.log('start');
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
    
    )
  
  return (
    <div className='Game'>
        <Board/>
        <button onClick={start}>start</button>
    </div>
  )
}

export default Game