import React from 'react'
import './index.css';
const Pause = () => {
  return (


    <div className='Pause'>
       
       <div className='modalBackdrop'></div>
       <div className='pauseMenu'>
            <h1 className='pauseTitle'>PAUSE</h1>
            <div className='box selectBox pauseText'>
                CONTINUE
            </div>
            <div className='box selectBox pauseText'>
                RESTART
            </div>
            <div className='box selectBox quit'>
                QUIT GAME
            </div>
       </div>
    </div>
  )
}

export default Pause