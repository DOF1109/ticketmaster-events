import { useState } from "react";

const Navbar = ({onSearch}) => {
    const [search, setSearch] = useState('');

    const handleInputChange = (event) => {
        setSearch(event.target.value);
    };

    const handleInputKeyDown = (event) => {
        if (event.key === "Enter") 
            onSearch(search.trim())
    };
    
    return(
        <>
            <p>Mi boletera</p>
            <input 
                type="text" 
                placeholder="Buscar evento" 
                onChange={handleInputChange} 
                onKeyDown={handleInputKeyDown}
                value={search}
            />
        </>
    );
};

export default Navbar;