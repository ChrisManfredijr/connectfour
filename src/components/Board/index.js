import React from 'react'
import './index.css';
import {ReactComponent as BoardTop} from '../../assets/images/board-layer-white-large.svg';
import {ReactComponent as BoardBottom} from '../../assets/images/board-layer-black-large.svg';
import {ReactComponent as CounterRedLarge} from '../../assets/images/counter-red-large.svg';
import {ReactComponent as CounterYellowLarge} from '../../assets/images/counter-yellow-large.svg';

const Board = (props) => {
    const board = props.boardArray;
    const grid = board.map((slot) => 
    {
        if(slot == 1){
            return (
                <div className='slot'>  
                    <CounterRedLarge/>   
                </div> 
            );
        }else if(slot == 2){
            return (
                <div className='slot'>
                    <CounterYellowLarge/>
                </div>
            );
        }else{
            return (
                <div className='slot'>
                    
                </div>
            );
        };
    });
    
    return (  
    <div className='Board'>
        <BoardTop className='BoardTop'/>
        <div className='grid'>{grid}</div>
        <BoardBottom className='BoardBottom'/>
    </div>
  )
}

export default Board