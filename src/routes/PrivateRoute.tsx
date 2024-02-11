import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

interface Props {
    component: React.ComponentType
    path?: string
}

export const PrivateRoute: React.FC<Props> = ({ component: RouteComponent }) => {


    let isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated)

    console.log(isAuthenticated)

    if (isAuthenticated) {
        return <RouteComponent />
    }

    return <Navigate to="/login" />
}

// function App() {
//     return (
//         <div className="App">
//             <Header />
//             <Routes>
//                 <Route path="/" element={<Login />} />
//                 <Route path="*" element={<NotFound />} />
//                 <Route
//                     path="dashboard"
//                     element={<PrivateRoute roles={[ROLE.ADMIN]} component={Dashboard} />}
//                 />
//                 <Route
//                     path="users"
//                     element={<PrivateRoute roles={[ROLE.ADMIN, ROLE.USER]} component={Users} />}
//                 />
//             </Routes>
//         </div>
//     )
// }