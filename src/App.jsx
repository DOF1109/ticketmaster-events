import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import Events from './components/Events/Events'

function App() {
  const [searchValue, setSearchValue] = useState("");

  const handleNavbarSearch = (value) => {
    setSearchValue(value)
  }

  return (
    <>
      <Navbar onSearch={handleNavbarSearch} />
      <Events searchValue={searchValue} />
    </>
  )
}

export default App
