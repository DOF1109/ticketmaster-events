import { useRouteError } from 'react-router-dom'
import './Error404.css'

const Error404 = () => {
    const error = useRouteError()

    return (
        <div className='container-error'>
            <h3 className='title-error'>{error.status} Ops!</h3>
            <p className='description-error'>{error.data}</p>
        </div>
    )
}

export default Error404