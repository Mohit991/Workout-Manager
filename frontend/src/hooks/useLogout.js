import { useAuthContext } from "./useAuthContext"
import {useWorkoutsContext} from "./useWorkoutsContext"

export const useLogout = () => {
    const {dispatch} = useAuthContext()
    const {dispatch: workoutsDispatch} = useWorkoutsContext()
    const logout = () => {
        //remove user from storage
        localStorage.removeItem('user')
        //remove user from global context
        dispatch({type: 'LOGOUT'})
        workoutsDispatch({type: 'SET_WORKOUTS', payload: null})
    }
    return {logout}
}