import React, {useState} from 'react';
import '../Game.css'
import GameCircle from './GameCircle';
import Header from './Header';
import Footer from './Footer';
import { isDraw, isWinner } from '../helper';

import{GAME_STATE_PLAYING , GAME_STATE_WIN, PLAYER_1,PLAYER_2, NO_PLAYER, NO_CIRCLES, GAME_STATE_DRAW} from "../Constants"


const GameBoard = () =>{

    const [gameBoard, setGameBoard] = useState(Array(16).fill(NO_PLAYER));
    const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);
    const [gameState, setGameState] = useState(GAME_STATE_PLAYING);
    const[winPlayer, setWinPlayer] = useState(NO_PLAYER);
    console.log(gameBoard);

    const initBoard = ()=>{
        const circles =[]
        for (let i = 0; i < NO_CIRCLES; i++) {
            circles.push(renderCircle(i))            
        }
        return circles;
    }

    const circleClicked = (id) =>{
        console.log('circle cliked: '+ id);

        if (gameBoard[id]!== NO_PLAYER) return;
        if(gameState !== GAME_STATE_PLAYING) return;

        if(isWinner(gameBoard, id, currentPlayer)){
            //console.log("Winner");
            setGameState(GAME_STATE_WIN);
            setWinPlayer(currentPlayer);
        }
        if(isDraw(gameBoard, id, currentPlayer)){
            //console.log("Winner");
            setGameState(GAME_STATE_DRAW);
            setWinPlayer(NO_PLAYER);
        }
        /*
        spread operator creates deep arrays/objects which are not cloned into our main array so better to use .map() 
        const board = [...gameBoard]
        board[id] = currentPlayer;
        setGameBoard(board);
        */
        setGameBoard(prev => {
            return prev.map((circle,pos)=>{
                if(pos === id) return currentPlayer;
                return circle;  
            })
        });

        setCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1)

        console.log(gameBoard);
        console.log(currentPlayer);
    }
    const renderCircle = id => {

        return (
            <GameCircle key={id} id={id} className={`player_${gameBoard[id]}`} onCircleClicked = {circleClicked} />
        )
    }
    return(
        <>
            <Header gameState={gameState} currentPlayer={currentPlayer} winPlayer = {winPlayer} />
                <div className='gameBoard'>
                    {initBoard()}
                </div>
            <Footer />
        </>
    )
}

export default GameBoard;