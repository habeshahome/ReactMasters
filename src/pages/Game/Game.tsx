// tik tak toe game
// I need 3x3 grid
// I need 2 players X and O
// I need to know who's turn it is
// I need to know when the game is over
// I need to know who won
// I need to know when the game is a draw

import React, { useState } from 'react';
import styled from 'styled-components';


// Game component
export const Game = () => {
    const [board, setBoard] = useState<string[]>(Array(9).fill(''))
    const [player, setPlayer] = useState<string>('X')
    const [winner, setWinner] = useState<string | null>(null)

    const checkWinner = (board: string[]) => {
        const winningCombos = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
            [0, 4, 8], [2, 4, 6] // diagonals
        ]
        for (let i = 0; i < winningCombos.length; i++) {
            const [a, b, c] = winningCombos[i]
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a]
            }
        }
        return null
    }

    const checkDraw = (board: string[]) => {
        return board.every((square) => square !== '')
    }

    const handleClick = (index: number) => {
        if (board[index] === '' && !winner) {
            const newBoard = [...board]
            newBoard[index] = player
            setBoard(newBoard)
            setPlayer(player === 'X' ? 'O' : 'X')
            setWinner(checkWinner(newBoard))
        }
    }


    return (<>
        <GameContainer>
            <GameInfo>
                <div>
                    <h1>
                        {
                            winner ? `Winner is ${winner}` : checkDraw(board) ? 'Draw' : `Player ${player}'s turn`
                        }
                    </h1>

                    <h3> Start game or select player </h3>
                    <button onClick={() => setPlayer('X')}> X </button>
                    <button onClick={() => setPlayer('O')}> O </button>
                    <h4> Player {player} </h4>
                </div>

            </GameInfo>
            <Board>
                {
                    board.map((square, index) =>
                        <Square key={index} onClick={() => handleClick(index)}> {square} </Square>
                    )
                }
            </Board>
        </GameContainer>
    </>)
}




// this will be hoisted to the top of the file
const Square = styled.button`
    height: 100px;
    width: 100px;
    border: 1px solid black;
    border-radius: 0px;
    font-size: 1.1em;
`
const Board = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 5px;
    & :nth-child(1) {
        border-radius: 20px 0px 0px 0px;
    };
    & :nth-child(3) {
        border-radius: 0px 20px 0px 0px;
    }
    & :nth-child(7) {
        border-radius: 0px 0px 0px 20px;
    }
    & :nth-child(9) {
        border-radius: 0px 0px 20px 0px;
    }
`
const GameContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`
const GameInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 3em;
    & > div > button { 
        display: inline-block;
        margin: 0.5em 1em;
        padding: 1em 2em;
        outline: none;
        &:hover {
            background-color: #393939;
            outline: none;
        }
    }
`