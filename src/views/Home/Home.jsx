import { useEffect, useRef, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Events from '../../components/Events/Events'

const Home = () => {
    const [searchValue, setSearchValue] = useState("")
    const containerRef = useRef()

    useEffect(()=>{
        console.log("useEffect");
    }, [])

    const handleNavbarSearch = (value) => {
        console.log(containerRef.current);
        setSearchValue(value)
    }

    return (
        <>
            <Navbar onSearch={handleNavbarSearch} ref={containerRef} />
            <Events searchValue={searchValue} />
        </>
    )
}

export default Home