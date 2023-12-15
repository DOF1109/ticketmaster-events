import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import Events from './components/Events/Events'
import SignUpForm from './components/SignUpForm/SignUpForm';

function App() {
  const [searchValue, setSearchValue] = useState("");

  const handleNavbarSearch = (value) => {
    setSearchValue(value)
  }

  return (
    <>
      <SignUpForm />
      {/*<Navbar onSearch={handleNavbarSearch} />
      <Events searchValue={searchValue} />*/}
    </>
  )
}

export default App
