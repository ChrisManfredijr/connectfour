import React from 'react'
import {ReactComponent as BoardTop} from '../../assets/images/board-layer-white-large.svg';
import {ReactComponent as BoardBottom} from '../../assets/images/board-layer-black-large.svg';
import './index.css';
const Board = () => {
  return (
    <div className='Board'>
        <div className='playArea'>
            <BoardTop className='boardTop'/>
            <BoardBottom className='boardBottom'/>
        </div>
    </div>
  )
}

export default Board