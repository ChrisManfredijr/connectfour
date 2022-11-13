import React from 'react'
import './index.css'
import {ReactComponent as Logo} from '../../assets/images/logo.svg'
import {ReactComponent as Player} from '../../assets/images/player-vs-player.svg'
import {ReactComponent as Cpu} from '../../assets/images/player-vs-cpu.svg'
import { Link } from 'react-router-dom';
const Menu = () => {
  return (
    <div className='menu'>
        <div className='box menuBox'>
            
            <Logo className='logo'/>
            <div className='menuBtnWrapper'>
                <Link to="/game">
                    <div className='box selectBox player'>
                        Player vs Player <Player/>
                    </div>
                </Link>
                
                <div className='box selectBox rules'>
                    Game Rules
                </div>
            </div>
        </div>
    </div>
  )
}

export default Menu