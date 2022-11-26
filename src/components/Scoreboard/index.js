import React from 'react'
import './index.css';
import { ReactComponent as PlayerOne } from '../../assets/images/player-one.svg';
import { ReactComponent as PlayerTwo } from '../../assets/images/player-two.svg';
const Scoreboard = (props) => {
        return (
        <div className='Scoreboard'>
            <div className='score'>
                <PlayerOne className='playerIcon iconOne'/><h1>Player 1</h1><h1>{props.playerOneScore}</h1>
            </div>
            <div className='score'>
                <PlayerTwo className='playerIcon iconTwo'/><h1>Player 2</h1><h1>{props.playerTwoScore}</h1>
            </div>
        </div>
      )

    
}

export default Scoreboard