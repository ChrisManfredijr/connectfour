import React from 'react'
import './index.css';
import {ReactComponent as Checkmark} from '../../assets/images/icon-check.svg';
import { Link } from 'react-router-dom';


const Rules = () => {
  return (
    <div className='Rules'>
      <div className=' ruleBox box'>
        <h1 className='ruleTitle'>RULES</h1>
        <div className='ruleWrapper'>
          <h3 className='subTitle'>OBJECTIVE</h3>
          <p>Be the first player to connect 4 of the same colored discs in a row (either vertically, horizontally, or diagonally).</p>
          <h3 className='subTitle'>HOW TO PLAY</h3>
          <p> Red goes first in the first game</p>
          <p> Players must alternate turns, and only one disc can be dropped in each turn.</p>
          <p> The game ends when there is a 4-in-a-row or a stalemate.</p>
          <p> The starter of the previous game goes second on the next game.</p>
          <div className='checkWrapper'>
            <Link to='/connectfour/' >
              <Checkmark className='check'/>
            </Link>
          </div>
        
        </div>
          
      </div>
    </div>

  )
}

export default Rules