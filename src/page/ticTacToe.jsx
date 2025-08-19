import { useEffect, useState } from "react"

const TicTacToe = () => {
  const [box, setBox] = useState("O")
  const [isStarted, setStarted] = useState(false)
  const [ticTaxBox, setTicTacTocBox] = useState([{}, {}, {}, {}, {}, {}, {}, {}, {}])

  const handleBoxClick = (index) => {
    if (!isStarted) {
      setStarted(true)
    }
    setBox((prev) => ({
      value: prev.value === "O" ? "X" : "O",
      textColor: prev.value === "O" ? "text-red-800" : "text-yellow-500"
    }))
    setTicTacTocBox(prev => {
      return prev = prev.map((_, i) => {
        if (i == index) {
          return box
        }
        return _
      })
    })
  }
  useEffect(() => {
  }, [box])
  return (
    <div className="bg-black w-12/12 h-svh flex flex-col gap-5 justify-center items-center">
      <div className="text-gray-500 text-4xl py-5 font-extrabold">{isStarted ? "Game Started!!" : "Start Game!"}</div>
      <div className="w-3/12 h-3/6  flex-wrap flex bg-white">
        {ticTaxBox.map((_, index) => (
          <div key={index} className={`w-1/3 bg-yellow-100 border flex justify-center items-center text-6xl font-bold ${_.textColor}`} onClick={() => handleBoxClick(index)}>{_.value}</div>
        ))}
      </div>
    </div>
  )
}

export default TicTacToe