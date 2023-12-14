import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import Events from './components/Events/Events'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Events />
    </>
  )
}

export default App
