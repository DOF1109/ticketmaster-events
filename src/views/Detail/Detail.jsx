import { useParams } from "react-router-dom"

const Detail = () => {
    const {eventId} = useParams()

    return (
        <div>
            Detail
            <br />
            ID: {eventId}
        </div>
    )
}

export default Detail