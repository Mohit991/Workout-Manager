import {useWorkoutsContext} from '../hooks/useWorkoutsContext'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { useAuthContext } from '../hooks/useAuthContext'
import { useState } from 'react'
const WorkoutDetails = ({workout}) => {
    const {dispatch} = useWorkoutsContext()
    const {user} = useAuthContext()

    const [canEdit, setCanEdit] = useState(false)
    const [title, setTitle] = useState(workout.title)
    const [load, setLoad] = useState(workout.load)
    const [reps, setReps] = useState(workout.reps)

    const handleDelete = async () => {
        if(!user){
            return
        }
        const response = await fetch('https://workout-manager-black.vercel.app/api/workouts/' + workout._id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()

        if(response.ok){
            dispatch({type: 'DELETE_WORKOUT', payload: json})
        }
    }

    const makeEdittable = () => {
        setCanEdit(true)
    }

    const handleUpdate = async (e) => {
        e.preventDefault()
        if(!user){
            return
        }
        const updatedWorkout = {title, load, reps}

        const response = await fetch('https://workout-manager-black.vercel.app/api/workouts/' + workout._id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            },
            body: JSON.stringify(updatedWorkout)
            
        })

        const json = await response.json()

        if(response.ok){
            dispatch({type: 'UPDATE_WORKOUT', payload: json})
        }
        setCanEdit(false)
        
    }

    return ( 
        // <div className="workout-details">
        //     <h4>{workout.title}</h4>
        //     <p><strong>Load (kg):</strong>{workout.load}</p>
        //     <p><strong>Reps:</strong>{workout.reps}</p>
        //     <p>{formatDistanceToNow(new Date(workout.createdAt), {addSuffix: true})}</p>
        //     <span className = "material-symbols-outlined" onClick = {handleClick}>Delete</span>
        // </div>

        <div className="workout-details">
            <form onSubmit={handleUpdate}>
                <label><strong>Title:</strong></label>
                <input 
                type="text" 
                value={canEdit? title : workout.title} 
                disabled={!canEdit} 
                onChange={(e) => setTitle(e.target.value)}
                />
            
                <label><strong>Load (kg):</strong></label>
                <input 
                type="number" 
                value={canEdit? load : workout.load} 
                disabled={!canEdit} 
                onChange={(e) => setLoad(e.target.value)}
                />
        
                <label><strong>Reps:</strong></label>
                <input 
                type="number" 
                value={canEdit? reps : workout.reps} 
                disabled={!canEdit} 
                onChange={(e) => setReps(e.target.value)}
                />
        
                <div>
                    <label><strong>Created:</strong></label>
                    <p style={{color: "green"}}>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
                </div>

                {canEdit &&
                <button style={{marginTop: "15px"}} type='submit'>Save Workout</button>
                }
                <span className="material-symbols-outlined" onClick={handleDelete}>Delete</span>
                <span style={{marginTop: "85px"}} className="material-symbols-outlined" onClick={makeEdittable}>Update</span>
            </form>
        </div>
     );
}
 
export default WorkoutDetails;