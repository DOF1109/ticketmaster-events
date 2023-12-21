import useEventsData from "../../hooks/useEventsData";
import EventItems from "./components/EventItems/EventItems";

const Events = ({searchValue}) => {
    const {events, isLoading, error} = useEventsData()

    const handleEventClick = (id) => {
        console.log(`Evento clickeado con id: ${id}`);
    };
    
    // Muestra los eventos y los filtra si se inició la busqueda
    const renderEvents = () => {
        let eventsFiltered = events

        if (searchValue !== ""){
            eventsFiltered = eventsFiltered.filter((item) => item.name.toLowerCase().includes(searchValue))
        }
        return eventsFiltered.map((eventItem) => (
            <EventItems 
                id={eventItem.id}
                key={`event-item-${eventItem.id}`}
                name={eventItem.name}
                info={eventItem.info}
                image={eventItem.images[0].url}
                onEventClick={handleEventClick}
            />
        ))
    };

    if (error)
        return <p>Ocurrió un error, recargue por favor</p>

    if (isLoading)
        return <p>Cargando...</p>

    return(
        <>
            <p>Eventos</p>
            {renderEvents()}
        </>
    );
};

export default Events;