const EventItems = ({info, name, image}) => {
    return (
        <>
            <img src={image} alt={name} width='200' height='200' />
            <h4>{name}</h4>
            <p>{info}</p>
        </>
    );
};

export default EventItems;