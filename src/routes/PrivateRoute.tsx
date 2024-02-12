import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

interface Props {
    component: React.ComponentType
    path?: string
}

export const PrivateRoute: React.FC<Props> = ({ component: RouteComponent }) => {
    let isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated)

    if (isAuthenticated) {
        return <RouteComponent />
    }

    return <Navigate to="/login" />
}