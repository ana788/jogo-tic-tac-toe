//import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function Square({value, onSquareClick}) {
  return (
    <button className="square" onClick={onSquareClick}>{value}</button>
  ) 
}

function Board() {
  const [xIsNext, setXIsNext] = useState(true)
  const [squares, setSquares] = useState(Array(9).fill(null)) //squares armazena o valor e setSquares é uma função que pode ser usada para alterar o valor

  function handleClick(i) {
    if(squares[i]){
      return; // return exits the function immediately
      console.log('será que essa linha vai rodar? Vamos ver!') // so this line will never run; it is unreachable. Todas as linhas após o return nunca serão rodadas!
    }

    const nextSquares = squares.slice();

    if(xIsNext){
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    
    setSquares(nextSquares);
    setXIsNext(!xIsNext)
  }

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
        <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
      </div>

      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
      </div>

      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
      </div>

    </>
  )

}

export default Board;