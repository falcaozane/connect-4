import React from 'react'

const Footer = ({onClickEvent}) => {
  return (
    <div className='panel footer'>
        <button onClick={onClickEvent}>New Game</button>
    </div>
  )
}

export default Footer