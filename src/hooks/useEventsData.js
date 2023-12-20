import { useState } from "react"
import eventsJSON from "../data/events.json"

const useEventsData = () => {
    const [data] = useState(eventsJSON)
    const events = data._embedded.events

    return {
        events
    }
}

export default useEventsData
