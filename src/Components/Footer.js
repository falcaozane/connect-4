import React from 'react'
import{GAME_STATE_PLAYING , GAME_STATE_WIN, GAME_STATE_DRAW} from "../Constants"


const Footer = ({onNewGame, onSuggest , gameState}) => {
  return (
    <div className='panel footer'>
        {
            gameState === GAME_STATE_PLAYING && 
            <button onClick={onSuggest}>Suggest</button>
        }
        {
            gameState != GAME_STATE_PLAYING &&
            <button onClick={onNewGame}>New Game</button>
        }
    </div>
  )
}

export default Footer