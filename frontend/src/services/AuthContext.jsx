import { useContext, createContext, useState, useEffect } from "react";
import Spinner from "../components/Spinner";

const AuthContext = createContext()

export const AuthProvider = ({children}) => {

    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(true);

    useEffect(() =>{
        
        setIsLoading(false)
    
    }, [])

    const loginUser = (userInfo) => {}
    
    const logoutUser = () => {}

    const registerUser = (userInfo)  => {}

    const checkStatus = () => {}

    const 


    contextData = {
        user,
        loginUser,
        logoutUser,
        registerUser

    }

    return(
        <AuthContext.Provider value={contextData}>
            { isLoading ? <Spinner/> : children }    
        </AuthContext.Provider>
    )
 

}

export const useAuth = () => { return useContext(AuthContext) }

export default AuthContext;