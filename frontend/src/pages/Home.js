import {useEffect} from 'react'
import WorkoutDetails from '../Components/WorkoutDetails'
import WorkoutForm from '../Components/WorkoutForm'
import {useWorkoutsContext} from '../hooks/useWorkoutsContext'
import {useAuthContext} from '../hooks/useAuthContext'

const Home = () => {
    const {workouts, dispatch} = useWorkoutsContext()
    const {user} = useAuthContext()
    useEffect(() =>{
        const fetchWorkouts = async() => {
            const response = await fetch('https://workout-manager-black.vercel.app/api/workouts', {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json()
            if (response.ok){
                dispatch({type: 'SET_WORKOUTS', payload: json})
            }
        }
        if(user){
            fetchWorkouts()
        }
        
    }, [dispatch])
    return ( 
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key = {workout._id} workout = {workout} />
                ))}
            </div>
            <WorkoutForm />
        </div>
     );
}
 
export default Home;