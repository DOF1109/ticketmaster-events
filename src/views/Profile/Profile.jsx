import { Outlet } from "react-router-dom"

const Profile = () => {
    return (
        <div>
            Profile

            {/* Permite mostrar las rutas anidadas */}
            <Outlet />
        </div>
    )
}

export default Profile