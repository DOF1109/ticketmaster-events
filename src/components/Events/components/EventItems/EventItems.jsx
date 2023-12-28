import './EventItem.css'

const EventItem = ({id, info, name, image, onEventClick}) => {

    const handleSeeMoreClick = (event) => {
        // Detiene la propagacion del evento (onClick en este caso) del padre
        event.stopPropagation();
        onEventClick(id);
    };

    return (
        <div className='event-item-container' onClick={() => console.log("Padre clickeado")}>
            <img src={image} alt={name} width='200' height='200' />
            <div className='event-info-container'>
                <h4 className='event-name'>{name}</h4>
                <p className='event-info line-clamp'>{info}</p>
                <button className='btn-see-more' onClick={handleSeeMoreClick}>Ver más</button>
            </div>
        </div>
    );
};

export default EventItem;