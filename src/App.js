//import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function Square() {
  const [value, setValue] = useState(null) //valuearmazena o valor e setValue é uma função que pode ser usada para alterar o valor

  function handleClick() {
    setValue('X')
  }

  return (
    <button className="square" 
    onClick={handleClick}>
      {value}</button>
  )
  
}

function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>

      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>

      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>

    </>
  )

}

export default Board;