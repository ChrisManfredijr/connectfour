import React from 'react'
import './index.css';
import { ReactComponent as PlayerOne } from '../../assets/images/player-one.svg';
import { ReactComponent as PlayerTwo } from '../../assets/images/player-two.svg';
const Scoreboard = (props) => {
        return (
        <div className='Scoreboard'>
            <div className='score'>
                <PlayerOne className='playerIcon'/><h1>Player 1</h1><h3>{props.playerOneScore}</h3>
            </div>
            <div className='score'>
                <PlayerTwo className='playerIcon'/><h1>Player 2</h1><h3>{props.playerTwoScore}</h3>
            </div>
        </div>
      )

    
}

export default Scoreboard