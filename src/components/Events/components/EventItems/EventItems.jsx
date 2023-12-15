const EventItems = ({id, info, name, image, onEventClick}) => {

    const handleSeeMoreClick = (event) => {
        // Detiene la propagacion del evento (onClick en este caso) del padre
        event.stopPropagation();
        onEventClick(id);
    };

    return (
        <div onClick={() => console.log("Padre clickeado")}>
            <img src={image} alt={name} width='200' height='200' />
            <h4>{name}</h4>
            <p>{info}</p>
            <button onClick={handleSeeMoreClick}>Ver más</button>
        </div>
    );
};

export default EventItems;