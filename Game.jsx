import { useState } from "react";
import "./Game.scss";
const array = ["", "", "", "", "", "", "", "", ""]
export const Game = () => {
  const [value, setValue] = useState("")
  const RestartGame = () => {
    array.map((_, i) => {
      array[i] = "";
      return <div className="box">{_}</div>
    })
    setValue("")
  }
  return (
    <div className="game-container">
      <h1>Tic Tac Toe</h1>
      <div className="bottom">
        {
          array.map((_, i) => {
            return <div className="box" onClick={() => {
              if (value === "0") {
                array[i] = value;
                setValue("X")
              }
              else {
                array[i] = value;
                setValue("0")
              }
              for (let i = 0; i < 9; i++) {
                if (array[i] === array[i + 1] && array[i + 1] === array[i + 2] && array[i] !== "" && i % 3 === 0) {
                  alert(`${value} won the game!`)
                  break;
                }
                else
                  if (array[i] === array[i + 3] && array[i + 3] === array[i + 6] && array[i] !== "") {
                    alert(`${value} won the game!`)
                    break;
                  }
                  else
                    if (array[0] === array[4] && array[4] === array[8] && array[0] !== "") {
                      alert(`${value} won the game!`)
                      break;
                    } else
                      if (array[2] === array[4] && array[4] === array[6] && array[2] !== "") {
                        alert(`${value} won the game!`)
                        break;
                      }
              }
            }} >{_}</div>
          })
        }
      </div>
      <div className="button">
        <div>{(value === "") ? "Start Game" : `${value} 's Truns`}</div>
        <button onClick={() => {
          RestartGame();
        }}>Restart</button>
      </div>
    </div >
  )
}