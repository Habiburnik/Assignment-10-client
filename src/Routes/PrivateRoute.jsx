import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/pages/Loading";


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation();

    if (loading)
        {
            return <Loading></Loading>
        }
        if (user){
            return children;
        }
        return <Navigate state= {location.pathname} to='/auth/login' ></Navigate>


};

export default PrivateRoute;