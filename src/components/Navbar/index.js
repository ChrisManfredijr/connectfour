import React from 'react'
import {ReactComponent as Logo} from '../../assets/images/logo.svg'

import './index.css'
const Navbar = (props) => {
  return (
    <div className='Navbar'>
        <div className='navButton' onClick ={props.toggle}>MENU</div>
            <Logo/>
        <div className='navButton' onClick={props.restart}>RESTART</div>
    
    </div>
  )
}

export default Navbar