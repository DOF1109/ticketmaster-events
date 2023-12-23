import { useState, forwardRef, useImperativeHandle } from "react";
import './Navbar.css'

const Navbar = forwardRef(({onSearch}, ref) => {
    const [search, setSearch] = useState('')

    // Expongo lo necesario al padre, necesito su referencia
    // puedo exponer atributos o metodos
    useImperativeHandle(ref, ()=>({
        search,
    }))

    const handleInputChange = (event) => {
        setSearch(event.target.value);
    };

    const handleInputKeyDown = (event) => {
        if (event.key === "Enter") 
            onSearch(search.trim())
    };
    
    return(
        <div ref={ref} className="container">
            <div className="container-title">
                <h1>Mi boletera</h1>
            </div>
            <div className="container-search">
                <input 
                    type="text" 
                    placeholder="Buscar evento" 
                    onChange={handleInputChange} 
                    onKeyDown={handleInputKeyDown}
                    value={search}
                />
            </div>
        </div>
    );
});

// Para evitar warnings en la consola del navegador usando forwardRef
Navbar.displayName = "Navbar"

export default Navbar;