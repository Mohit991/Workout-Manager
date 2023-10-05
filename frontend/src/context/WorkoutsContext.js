import { createContext, useReducer } from 'react'

export const WorkoutsContext = createContext()

export const workoutsReducer = (state, action) => {
    switch(action.type){
        case 'SET_WORKOUTS':
            return {
                workouts: action.payload
            }
        case 'CREATE_WORKOUT':
            return {
                workouts: [action.payload, ...state.workouts]
            }
        case 'DELETE_WORKOUT':
            return {
                workouts: state.workouts.filter((workout) => workout._id != action.payload._id)
            }
        case 'UPDATE_WORKOUT':
            const workouts = []
            for(var i=0; i<state.workouts.length; i++){
                if(state.workouts[i]._id == action.payload._id){
                    workouts.push(action.payload)
                }
                else{
                    workouts.push(state.workouts[i])
                }
            }
            return {workouts}


        default:
            return state
    }
}

export const WorkoutsContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(workoutsReducer, {
        workouts: null
    })
    
    return (
    <WorkoutsContext.Provider value={{...state, dispatch}}>
        {children}
    </WorkoutsContext.Provider>
    )
}