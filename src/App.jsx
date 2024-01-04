import { useState } from 'react'
import './App.css'
import InputForm from "./Components/InputForm/index.jsx";

function App() {

    const [input, setInput] = useState("");

  return (
    <>
      <div>
          <h1>Sunrise/Sunset Calculator</h1>
          <InputForm input={input} setInput={setInput}/>
      </div>
    </>
  )
}

export default App
