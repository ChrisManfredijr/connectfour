import React from 'react'
import './index.css';
import { ReactComponent as BoardTop } from '../../assets/images/board-layer-white-large.svg';
import { ReactComponent as BoardBottom } from '../../assets/images/board-layer-black-large.svg';
import { ReactComponent as CounterRedLarge } from '../../assets/images/counter-red-large.svg';
import { ReactComponent as CounterYellowLarge } from '../../assets/images/counter-yellow-large.svg';
import { ReactComponent as MarkerRed } from '../../assets/images/marker-red.svg';
import { ReactComponent as MarkerYellow } from '../../assets/images/marker-yellow.svg';
import {ReactComponent as TurnBackgroundRed} from '../../assets/images/turn-background-red.svg';
import {ReactComponent as TurnBackgroundYellow} from '../../assets/images/turn-background-yellow.svg';

const Board = (props) => {
    const board = props.boardArray;
    const columnNumber = props.columnPosition;
    const playerTurn = props.playerTurn;
    const winningArray = props.winningArray;
    const column = [0, 1, 2, 3, 4, 5, 6,];
    
  
    
    const columnGrid = column.map((index) => {
        if (columnNumber === index ) {
            if (playerTurn === 'P2' && props.start === false) {
                return (
                    <div className='columnSlot' key={index}>
                        <MarkerRed/>
                    </div>
                );
            } else if (playerTurn === 'P1' && props.start === false) {
                return (
                    <div className='columnSlot' key={index}>
                        <MarkerYellow />
                    </div>

                );
            }else{
                return (
                    
                    <div className='columnSlot' key={index}>
                           <MarkerRed style={{display: "none"}}/>
                    </div>
                )
            }

        } else {
            return (
                <div className='columnSlot' key={index}></div>
            );
        }
    })
    const grid = board.map((slot, index) => {
        if (slot === 1) {
            return (
                <div className='slot' key={index}>
                    <CounterRedLarge className='fall'/>    
                    {
                        winningArray.map((win, i) => {
                            if(win === index){
                                return(
                                    <div className='winCircle' key={i}></div>                    
                                );       
                            }
                        })
                    }   
                </div>
            );
        } else if (slot === 2) {
            return (
                <div className='slot' key={index}>
                    <CounterYellowLarge className='fall' />
                    {
                        winningArray.map((win, i) => {
                            if(win === index){
                                return(
                                    <div className='winCircle' key={i}></div>                    
                                );       
                            }
                        })
                    }
                </div>
            );
        } else {
            return (
                <div className='slot' key={index}>

                </div>
            );
        };
    });
    const dropGrid = column.map((col, index) => {      
        
        return(
            <div className='dropColumn' onClick={() => {props.drop(col)}} key={index}>

            </div>
        )
    })
    return (
        <div className='Board'>
            <div className='dropGrid'>{dropGrid}</div>
            <div className='markerGrid'>{columnGrid}</div>
            <BoardTop className='BoardTop' />
            <div className='grid'>{grid}</div>
            <BoardBottom className='BoardBottom' />
            {props.win ?
                <div className='win'>
                    <h3>Player {playerTurn === 'P2' ? '1': '2'}</h3>
                    <h1>WINS</h1>
                    <div className="replay" onClick={props.gameReset}>PLAY AGAIN</div>
                </div>
                : playerTurn === 'P1' ? 
                <>
                    <TurnBackgroundRed className='timer'/>
                    <div className='timerText'>
                        <h2>YOUR TURN</h2>
                        <h1>{props.timer}S</h1>
                    </div>
                </>   
                : playerTurn === 'P2' ? 
                <>
                    <TurnBackgroundYellow className='timer'/> 
                    <div className='timerText t2'>
                        <h2>YOUR TURN</h2>
                        <h1>{props.timer}S</h1>
                    </div>
                </>
            : null}
           
            
           
        </div>
    )
}

export default Board