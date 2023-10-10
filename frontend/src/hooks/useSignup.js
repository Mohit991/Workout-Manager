import { useState } from "react";
import { useAuthContext } from '../hooks/useAuthContext'

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const [isSuccess, setIsSuccess] = useState(null)
    const {dispatch} = useAuthContext()
    const signup = async (email, password) => {
        setIsLoading(true)
        setIsSuccess(false)
        setError(null)

        const response = await fetch('https://workout-manager-black.vercel.app/api/user/signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ email, password })
          })
          
        const json = await response.json()

        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
            setIsSuccess(false)
        }
        if(response.ok){
            //save the user to local storage. 
            localStorage.setItem('user', JSON.stringify(json))
            //saving the JWT to application context
            dispatch({type: 'LOGIN', payload: json})
            setIsLoading(false)
            setIsSuccess(true)
        }
    }
    return {signup, isLoading, error, isSuccess}
}