import { useContext, createContext, useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import { account } from "./appwrite";

const AuthContext = createContext()

export const AuthProvider = ({children}) => {

    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(false);

    useEffect(() =>{
        
        setIsLoading(false)
    
    }, [])

    const loginUser = async (userInfo) => {
        setIsLoading(true);
        try{
            let response = await account.createEmailPasswordSession(
                userInfo.email,
                userInfo.password
            )
            setUser(response);
            console.log('SESSION:', response)
        }catch(error){

        }



        setIsLoading(false);
    }
    
    const logoutUser = () => {}

    const registerUser = (userInfo)  => {}

    const checkStatus = () => {}



    const contextData = {
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