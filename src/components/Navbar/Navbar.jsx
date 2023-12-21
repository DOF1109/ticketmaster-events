import { useState, forwardRef, useImperativeHandle } from "react";

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
        <div ref={ref}>
            <p>Mi boletera</p>
            <input 
                type="text" 
                placeholder="Buscar evento" 
                onChange={handleInputChange} 
                onKeyDown={handleInputKeyDown}
                value={search}
            />
        </div>
    );
});

// Para evitar warnings en la consola del navegador usando forwardRef
Navbar.displayName = "Navbar"

export default Navbar;