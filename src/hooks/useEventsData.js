import { useState, useEffect } from "react"
import eventsJSON from "../data/events.json"

const useEventsData = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState()

    // Se ejecuta solo al montar el componente
    useEffect(()=>{
        // Load API call
        setTimeout(()=>{
            // Simulo demora de 3seg de carga de datos
            try {
                setData(eventsJSON)
                setIsLoading(false)
            } catch (e) {
                setError(e)
            }
        }, 3000)
        }, [])

    const events = data?._embedded?.events || []

    return {
        events,
        isLoading,
        error
    }
}

export default useEventsData
