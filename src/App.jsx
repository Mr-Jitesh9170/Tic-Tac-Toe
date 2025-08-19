import './App.css'
import StartGame from './page/startGame'
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartGame />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
