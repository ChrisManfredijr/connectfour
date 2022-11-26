import React from 'react'
import './index.css'
import {ReactComponent as Logo} from '../../assets/images/logo.svg'
import {ReactComponent as Player} from '../../assets/images/player-vs-player.svg'
import { Link } from 'react-router-dom';


const Menu = () => {
  return (
    <div className='menu'>
        <div className='box menuBox'>
            
            <Logo className='logo'/>
            <div className='menuBtnWrapper'>
                <Link to="/game" style={{textDecoration: "none", color: "inherit"}}>
                    <div className='box selectBox player'>
                        Player vs Player <Player className='playerIconMenu'/>
                    </div>
                </Link>
                <Link to ='/rules' style={{textDecoration: "none", color: "inherit"}}>
                    <div className='box selectBox rules'>
                        Game Rules
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Menu