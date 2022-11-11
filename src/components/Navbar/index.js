import React from 'react'
import {ReactComponent as Logo} from '../../assets/images/logo.svg'
import './index.css'
const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className='navButton'>MENU</div>
            <Logo/>
        <div className='navButton'>RESTART</div>
    
    </div>
  )
}

export default Navbar