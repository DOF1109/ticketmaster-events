import EventItems from "./components/EventItems/EventItems";
import eventsJSON from "../../data/events.json";
import { useState } from "react";

const Events = () => {
    const [data] = useState(eventsJSON);
    const events = data._embedded.events;
    
    const eventComponent = events.map((eventItem) => (
        <EventItems 
            key={`event-item-${eventItem.id}`}
            name={eventItem.name}
            info={eventItem.info}
            image={eventItem.images[0].url}
        />
    ));

    return(
        <>
            <p>Eventos</p>
            {eventComponent}
        </>
    );
};

export default Events;