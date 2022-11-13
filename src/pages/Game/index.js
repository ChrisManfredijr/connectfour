import React, { useEffect } from 'react';
import {useState} from 'react';
import Board from '../../components/Board';
import Navbar from '../../components/Navbar';
import Scoreboard from '../../components/Scoreboard';
import Pause from '../../components/Pause';
import './index.css';

const Game = () => {
  
  const [column, setColumn] = useState(0);
  const [playerTurn, setPlayerTurn] = useState('P1');
  const [board, setBoard] = useState( [0, 0, 0, 0, 0, 0, 0,
                                      0, 0, 0, 0, 0, 0, 0, 
                                      0, 0, 0, 0, 0, 0, 0,
                                      0, 0, 0, 0, 0, 0, 0, 
                                      0, 0, 0, 0, 0, 0, 0,
                                      0, 0, 0, 0, 0, 0, 0,])
  const [win, setWin] = useState(false);
  const [winningArray, setWinningArray] = useState([]);
  const [playerOneScore, setPlayerOne] = useState(0);
  const [playerTwoScore, setPlayerTwo] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [playerStart, setPlayerStart] = useState('P1');
  const [pause, setPause] = useState(true);

  useEffect(() => {
    window.addEventListener("keydown", handler);
   
    let interval = setInterval(() => {
      if(win === false && !pause){
        if(timeLeft > 0){
          setTimeLeft(seconds => seconds - 1);
          
        }else{
          setWin(true);
          if(playerTurn === 'P1'){
            setPlayerTwo(score => score + 1);
          }else if(playerTurn === 'P2'){
            setPlayerOne(score => score + 1);
          }
          clearInterval(interval);
        }
      }
      
    }, 1000)
    
     return () => {
      window.removeEventListener("keydown", handler);
      clearInterval(interval);
     }
  });

  
  useEffect(() => {
    if(pause){
      setPause(!pause);
    }
    gameRestart();
  },[])
  
  function handler(event) {
    switch(event.key) {
      case 'ArrowDown':
        dropPiece();
        break;
      case 'ArrowRight':
        increment();
        break;
      case 'ArrowLeft':
        decrement();
        break;
    }
  };

  function toggle(){
    setPause(!pause);
  }
  
  
  //game logic
  function dropPiece(){
    if(win !== true){
      for(let i = 5; i >= 0; i--){
          if(board[(i*7) + column] === 0){
                let slotIndex = (i*7) + column;
                setTimeLeft(30);
                if(playerTurn === 'P1'){
                  updateBoard(slotIndex, 1);
                  setPlayerTurn('P2');

                }else if(playerTurn === 'P2'){
                  updateBoard(slotIndex, 2)  
                  setPlayerTurn('P1'); 
                 
                }
                return;
  
            }else if(board[column] !== 0){
                
                return;
            }
        
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
   
  }

  //checks to see if piece is winning piece
  function checkWin(newBoard, slotIndex, piece) {
      //vertical wincheck
      for(let c=0; c <= 6; c++){
        let count = 0;
        let winArray = []; 
        for(let i=0; i <= 5; i++){
            if(newBoard[c + (i * 7)] === piece){
              count++;
              winArray.push(c+(i* 7));
              if(count === 4){
                setWin(true);
                setWinningArray(winArray);
                setWinner(piece);
                return;
              }
            }else{
              count = 0;
              winArray = [];
            }
         }
      }

      //horizontal wincheck
      for(let r=0; r <= 5; r++){
        let count = 0;
        let winArray = [];
        for(let i=0; i<=6; i++) {
          if(newBoard[(r * 7) + i] === piece){
            count++;
            winArray.push((r*7) + i);
              if(count === 4){
                setWin(true);
                setWinningArray(winArray);
                setWinner(piece);
                return;
              }
          }else{
            count = 0;
            winArray = [];
          }
        }
      }
      //diagonal wincheck top left to middle
      for(let d=0; d <= 5; d++){
        let count = 0;
        let winArray = [];
        for(let i=0; i<=d; i++){
            if(newBoard[d +(i *6)] === piece){
              count++;
              winArray.push(d + (i*6));
               if(count === 4){
                setWin(true);
                setWinningArray(winArray);
                setWinner(piece);
                return;
               }
            }else{
              count = 0;
              winArray = [];
            }
        }
      };
      //diagonal wincheck middle to bottom right
      for(let d = 0; d <= 5; d++){
        let count = 0;
        let winArray = [];

        for(let i = 5; i>=d; i--){
            if(newBoard[(6 + d) + (6*i)] === piece){
              winArray.push((6 + d) + (6*i));
              count++;
               if(count === 4){
                setWin(true);
                setWinningArray(winArray);
                setWinner(piece);
                return;
               }
            }else{
              count = 0;
              winArray = [];
            }
        }
      }
      //diagonal wincheck top right to middle, 
      for(let d = 0; d<=5; d++){
        let count = 0;
        let winArray = [];

        for(let i = 0; i<=d; i++){
           if(newBoard[(6-d) +(8 * i)] === piece){
            winArray.push((6-d) +(8 * i));
            count++;
             if(count === 4){
              setWin(true);
              setWinningArray(winArray);
              setWinner(piece);
              return;
             }
          }else{
            count = 0;
            winArray = [];
          }
        }
      }
      //diagonal wincheck middle to bottom left
      for(let d = 0; d<=5; d++){
        let count = 0;
        let winArray = [];
        
        for(let i = 5; i>=d; i--){
           if(newBoard[(8 * i) - d] === piece){
            winArray.push((8*i) - d);
            count++;
             if(count === 4){
              setWin(true);
              setWinningArray(winArray);
              setWinner(piece);
              return;
             }
          }else{
            count = 0;
            winArray = [];
          }
        }
      }
  }

  const setWinner = (piece) => {
    if(piece === 1){
      setPlayerOne(score => score + 1);
    }else if(piece === 2) {
      setPlayerTwo(score => score + 1);
    }
  }

  const gameReset = () => {
      if(playerStart === 'P1'){
        setPlayerTurn('P2');
        setPlayerStart('P2');
      }else if(playerStart === 'P2'){
        setPlayerTurn('P1')
        setPlayerStart('P1');
      }
    
      setWin(false);
      setTimeLeft(30);
      const blankBoard = [0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,];
        setBoard(blankBoard);
        setWinningArray([]);
      

  };

  const gameRestart = () => {
    if(pause){
      setPause(!pause);
    }
    setPlayerStart('P1');
    setPlayerTurn('P1')
    setPlayerOne(0);
    setPlayerTwo(0);
    setWin(false);
      setTimeLeft(30);
      const blankBoard = [0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 
        0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0,];
        setBoard(blankBoard);
        setWinningArray([]);
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
       {
          pause ? 
          <Pause toggle={toggle} restart={gameRestart}/>
          : null
        }
      <Navbar restart={gameRestart} toggle={toggle}/>
      <Scoreboard playerOneScore={playerOneScore} playerTwoScore={playerTwoScore}/>

      <Board boardArray={board} columnPosition={column} playerTurn={playerTurn} win={win} gameReset={gameReset} winningArray={winningArray} timer={timeLeft} className="gameBoard" />

      <div className='bottomTab' style={ { backgroundColor: win && playerTurn === 'P2' ? '#FD6687' : win && playerTurn === 'P1' ? '#FFCE67' : '#5C2DD5'} }>

       
      </div>
    </div>
  )
}

export default Game