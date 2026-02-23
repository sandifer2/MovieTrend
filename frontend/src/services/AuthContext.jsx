import { useContext, createContext, useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import { ID } from "appwrite";
import { account } from "./appwrite";

const AuthContext = createContext()

export const AuthProvider = ({children}) => {

    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() =>{
        checkUserStatus().finally(() => setIsLoading(false))
    }, [])

    const loginUser = async (userInfo) => {
        setIsLoading(true);
        try{
            let response = await account.createEmailPasswordSession(
                userInfo.email,
                userInfo.password
            )
            const accountData = await account.get()

            setUser(accountData);
            console.log('SESSION:', response)
        }catch(error){
            console.error(error)

        }



        setIsLoading(false);
    }
    
    const logoutUser = () => {
        account.deleteSession('current')
        setUser(null)
    }

    const registerUser = async(userInfo)  => {
        setIsLoading(true)
        try{
            let createResponse = await account.create(
                ID.unique(),
                userInfo.email,
                userInfo.password
            )

            let loginResponse = await account.createEmailPasswordSession(
                userInfo.email,
                userInfo.password
            )

            let accountDetails = await account.get()
            setUser(accountDetails)



        }catch(error){
            console.error(error)
        }




        setIsLoading(false)

    }

    const checkUserStatus = async() => {

        try{

            let accountDetails = await account.get()
            setUser(accountDetails)
        }catch(error){
            // no active session, user stays null
        }


    }



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