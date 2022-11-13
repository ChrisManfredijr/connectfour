import React from 'react'
import './index.css';
import { Link } from 'react-router-dom';
const Pause = (props) => {
  return (


    <div className='Pause'>
       
       <div className='modalBackdrop'></div>
       <div className='pauseMenu'>
            <h1 className='pauseTitle'>PAUSE</h1>
            <div className='box selectBox pauseText'onClick={props.toggle}>
                CONTINUE
            </div>
            <div className='box selectBox pauseText' onClick={props.restart}>
                RESTART
            </div>
            <Link to='/' style={{textDecoration: "none", color: 'inherit'}}>
              <div as={Link} to='/' className='box selectBox quit'>
                QUIT GAME
              </div>
            </Link>
            
       </div>
    </div>
  )
}

export default Pause