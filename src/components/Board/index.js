import React from 'react'
import './index.css';
import { ReactComponent as BoardTop } from '../../assets/images/board-layer-white-large.svg';
import { ReactComponent as BoardBottom } from '../../assets/images/board-layer-black-large.svg';
import { ReactComponent as CounterRedLarge } from '../../assets/images/counter-red-large.svg';
import { ReactComponent as CounterYellowLarge } from '../../assets/images/counter-yellow-large.svg';
import { ReactComponent as MarkerRed } from '../../assets/images/marker-red.svg';
import { ReactComponent as MarkerYellow } from '../../assets/images/marker-yellow.svg';



const Board = (props) => {
    const board = props.boardArray;
    const columnNumber = props.columnPosition;
    const playerTurn = props.playerTurn;

    const column = [0, 1, 2, 3, 4, 5, 6,];



    const columnGrid = column.map((index) => {
        if (columnNumber === index) {
            if (playerTurn === 'P1') {
                return (
                    <div className='columnSlot' key={index}>
                        <MarkerRed />
                    </div>
                );
            } else if (playerTurn === 'P2') {
                return (
                    <div className='columnSlot' key={index}>
                        <MarkerYellow />
                    </div>

                );
            }

        } else {
            return (
                <div className='columnSlot' key={index}></div>
            );
        }
    })
    const grid = board.map((slot, index) => {
        if (slot == 1) {
            return (
                <div className='slot' key={index}>
                    <CounterRedLarge className='fall' />
                </div>
            );
        } else if (slot == 2) {
            return (
                <div className='slot' key={index}>
                    <CounterYellowLarge className='fall' />
                </div>
            );
        } else {
            return (
                <div className='slot' key={index}>

                </div>
            );
        };
    });

    return (
        <div className='Board'>
            <div className='markerGrid'>{columnGrid}</div>
            <BoardTop className='BoardTop' />
            <div className='grid'>{grid}</div>
            <BoardBottom className='BoardBottom' />
            {props.win ?
                <div className='win'>
                    <h3>Player 1</h3>
                    <h1>WINS</h1>
                    <div className="replay" onClick={props.gameReset}>PLAY AGAIN</div>
                </div>
                : null}

        </div>
    )
}

export default Board