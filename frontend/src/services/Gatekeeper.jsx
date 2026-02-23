import { Outlet, Navigate} from "react-router-dom"
import { useAuth } from "./AuthContext";

const Gatekeeper = () =>{

    const { user } = useAuth();


    return user ? <Outlet/> : <Navigate to={ '/login' }/> //if user pass to children, else user not authenticated redirect to login TODO: read outlet/nav docs 


};

export default Gatekeeper;