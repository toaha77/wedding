import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

  
 const PrivateRoute = ({children}) => {


    const {user, loading} = useContext(AuthContext)
     if (loading) {
        return  <span className="loading loading-spinner loading-lg"> </span>
            
        

    }
    if (!user) {
        return  <Navigate to='/login'></Navigate>
    }
    return  children
 };
 
 export default PrivateRoute;