import { useState } from "react";
import { useAuthContext } from '../hooks/useAuthContext'

export const useLogin = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()
    const login = async (email, password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('https://workout-manager-black.vercel.app/api/user/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ email, password })
          })
          console.log(process.env.REACT_APP_BASE_URL_DEV)
        const json = await response.json()

        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok){
            //save the user to local storage. 
            localStorage.setItem('user', JSON.stringify(json))
            //saving the JWT to application context
            dispatch({type: 'LOGIN', payload: json})
            setIsLoading(false)
        }
    }
    return {login, isLoading, error}
}