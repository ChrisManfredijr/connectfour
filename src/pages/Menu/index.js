import React from 'react'
import './index.css'
import {ReactComponent as Logo} from '../../assets/images/logo.svg'

const Menu = () => {
  return (
    <div className='menu'>
        <div className='box menuBox'>
            <Logo className='logo'/>
            <div className='menuBtnWrapper'>
                <div className='box selectBox player'>
                    Player vs Player
                </div>
                <div className='box selectBox cpu'>
                    Player vs CPU
                </div>
                <div className='box selectBox rules'>
                    Game Rules
                </div>
            </div>
        </div>
    </div>
  )
}

export default Menu