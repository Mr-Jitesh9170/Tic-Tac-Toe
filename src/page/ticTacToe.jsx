import { useState } from "react"

const TicTacToe = () => {
  const [box, setBox] = useState('0')

  const handleBoxClick = () => {

  }
  return (
    <div className="bg-black w-12/12 h-svh flex justify-center items-center">
      <div className="w-3/12 h-3/6  flex-wrap flex bg-white">
        {Array.from({ length: 9 }).map((_, index) => (
          <div key={index} className="w-1/3 bg-yellow-100 border flex justify-center items-center text-2xl font-bold">1</div>
        ))}
      </div>
    </div>
  )
}

export default TicTacToe