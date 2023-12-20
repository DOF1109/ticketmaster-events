import { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import Events from './components/Events/Events'

function App() {
  const [searchValue, setSearchValue] = useState("");

  useEffect(()=>{
    console.log("useEffect");
  }, [])

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
